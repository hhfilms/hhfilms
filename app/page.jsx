import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery/Gallery";
import VideoCard from "@/components/VideoCard";
import {ArrowForward} from "@mui/icons-material";

// import YouTubePlayer from "@/components/YouTubeEmbed";

const videos = [
  {
    id: "1",
    title: "el gambusino",
    description: "grand opening for el gabusino jewewly in amarillo, tx",
    url: "elgambusino",
  },
  {id: "2", title: "silverbell santas ", description: "changing lives for seniors in sallas, tx", url: "silverbellsantas"},
  {id: "3", title: "wedding film highlights", description: "unforgettable moments of a special day", url: "wedding"},
]; // Video data placeholder

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <HeroSection
        containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh]"
        backgroundType="image"
        backgroundSrc="/hero.jpg"
        overlayContent={{
          subheading: "welcome to",
          heading: "heart & hustle Films",
          description: `heart in every shot | hustle in every frame`,
          buttonText: "contact",
        }}
        showButton={true}
        buttonLink="/contact"
      />

      {/* About Section */}
      <section className="bg-zinc-800 text-gray-50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h5 className="text-base sm:text-lg font-extralight">sports videography | event coverage | cinematic storytelling</h5>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl my-4 font-bold">about heart &amp; hustle films</h2>
          <h3 className="text-sm sm:text-base lg:text-lg font-extralight leading-relaxed">
            based in dallas-fort worth, we are passionate about capturing the raw emotion and exhilarating moments that make every experience unforgettable. whether it’s the intensity of a game, the
            energy of a live event, or the heart behind a personal story, our team is dedicated to creating compelling visual narratives. we specialize in sports videography, event coverage, and
            cinematic storytelling, delivering impactful and memorable videos that bring your vision to life.
          </h3>
        </div>
      </section>

      {/* Heart Section */}
      <section className="container mx-auto my-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-assistant text-center mb-8 text-gray-50">heart</h2>

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
              view more <ArrowForward fontSize="small" className="ml-2" />
            </a>
          </div>
        ) : (
          ""
        )}
      </section>

      {/* Hustle Section */}
      <section className="my-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-assistant text-center mb-8 text-gray-50">hustle</h2>
        <Gallery />
      </section>
    </div>
  );
}
