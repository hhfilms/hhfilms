import HeroSection from "@/components/HeroSection";
import InstagramFeed from "@/components/Instagram";
import {YouTube} from "@mui/icons-material";
import YouTubeGallery from "@/components/YouTubeGallery";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative">
        <HeroSection
          containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh]"
          backgroundType="image"
          backgroundSrc="https://d3fpz3joletla1.cloudfront.net/hero.jpg"
          overlayContent={{
            subheading: "welcome to",
            heading: "heart & hustle Films",
            description: `heart in every shot | hustle in every frame`,
            buttonText: "contact",
          }}
          buttonLink="/contact"
          mediaClassName="object-cover"
          overlayClassName="top-1/2"
          imagePosition="center"
        />

        {/* About Section */}
        <section className="bg-main-950/50 text-gray-50 p-8 absolute bottom-0 w-full">
          <div className="container mx-auto text-center">
            <h5 className="text-gray-50 text-center text-lg md:text-3xl">sports videography | event coverage | business promos | cinematic storytelling</h5>
          </div>
        </section>
      </section>

      {/* instagram Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 w-full bg-main-900">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="text-4xl font-assistant  sm:text-5xl mb-4 flex-grow text-brand">instagram</h2>
          {/* <p className="text-main-200 flex-grow text-center sm:text-right justify-end mb-4 text md:text-lg">sport highlights, reels & recaps | teams or individuals</p> */}
        </div>
        <div>
          <InstagramFeed />
        </div>
      </section>

      {/* youtube Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8  w-full bg-main-950">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="text-4xl font-assistant sm:text-5xl mb-4 flex-grow text-brand">youtube</h2>
          {/* <p className="flex-grow text-main-200 text-center sm:text-right justify-end mb-4 text md:text-lg">promote your business or nonprofit | capture magical moments</p> */}
        </div>
        <YouTubeGallery />
        <div className="flex justify-center mt-6">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCWqeQRgDPEryMbcJBfPITvQ"
            color="#fff"
            className="inline-flex items-center rounded-full px-6 py-3 text-sm sm:text-base lg:text-lg font-medium outline outline-1 outline-main-200 text-main-200 hover:outline-brand hover:text-brand">
            more on youtube <YouTube fontSize="small" className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
