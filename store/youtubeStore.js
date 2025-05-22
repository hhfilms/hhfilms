import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useYouTubeStore = create(
  devtools(
    persist(
      (set) => ({
        videos: [],
        isLoading: false,
        error: null,

        setVideos: (videos) => set({ videos }),

        refreshVideos: async () => {
          set({ isLoading: true, error: null });
          try {
            const response = await fetch("/api/youtube");
            const data = await response.json();

            if (response.ok) {
              set({ videos: data, isLoading: false });
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

        clearVideos: () => set({ videos: [], error: null }),
      }),
      {
        name: "youtube-videos", // localStorage key
      }
    ),
    {
      name: "YouTubeStore", // appears in Redux DevTools
    }
  )
);

export default useYouTubeStore;