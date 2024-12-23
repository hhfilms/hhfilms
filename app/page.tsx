import HeroSection from "../components/HeroSection";
import MyGallery from "../components/Gallery/Gallery";
import Socials from "../components/Socials";
import VideoCard from "../components/VideoCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const videos = [
  {id: 1, title: "Wedding Highlights", description: "Beautiful moments captured.", thumbnail: "/wedding.jpg"},
  {id: 2, title: "Vacation Recap", description: "Cherished memories from our travels.", thumbnail: "/vacation.jpg"},
  {id: 3, title: "Vacation Recap", description: "Cherished memories from our travels.", thumbnail: "/vacation.jpg"},
];

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <HeroSection />
      <section className="">
        <div className="container text-center mx-auto my-16 text-gray-50 w-144">
          <h5 className="text-lg font-extralight">sports videography | event coverage | cinematic storytelling</h5>
          <h2 className="text-5xl my-4">about heart &amp; hustle films</h2>
          <h3 className="text-lg font-extralight">
            at heart &amp; hustle films, we are dedicated to showcasing the raw emotion and exhilarating moments in sports. Our team is passionate about capturing the essence of each game and
            delivering compelling visual narratives. We specialize in sports videography, event coverage, and cinematic storytelling to create impactful and memorable videos.
          </h3>
        </div>
        <section className="container mx-auto my-16">
          <h2 className="text-3xl te font-assistant text-center mb-8 text-gray-50">heart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="px-6 py-3 my-8 text-lg text-gray-100 font-medium bg-brand rounded hover:bg-gray-900 ju">
              view more <ArrowForwardIcon fontSize="small" />
            </button>
          </div>
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
