"use client";

import Image from "next/image";
import {ArrowForward} from "@mui/icons-material";
import {usePathname} from "next/navigation";

export default function HeroSection({backgroundType, backgroundSrc, overlayContent, mediaClassName = "", containerClass = "", buttonLink, imagePosition}) {
  const pathname = usePathname();

  return (
    <div className={`relative w-full overflow-hidden ${containerClass}`}>
      {/* Hero Section */}
      <div className="relative w-full h-full">
        {/* Background */}
        {backgroundType === "video" ? (
          <video autoPlay loop muted className={`absolute top-0 left-0 w-full h-full object-cover -z-10 ${mediaClassName}`}>
            <source src={backgroundSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image src={backgroundSrc} alt="hero background" className={`w-full h-full opacity-50 ${mediaClassName}`} fill style={{objectFit: "cover", objectPosition: `${imagePosition}`}} />
        )}

        {/* Overlay Content */}
        <div className="p-12 text-left absolute transform top-1/2 -translate-y-1/2 text-gray-50 sm:left-12 sm:border-l-2 lg:left-48">
          <p className="mb-2 text-md sm:text-base lg:text-lg">{overlayContent.subheading}</p>
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl sm:max-w-5xl font-bold">{overlayContent.heading}</h1>
          <p className="mb-6 text-lg lg:text-3xl font-extralight sm:max-w-5xl mx-auto sm:mx-0">{overlayContent.description}</p>

          <a href={buttonLink} className="mr-4 inline-flex items-center rounded-full outline outline-1 px-6 py-3 text-sm sm:text-base lg:text-lg font-medium hover:outline-brand hover:text-brand">
            {overlayContent.buttonText} <ArrowForward fontSize="inherit"/>
          </a>

          {pathname !== "/services" ? (
            <a href="/services" className="inline-flex items-center rounded-full outline outline-1 px-6 py-3 text-sm sm:text-base lg:text-lg font-medium hover:outline-brand hover:text-brand">
              services <ArrowForward fontSize="inherit"/>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
