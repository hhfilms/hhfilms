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
        <div className="absolute top-1/2 left-48 transform -translate-y-1/2 text-gray-50 text-left border-l-2 p-8">
          <p className="mb-2 text-lg">{overlayContent.subheading}</p>
          <h1 className="mb-4 text-5xl">{overlayContent.heading}</h1>
          <p className="mb-6 max-w-md text-3xl font-extralight">{overlayContent.description}</p>
          {showButton && (
            <a href={buttonLink} className="px-6 py-3 text-lg text-gray-100 font-medium bg-brand rounded hover:bg-gray-900">
              {overlayContent.buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
