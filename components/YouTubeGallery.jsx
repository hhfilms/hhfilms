"use client";
import {useEffect} from "react";
import {Navigation, Mousewheel, A11y, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Loading from "@/components/Loading";
import useYouTubeStore from "@/store/youtubeStore"; // Import the Zustand store

const YouTubeGallery = () => {
  const {videos, isLoading, error, refreshVideos} = useYouTubeStore();

  useEffect(() => {
    refreshVideos(); // Fetch latest videos on mount
  }, [refreshVideos]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div className="text-gray-50 w-full">
      <Swiper
        className=""
        modules={[Navigation, A11y, Mousewheel, FreeMode]}
        mousewheel={false}
        spaceBetween={20}
        freeMode={false}
        navigation
        pagination={{clickable: true}}
        slidesPerView={1}
        breakpoints={{
          640: {slidesPerView: 1, spaceBetween: 20},
          768: {slidesPerView: 2, spaceBetween: 30},
          1440: {slidesPerView: 3, spaceBetween: 50},
          1900: {slidesPerView: 4, spaceBetween: 50},
        }}>
        {videos?.map((item) =>
          item.tags.includes("sports") ? (
            <SwiperSlide key={item.id}>
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
              <div className=" text-center text-dark">
                <h2 className="md:text-xl sm:text-lg text-center">{item.title}</h2>
              </div>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
};

export default YouTubeGallery;
