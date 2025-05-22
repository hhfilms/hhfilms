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
    // Fetch playlist items
    const playlistResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems`, {
      params: {
        part: "snippet",
        maxResults: 15,
        playlistId: UPLOADS_PLAYLIST_ID,
        key: YT_API_KEY,
      },
    });

    if (playlistResponse.status !== 200) {
      throw new Error(`Error fetching playlist data: ${playlistResponse.statusText}`);
    }

    const playlistItems = playlistResponse.data.items;

    // Extract video IDs
    const videoIds = playlistItems.map((item) => item.snippet.resourceId.videoId);

    // Fetch video details (including tags)
    const videoResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos`, {
      params: {
        part: "snippet",
        id: videoIds.join(","),
        key: YT_API_KEY,
      },
    });

    if (videoResponse.status !== 200) {
      throw new Error(`Error fetching video details: ${videoResponse.statusText}`);
    }

    const videosWithTags = videoResponse.data.items.map((video) => ({
      id: video.id,
      title: video.snippet.title,
      tags: video.snippet.tags || [],
    }));

    // Cache the response
    cachedData = videosWithTags;
    cacheTime = Date.now();

    // Set Cache-Control header
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=59");

    // Respond with the combined data
    res.status(200).json(videosWithTags);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({error: "Internal server error"});
  }
}
