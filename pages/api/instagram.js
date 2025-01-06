import axios from "axios";

let cachedMediaData = null;
let cacheTime = null;

let IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN; // Initial token
let tokenExpiryTimestamp = parseInt(process.env.IG_ACCESS_TOKEN_EXPIRY, 10); // Expiry timestamp
const REFRESH_MARGIN = 60 * 60; // Refresh 1 hour before expiry
const CACHE_DURATION = 60 * 60 * 1000; // Cache media data for 1 hour

export default async function handler(req, res) {
  const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  try {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    // Check if the token is expired or nearing expiration
    if (!tokenExpiryTimestamp || currentTime >= tokenExpiryTimestamp - REFRESH_MARGIN) {
      console.log("Refreshing access token...");

      const refreshResponse = await axios.get("https://graph.instagram.com/refresh_access_token", {
        params: {
          grant_type: "ig_refresh_token",
          access_token: IG_ACCESS_TOKEN,
        },
      });

      if (!refreshResponse.data.access_token) {
        throw new Error("Failed to refresh the access token");
      }

      // Update the access token and expiry
      IG_ACCESS_TOKEN = refreshResponse.data.access_token;
      tokenExpiryTimestamp = currentTime + refreshResponse.data.expires_in;

      // Persist the updated token and expiry (e.g., in a database or secure store)
      // Example: Save to environment variables or a shared cache
      console.log("Token refreshed successfully.");
    } else {
      console.log("Access token is still valid.");
    }

    // Use cached media data if available and not expired
    if (cachedMediaData && Date.now() - cacheTime < CACHE_DURATION) {
      res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=59");
      return res.status(200).json(cachedMediaData);
    }

    // Fetch media data
    const mediaResponse = await axios.get(`https://graph.instagram.com/v21.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`, {
      params: {
        fields: "media_type,media_url,permalink,caption,thumbnail_url,shortcode,id,branded_content_partner_promote",
        access_token: IG_ACCESS_TOKEN,
      },
    });

    if (mediaResponse.status !== 200) {
      throw new Error(`Error fetching data: ${mediaResponse.statusText}`);
    }

    const data = mediaResponse.data;

    // Cache the media data
    cachedMediaData = data;
    cacheTime = Date.now();

    // Set Cache-Control header for the response
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=59");

    // Respond with the media data
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({error: "Internal server error"});
  }
}
