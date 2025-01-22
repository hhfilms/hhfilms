import {create} from "zustand";
import {persist} from "zustand/middleware";

const useYouTubeStore = create(
  persist(
    (set) => ({
      videos: [], // Initial state for videos
      isLoading: false, // Loading state
      error: null, // Error state

      setVideos: (videos) => set({videos}),

      refreshVideos: async () => {
        set({isLoading: true, error: null}); // Start loading and reset errors
        try {
          const response = await fetch("/api/youtube");
          const data = await response.json();

          if (response.ok) {
            set({videos: data, isLoading: false}); // Update videos and stop loading
          } else {
            set({
              error: data.error || "Failed to fetch videos",
              isLoading: false,
            });
          }
        } catch (err) {
          set({
            error: "An error occurred while fetching videos",
            isLoading: false,
          });
          console.error("Error fetching videos:", err);
        }
      },

      clearVideos: () => set({videos: [], error: null}), // Clear videos and reset errors
    }),
    {name: "youtube-videos"} // Key for localStorage persistence
  )
);

export default useYouTubeStore;
