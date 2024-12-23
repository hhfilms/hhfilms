"use client";
import {Navigation, Mousewheel, A11y, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";

import jett from "./images/Jett.png"; // Import the image
import zi from "./images/Zi.png"; // Import the image
import jb from "./images/JB.png"; // Import the image
import pm from "./images/Playmakers.png"; // Import the image
import eb from "./images/EB.png"; // Import the image

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  {id: 1, src: jett, description: "showing skill during the 2024 texas high school playoffs vs richland", title: "jett lopez", url: "https://www.instagram.com/p/DDpwrp_JG69/"},
  {id: 2, src: zi, description: "2024 texas high school playoff highlights", title: "ziondre williams", url: "https://www.instagram.com/p/DDpxHcwpq8p/"},
  {id: 3, src: jb, description: "taking the opening kickoff to the house!", title: "jaylend brashears", url: "https://www.instagram.com/p/DDsJKNVp2T9/"},
  {id: 4, src: pm, description: "amarillo high skill position players making an impact", title: "playmakers", url: "https://www.instagram.com/p/DDw_8sfumDl/"},
  {id: 5, src: eb, description: "had himself a game during the 2024 texas high school playoffs vs lovejoy", title: "erik bowen", url: "https://www.instagram.com/p/DD3bMB8O2cq/"},
];

const Gallery = () => {
  return (
    <Swiper
      // install Swiper modules
      className="pb-22"
      modules={[Navigation, A11y, Mousewheel, FreeMode]}
      mousewheel={true}
      spaceBetween={50}
      slidesPerView={5}
      freeMode={true}
      navigation
      pagination={{clickable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <a href={image.url} target="_blank" rel="noopener noreferrer" className="group block w-full h-full relative text-center">
            {/* Image */}
            <img />
            <Image src={image.src} alt={image.title} width={800} height={600} className="w-full h-full object-cover rounded-lg" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 px-4 transition-opacity duration-300 flex flex-col items-center justify-center">
              <p className="text-lg text-white font-semibold">{image.title}</p>
              <p className="text-sm text-white">{image.description}</p>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
