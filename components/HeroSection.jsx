"use client";
import Image from "next/image";
import {usePathname} from "next/navigation";

export default function HeroSection({backgroundType, backgroundSrc, overlayContent, mediaClassName = "", containerClass = "", overlayClassName = "", buttonLink, imagePosition}) {
  const pathname = usePathname();
  const isVideo = backgroundType === "video";

  return (
    <div className={`bg-dark relative w-full overflow-hidden ${containerClass} ${isVideo ? "h-auto min-h-0" : ""}`}>
      {/* Hero Section */}
      <div className={`relative w-full ${isVideo ? "h-auto" : "h-full"} z-0`}>
        {/* Background */}
        {backgroundType === "video" ? (
          <>
            <video autoPlay loop muted playsInline preload="auto" className={`relative w-full max-w-full h-auto z-0 ${mediaClassName}`}>
              <source src={backgroundSrc} type="video/mp4" />
            </video>
            {/* Overlay layer */}
            <div className="absolute inset-0 bg-black/50 z-10" />
          </>
        ) : (
          <>
            <Image
              src={backgroundSrc}
              alt="hero background"
              fill
              priority
              className={`object-cover z-0 ${mediaClassName}`}
              style={{ objectPosition: imagePosition }}
            />
            {/* Overlay layer */}
            <div className="absolute inset-0 bg-black/30 z-10" />
          </>
        )}

        {/* Overlay Content */}
        <div className={`p-8 md:p-12 text-left relative lg:absolute z-20 lg:transform lg:-translate-y-2/3 text-gray-50 lg:left-12 lg:border-l-2 lg:left-48 ${overlayClassName}`}>
          <p className="mb-2 text-md sm:text-base lg:text-lg">{overlayContent.subheading}</p>
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl sm:max-w-5xl">{overlayContent.heading}</h1>
          <p className="mb-6 text-lg lg:text-xl sm:max-w-5xl mx-auto sm:mx-0 ">{overlayContent.description}</p>

          <a href={buttonLink} className="mr-4 inline-flex items-center rounded-full outline outline-1 px-6 py-3 text-sm sm:text-base lg:text-lg font-medium hover:outline-brand hover:text-brand">
            {overlayContent.buttonText}
          </a>

          {/* {pathname === "/" ? (
            <a href="/services" className="inline-flex items-center rounded-full outline outline-1 px-6 py-3 text-sm sm:text-base lg:text-lg font-medium hover:outline-brand hover:text-brand">
              services & pricing
            </a>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}
