import axios from "axios";

export default async function handler(req, res) {
  const YT_API_KEY = process.env.YT_API_KEY;
  const UPLOADS_PLAYLIST_ID = process.env.UPLOADS_PLAYLIST_ID;

  try {
    // Fetch media data
    const ytResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${UPLOADS_PLAYLIST_ID}&key=${YT_API_KEY}`);

    if (ytResponse.status !== 200) {
      throw new Error(`Error fetching data: ${ytResponse.statusText}`);
    }

    const data = ytResponse.data;

    // Respond with the media data
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({error: error.message});
  }
}
