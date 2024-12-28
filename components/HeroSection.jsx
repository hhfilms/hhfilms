import React from "react";

export default function HeroSection({backgroundType, backgroundSrc, overlayContent, showButton = true, mediaClassName = "", containerClass = "", buttonLink}) {
  return (
    <div className={`relative w-full overflow-hidden bg-gray-100 ${containerClass}`}>
      {/* Hero Section */}
      <div className="relative w-full h-full bg-background">
        {/* Background */}
        {backgroundType === "video" ? (
          <video autoPlay loop muted className={`absolute top-0 left-0 w-full h-full object-cover -z-10 ${mediaClassName}`}>
            <source src={backgroundSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={backgroundSrc} alt="hero background" className={`absolute top-0 left-0 w-full h-full object-cover opacity-50 ${mediaClassName}`} />
        )}

        {/* Overlay Content */}
        <div className="sm:left-12 lg:left-48 absolute transform top-1/2 -translate-y-1/2 text-gray-50 text-left sm:border-l-2 p-12 sm:max-sm:mt-[calc(199px+1rem)]">
          <p className="mb-2 text-sm sm:text-base lg:text-lg">{overlayContent.subheading}</p>
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">{overlayContent.heading}</h1>
          <p className="mb-6 text-sm sm:text-base lg:text-3xl font-extralight max-w-xs sm:max-w-md mx-auto sm:mx-0">{overlayContent.description}</p>
          {showButton && (
            <a href={buttonLink} className="px-6 py-3 text-sm sm:text-base lg:text-lg text-gray-100 font-medium bg-brand rounded hover:bg-gray-900">
              {overlayContent.buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
