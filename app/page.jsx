import HeroSection from "../components/HeroSection";
import MyGallery from "../components/Gallery/Gallery";
import Socials from "../components/Socials";
import VideoCard from "../components/VideoCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const videos = [];

// {id: 1, title: "Wedding Highlights", description: "Beautiful moments captured.", thumbnail: "/wedding.jpg"}
// {id: 2, title: "Vacation Recap", description: "Cherished memories from our travels.", thumbnail: "/vacation.jpg"},
// {id: 3, title: "Vacation Recap", description: "Cherished memories from our travels.", thumbnail: "/vacation.jpg"},

export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeroSection
        containerClass="h-3/4"
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

      <section className="">
        <div className="text-center w-full text-gray-50 bg-zinc-800">
          <div className="container text-center mx-auto p-10 text-gray-50 w-1/2">
            <h5 className="text-lg font-extralight">sports videography | event coverage | cinematic storytelling</h5>
            <h2 className="text-5xl my-4">about heart &amp; hustle films</h2>
            <h3 className="text-xl font-extralight">
              based in dallas-fort worth, we are passionate about capturing the raw emotion and exhilarating moments that make every experience unforgettable. whether it’s the intensity of a game, the
              energy of a live event, or the heart behind a personal story, our team is dedicated to creating compelling visual narratives. we specialize in sports videography, event coverage, and
              cinematic storytelling, delivering impactful and memorable videos that bring your vision to life.
            </h3>
          </div>
        </div>
        <section className="container mx-auto my-16">
          <h2 className="text-3xl font-assistant text-center mb-8 text-gray-50">heart</h2>

          {Array.isArray(videos) && videos.length > 0 ? (
            videos.map((video) => (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <VideoCard key={video.id} video={video} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-50">coming soon...</p>
          )}

          {videos.length > 0 ? (
            <div className="flex justify-center">
              <button className="px-6 py-3 my-8 text-lg text-gray-100 font-medium bg-brand rounded hover:bg-gray-900 ju">
                view more <ArrowForwardIcon fontSize="small" />
              </button>
            </div>
          ) : (
            ""
          )}
        </section>
        <section className="my-16">
          <h2 className="text-3xl te font-assistant text-center mb-8 text-gray-50">hustle</h2>
          <MyGallery />
        </section>
      </section>
      <Socials />
    </div>
  );
}
