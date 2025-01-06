import axios from "axios";
let cachedData = null;
let cacheTime = null;

export default async function handler(req, res) {
  const YT_API_KEY = process.env.YT_API_KEY;
  const UPLOADS_PLAYLIST_ID = process.env.UPLOADS_PLAYLIST_ID;

  const cacheDuration = 60 * 60 * 1000; // Cache for 1 hour

  // Use cached data if available and not expired
  if (cachedData && Date.now() - cacheTime < cacheDuration) {
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=59");
    return res.status(200).json(cachedData);
  }

  try {
    // Fetch media data
    const ytResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems`, {
      params: {
        part: "snippet",
        maxResults: 5,
        playlistId: UPLOADS_PLAYLIST_ID,
        key: YT_API_KEY,
      },
    });

    if (ytResponse.status !== 200) {
      throw new Error(`Error fetching data: ${ytResponse.statusText}`);
    }

    const youtubeData = ytResponse.data;

    // Cache the response
    cachedData = youtubeData;
    cacheTime = Date.now();

    // Set Cache-Control header for the response
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=59");

    // Respond with the media data
    res.status(200).json(youtubeData);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({error: "Internal server error"});
  }
}
