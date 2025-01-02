import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery/Gallery";
import VideoCard from "@/components/VideoCard";
import {YouTube} from "@mui/icons-material";

// import YouTubePlayer from "@/components/YouTubeEmbed";

const videos = [
  {
    id: "1",
    title: "businesses",
    description: "grand opening for el gabusino jewelry in amarillo, tx",
    url: "elgambusino",
  },
  {
    id: "2",
    title: "non-profits ",
    description: "how silverbell santas is changing lives for seniors in dallas, tx",
    url: "silverbellsantas",
  },
  {
    id: "3",
    title: "wedding film highlights",
    description: "capture unforgettable moments from a special day",
    url: "wedding",
  },
]; // Video data placeholder

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
      />

      {/* About Section */}
      <section className="bg-zinc-800 text-gray-50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h5 className="text-gray-50 font-extralight text-center mb-4 text md:text-2xl">sports videography | event coverage | cinematic storytelling</h5>
        </div>
      </section>

      {/* Heart Section */}
      <section className="container mx-auto my-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extralight font-assistant text-center text-gray-50 sm:text-5xl">heart</h2>
        <p className="text-gray-50 font-extralight text-center mb-4 text md:text-2xl">promote your business or nonprofit | capture magical moments</p>

        {Array.isArray(videos) && videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-50">coming soon...</p>
        )}

        {videos.length > 0 ? (
          <div className="flex justify-center">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCWqeQRgDPEryMbcJBfPITvQ"
              color="#fff"
              className="no-underline px-6 py-3 my-8 text-sm sm:text-base lg:text-lg text-gray-50 font-medium bg-brand rounded hover:bg-gray-900 flex items-center">
              more on youtube <YouTube fontSize="small" className="ml-2" />
            </a>
          </div>
        ) : (
          ""
        )}
      </section>

      {/* Hustle Section */}
      <section className="my-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extralight font-assistant text-center text-gray-50 sm:text-5xl">hustle</h2>
        <p className="text-gray-50 font-extralight text-center mb-4 text md:text-2xl">sport highlights, reels & recaps | teams or individuals</p>
        <Gallery />
      </section>
    </div>
  );
}
