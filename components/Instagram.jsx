"use client";
import {useEffect, useState, useRef} from "react";
import {Navigation, Mousewheel, A11y, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const InstagramFeed = () => {
  const [reels, setReels] = useState([]);
  const [error, setError] = useState(null);

  const videoRefs = useRef([]);

  const handleTogglePlay = (index) => {
    // Pause all videos
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== index) {
        video.pause();
      }
    });

    // Play or pause the clicked video
    const clickedVideo = videoRefs.current[index];
    if (clickedVideo.paused) {
      clickedVideo.play();
    } else {
      clickedVideo.pause();
    }
  };

  useEffect(() => {
    async function fetchReels() {
      try {
        const response = await fetch("/api/instagram");
        const data = await response.json();
        if (response.ok) {
          setReels(data.data); // Adjust depending on your API response
        } else {
          throw new Error(data.error || "Failed to fetch Reels");
        }
      } catch (err) {
        setError(err.message);
      }
    }

    fetchReels();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="text-gray-50 min-h-screen">
      <Swiper
        className=""
        modules={[Navigation, A11y, Mousewheel, FreeMode]}
        mousewheel={false}
        spaceBetween={20}
        slidesPerView={1.2} // Defaults for mobile
        breakpoints={{
          640: {slidesPerView: 2.5, spaceBetween: 20}, // Tablet (sm breakpoint)
          768: {slidesPerView: 3.5, spaceBetween: 30}, // Small laptop (md breakpoint)
          1024: {slidesPerView: 4, spaceBetween: 50}, // Desktop (lg breakpoint)
        }}
        freeMode={false}
        navigation
        pagination={{clickable: true}}>
        {reels.map((reel, index) => (
          <SwiperSlide key={reel.id}>
            <div className="insta-embed">
              <video
                ref={(el) => (videoRefs.current[index] = el)} // Add video to refs array
                poster={`${reel.thumbnail_url}`}
                onClick={() => handleTogglePlay(index)}
                width="250"
                className="w-full">
                <source src={reel.media_url} type="video/mp4" />
              </video>
            </div>
            <p className="font-light text-center px-2">{reel.caption}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramFeed;