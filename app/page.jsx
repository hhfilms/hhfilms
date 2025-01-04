import HeroSection from "@/components/HeroSection";
import InstagramFeed from "@/components/Instagram";
import {YouTube} from "@mui/icons-material";
import YouTubeGallery from "@/components/YouTubeGallery";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <HeroSection
        containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh]"
        backgroundType="image"
        backgroundSrc="https://hhf-assets.s3.us-east-2.amazonaws.com/hero.jpg"
        overlayContent={{
          subheading: "welcome to",
          heading: "heart & hustle Films",
          description: `heart in every shot | hustle in every frame`,
          buttonText: "contact",
        }}
        showButton={true}
        buttonLink="/contact"
        mediaClassName="object-cover"
        imagePosition="center"
      />

      {/* About Section */}
      <section className="bg-zinc-800 text-gray-50 py-4">
        <div className="container mx-auto text-center">
          <h5 className="text-gray-50 font-extralight text-center text-lg md:text-3xl">sports videography | event coverage | business promos | cinematic storytelling</h5>
        </div>
      </section>

      {/* Heart Section */}
      <section className="mx-auto my-16 px-4 sm:px-6 lg:px-8 text-gray-50">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="text-4xl font-extralight font-assistant  sm:text-5xl mb-4 flex-grow">heart</h2>
          <p className="flex-grow text-center sm:text-right justify-end font-extralight mb-4 text md:text-lg">promote your business or nonprofit | capture magical moments</p>
        </div>
        <YouTubeGallery />
        <div className="flex justify-center">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCWqeQRgDPEryMbcJBfPITvQ"
            color="#fff"
            className="no-underline px-6 py-3 text-sm sm:text-base lg:text-lg text-gray-50 font-medium bg-brand rounded hover:bg-gray-900 flex items-center">
            more on youtube <YouTube fontSize="small" className="ml-2" />
          </a>
        </div>
      </section>

      {/* Hustle Section */}
      <section className="my-16 px-4 sm:px-6 lg:px-8 text-gray-50">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="text-4xl font-extralight font-assistant  sm:text-5xl mb-4 flex-grow">hustle</h2>
          <p className="flex-grow text-center sm:text-right justify-end font-extralight mb-4 text md:text-lg">sport highlights, reels & recaps | teams or individuals</p>
        </div>

        <InstagramFeed />
      </section>
    </div>
  );
}
