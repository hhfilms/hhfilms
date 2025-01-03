import axios from 'axios';

let tokenExpiryTimestamp = process.env.IG_ACCESS_TOKEN_EXPIRY; // Store the token expiry timestamp
const REFRESH_MARGIN = 60 * 60; // Refresh 1 hour before expiry

export default async function handler(req, res) {
  let IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN; // Store initial token
  const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID; // Replace with actual ID

  try {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    // Check if the token is expired or nearing expiration
    if (!tokenExpiryTimestamp || currentTime >= tokenExpiryTimestamp - REFRESH_MARGIN) {
      console.log('Refreshing access token...');

      const refreshResponse = await axios.get('https://graph.instagram.com/refresh_access_token', {
        params: {
          grant_type: 'ig_refresh_token',
          access_token: IG_ACCESS_TOKEN,
        },
      });

      if (!refreshResponse.data.access_token) {
        throw new Error('Failed to refresh the access token');
      }

      // Update the access token and expiry
      IG_ACCESS_TOKEN = refreshResponse.data.access_token;
      tokenExpiryTimestamp = currentTime + refreshResponse.data.expires_in;

      // Optionally: Store the new token and expiry (e.g., in a database or environment variable)
      process.env.IG_ACCESS_TOKEN = IG_ACCESS_TOKEN;
      process.env.IG_ACCESS_TOKEN_EXPIRY = tokenExpiryTimestamp.toString();
    } else {
      console.log('Access token is still valid.');
    }

    // Fetch media data
    const mediaResponse = await axios.get(
      `https://graph.instagram.com/v21.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`,
      {
        params: {
          fields: 'media_type,media_url,permalink,caption,thumbnail_url,shortcode,id,branded_content_partner_promote',
          access_token: IG_ACCESS_TOKEN,
        },
      }
    );

    if (mediaResponse.status !== 200) {
      throw new Error(`Error fetching data: ${mediaResponse.statusText}`);
    }

    const data = mediaResponse.data;

    // Respond with the media data
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  }
}
