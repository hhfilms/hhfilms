"use client";
import {useEffect, useState, useRef} from "react";
import {Navigation, Mousewheel, A11y, FreeMode, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";
import Loading from "@/components/Loading";
import InstagramIcon from "@mui/icons-material/Instagram";

const InstagramFeed = () => {
  const [reels, setReels] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const videoRefs = useRef([]);

  const [playingIndex, setPlayingIndex] = useState(null); // Index of the playing video or null

  const handleTogglePlay = (index) => {
    // Pause all videos except the clicked one
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== index) {
        video.pause();
      }
    });

    // Play or pause the clicked video
    const clickedVideo = videoRefs.current[index];
    if (clickedVideo.paused) {
      clickedVideo.play();
      setPlayingIndex(index); // Set the playing index
    } else {
      clickedVideo.pause();
      setPlayingIndex(null); // No video is playing
    }
  };

  useEffect(() => {
    async function fetchReels() {
      try {
        const response = await fetch("/api/instagram");
        const data = await response.json();
        if (response.ok) {
          setReels(data.data); // Adjust depending on your API response
          setIsLoading(false);
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

  return isLoading ? (
    <Loading />
  ) : (
    <div className="text-gray-50">
      <Swiper
        className=""
        modules={[Navigation, A11y, Mousewheel, FreeMode, Pagination]}
        mousewheel={false}
        spaceBetween={20}
        slidesPerView={2.2} // Defaults for mobile
        loop={true}
        freeMode={false}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {slidesPerView: 3, spaceBetween: 20}, // Tablet (sm breakpoint)
          768: {slidesPerView: 4, spaceBetween: 30}, // Small laptop (md breakpoint)
          1440: {slidesPerView: 5, spaceBetween: 50}, // Desktop (lg breakpoint)
        }}>
        {reels.map((reel, index) =>
          reel.media_type === "VIDEO" && reel.id !== "17941856960969628" ? (
            <SwiperSlide key={reel.id}>
              <div className="group relative">
                <video
                  ref={(el) => (videoRefs.current[index] = el)} // Add video to refs array
                  poster={`${reel.thumbnail_url}`}
                  width="250"
                  onClick={() => handleTogglePlay(index)}
                  className="w-full rounded-xl">
                  <source src={reel.media_url} type="video/mp4" />
                </video>
                <p
                  onClick={() => handleTogglePlay(index)}
                  className={`absolute inset-0 bg-black/75 p-1 md:p-8 transition-opacity duration-300 flex flex-col items-center justify-center text-gray-50 text-xs md:text-base overflow-hidden ${
                    playingIndex === index ? "opacity-0 pointer-events-none" : "opacity-0 group-hover:opacity-100"
                  }`}>
                  {reel.caption.slice(0, 330)}
                  {reel.caption.length > 330 ? "..." : ""}
                </p>
              </div>

              <div className="font-light text-sm justify-center flex ">
                <Link className="inline-flex items-center text-center p-4 mb-2 text-dark hover:text-brand" href={`https://instagram.com/reel/${reel.shortcode}`} target="_blank">
                  <InstagramIcon color="inherit" /> <span className="ml-1 hidden md:inline-block">view on instagram</span>
                </Link>
              </div>
            </SwiperSlide>
          ) : null,
        )}
      </Swiper>
    </div>
  );
};

export default InstagramFeed;
