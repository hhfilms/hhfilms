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
          heading: "about heart & hustle films",
          description:
            "dallas | fort worth | arlington | plano | irving | garland | frisco | mckinney | richardson | carrollton | denton | grand prairie | mesquite | lewisville | allen | flower mound",
          buttonText: "Contact",
        }}
        overlayClassName="top-2/3"
        mediaClassName="object-top"
        buttonLink=""
        imagePosition="80% -10%"
      />

      {/* About Section */}
      <div className="bg-main-100 items-center text-dark py-16 px-4 sm:px-8 lg:px-16">
        <div className="relative hidden md:inline-block md:w-1/2 h-64 sm:h-96 md:h-[500px] md:float-right md:ml-6">
          <Image src="https://d3fpz3joletla1.cloudfront.net/Snow-1.jpg" alt="Family pic" layout="fill" objectFit="cover" objectPosition="center" />
        </div>
        {/* About Section */}
        <div className=" text-dark text-justify">
          <p className="text-lg md:text-2xl leading-relaxed mb-4 ">
            what started off as a way to document family trips and special occasions quickly turned into something much bigger. at first, it was to save the memories we&apos;ve made, and piece
            together highlight reels for my kids. but as time went on, i realized i wasn&apos;t just making videos; i was preserving moments, telling stories, and giving people a way to relive the
            memories that matter most.
          </p>
          <div className="relative inline-block md:hidden w-full h-64">
            <Image src="https://d3fpz3joletla1.cloudfront.net/Snow-1.jpg" alt="Family pic" layout="fill" objectFit="cover" objectPosition="center" />
          </div>
          <p className="text-lg md:text-2xl leading-relaxed mb-4">that&apos;s how heart & hustle films was born.</p>
          <p className="text-lg md:text-2xl leading-relaxed mb-4">
            i wanted to take what i loved — storytelling through film — and share it with others. every project we take on gets the same attention and care as if it were my own - whether it&apos;s a
            championship game, a charity event, or a special moment. to me, this isn&apos;t just about filmmaking; it&apos;s about sharing stories that make life unforgettable.
          </p>
          <p className="text-lg md:text-2xl leading-relaxed mb-4">
            at heart & hustle films, we bring passion and dedication to every frame. the &apos;heart&apos; comes from the special moments we share, and the &apos;hustle&apos; shows the effort and
            dedication behind every experience we capture. armed with top-notch gear and a commitment to quality, we&apos;re here to turn your moments into cinematic memories.
          </p>
        </div>
        <div className="pl-1 py-4 text-xs text-gray-400">
          sklyline photo by <a href="https://unsplash.com/@thmxfy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">max fray</a> on
          <a href="https://unsplash.com/photos/a-city-skyline-is-reflected-in-the-still-water-of-a-pond-XrvijafWAH8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> unsplash</a>
        </div>
      </div>
    </>
  );
};

export default About;
