import axios from "axios";

let IG_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN; // Initial token

export default async function handler(req, res) {
  const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  try {
    // Fetch media data
    const mediaResponse = await axios.get(`https://graph.facebook.com/v21.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`, {
      params: {
        fields: "media_type,media_url,permalink,caption,thumbnail_url,shortcode,id,branded_content_partner_promote",
        access_token: IG_ACCESS_TOKEN,
      },
    });

    if (mediaResponse.status !== 200) {
      throw new Error(`Error fetching data: ${mediaResponse.statusText}`);
    }

    const data = mediaResponse.data;

    // Set Cache-Control header for the response
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=59");

    // Respond with the media data
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({error: "Internal server error"});
  }
}
