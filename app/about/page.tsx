import React from "react";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        containerClass="h-[75vh]"
        backgroundType="image"
        backgroundSrc="https://hhf-assets.s3.us-east-2.amazonaws.com/dallas-skyline.jpg"
        overlayContent={{
          subheading: " ",
          heading: "about heart & hustle films",
          description:
            "dallas | fort worth | arlington | plano | irving | garland | frisco | mckinney | richardson | carrollton | denton | grand prairie | mesquite | lewisville | allen | flower mound",
          buttonText: "Contact",
        }}
        showButton={false}
        mediaClassName="object-top"
        buttonLink=""
        imagePosition="80% -10%"
      />

      {/* About Section */}
      <div className="flex flex-col items-center text-gray-50 py-16 px-4 sm:px-8 lg:px-16">
        {/* <div className="relative w-full h-64 sm:h-96 md:h-[500px] mt-20 md:mt-24">
          <Image src="https://hhf-assets.s3.us-east-2.amazonaws.com/dallas-skyline.jpg" alt="Example Image" layout="fill" objectFit="cover" objectPosition="top" />
        </div> */}
        {/* About Section */}
        <div className="flex flex-col text-gray-50 py-8 px-4 sm:px-8 lg:px-16">
          <h3 className="text-lg md:text-2xl font-extralight leading-relaxed">
            based in dallas-fort worth, we are passionate about capturing the raw emotion and exhilarating moments that make every experience unforgettable. whether it’s the intensity of a game, the
            energy of a live event, or the heart behind a personal story, our team is dedicated to creating compelling visual narratives. we specialize in sports videography, event coverage, and
            cinematic storytelling, delivering impactful and memorable videos that bring your vision to life.
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
