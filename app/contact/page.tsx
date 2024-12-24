import React from "react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh]"
        backgroundType="image"
        backgroundSrc="/dallas-skyline.jpg"
        overlayContent={{
          subheading: " ",
          heading: "what type of filming are you looking for?",
          description:
            "long form films | instagram reels | clips | promotional videos | documentaries | highlight reels | interviews | product demos | behind-the-scenes | drone footage | event recaps",
          buttonText: "Contact",
        }}
        showButton={false}
        mediaClassName="object-top"
        buttonLink=""
      />

      {/* About Section */}
      <div className="flex flex-col items-center text-gray-50 py-16 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row w-full lg:w-3/4 space-y-8 lg:space-y-0 lg:space-x-8">
          {/* About Text */}
          <div className="flex-1 text-left border-l-2 border-gray-200 pl-4 sm:pl-8">
            <p className="mb-2 text-sm uppercase tracking-wide text-gray-400">contact</p>
            <p className="mb-6 text-base sm:text-lg lg:text-2xl font-light leading-relaxed">
              ready to bring your story to life? whether it’s capturing the energy of the game, creating unforgettable memories, or promoting your cause we’d love to work with you. reach out today to
              discuss your project, ask questions or find availability.
            </p>
            <p className="mb-6 text-base sm:text-lg lg:text-2xl font-light leading-relaxed">
              available in dfw and surrounding cities.
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
