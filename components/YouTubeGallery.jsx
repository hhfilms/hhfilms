"use client";
import {useEffect, useState} from "react";
import {Navigation, Mousewheel, A11y, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const YouTubeGallery = () => {
  const [vids, setVids] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("/api/youtube");
        const data = await response.json();
        if (response.ok) {
          setVids(data); // Adjust depending on your API response
        } else {
          throw new Error(data.error || "Failed to fetch videos");
        }
      } catch (err) {
        setError(err.message);
      }
    }

    fetchVideos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="text-gray-50 w-full">
      <Swiper
        className=""
        modules={[Navigation, A11y, Mousewheel, FreeMode]}
        mousewheel={false}
        spaceBetween={20}
        freeMode={false}
        navigation
        pagination={{clickable: true}}
        slidesPerView={1} // Defaults for mobile
        breakpoints={{
          640: {slidesPerView: 1, spaceBetween: 20}, // Tablet (sm breakpoint)
          768: {slidesPerView: 2, spaceBetween: 30}, // Small laptop (md breakpoint)
          1440: {slidesPerView: 3, spaceBetween: 50}, // Desktop (lg breakpoint)
          1900: {slidesPerView: 4, spaceBetween: 50}, // Desktop (lg breakpoint)
        }}>
        {vids.items?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
            <div className="p-4 text-center text-gray-50">
              <h2 className="text-2xl sm:text-xl xl:text-2xl font-extralight font-assistant text-center text-gray-50">{item.snippet.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YouTubeGallery;
