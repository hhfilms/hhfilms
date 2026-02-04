import HeroSection from "@/components/HeroSection";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        containerClass="h-[75vh]"
        backgroundType="image"
        backgroundSrc="https://d3fpz3joletla1.cloudfront.net/dallas-skyline.jpg"
        overlayContent={{
          subheading: " ",
          heading: "About Heart & Hustle Films",
          description:
            "Dallas | Fort Worth | Arlington | Plano | Irving | Garland | Frisco | McKinney | Richardson | Carrollton | Denton | Grand Prairie | Mesquite | Lewisville | Allen | Flower Mound",
          buttonText: "Contact",
        }}
        overlayClassName="top-1/4 lg:top-2/3"
        mediaClassName="object-top"
        buttonLink=""
        imagePosition="0% 0%"
      />

      {/* About Section */}
      <div className="bg-main-100 items-center text-dark py-16 px-4 sm:px-8 lg:px-16">
        <div className="relative hidden md:inline-block md:w-1/2 h-64 sm:h-96 md:h-[500px] md:float-right md:ml-6">
          <Image
            src="https://d3fpz3joletla1.cloudfront.net/Snow-1.jpg"
            alt="Family photo"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="text-dark text-justify">
          <p className="text-lg md:text-2xl leading-relaxed mb-4">
            What started as a way to document family trips and special occasions quickly turned into something much bigger. At first, it was about saving the memories we were making and piecing together highlight reels for my kids. But as time went on, I realized I wasn’t just making videos. I was preserving moments, telling stories, and giving my family a way to relive the memories we created.
          </p>

          <div className="relative inline-block md:hidden w-full h-64">
            <Image
              src="https://d3fpz3joletla1.cloudfront.net/Snow-1.jpg"
              alt="Family photo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          <p className="text-lg md:text-2xl leading-relaxed mb-4">
            That’s how Heart & Hustle Films was born.
          </p>

          <p className="text-lg md:text-2xl leading-relaxed mb-4">
            I wanted to take what I loved, capturing memories on film, and share it with others. Every project I take on gets the same attention and care as if it were my own, whether it’s a championship game, a charity event, or a once-in-a-lifetime moment. To me, this isn’t just about filmmaking. It’s about sharing stories that make life unforgettable.
          </p>

          <p className="text-lg md:text-2xl leading-relaxed mb-4">
            At Heart & Hustle Films, I bring passion and dedication to every frame. The “heart” comes from the special moments we share, and the “hustle” reflects the effort and commitment behind every experience I capture. Armed with professional gear and a focus on quality, I’m here to turn your moments into cinematic memories.
          </p>
        </div>

        <div className="pl-1 py-4 text-xs text-gray-400">
          Skyline photo by{" "}
          <a href="https://unsplash.com/@thmxfy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Max Fray</a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/a-city-skyline-is-reflected-in-the-still-water-of-a-pond-XrvijafWAH8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
