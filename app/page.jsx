import HeroSection from "@/components/HeroSection";
import InstagramFeed from "@/components/Instagram";
import {YouTube} from "@mui/icons-material";
import YouTubeGallery from "@/components/YouTubeGallery";
import {StorefrontOutlined, SportsBasketballOutlined, FavoriteBorderOutlined} from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full capitalize">
      {/* Hero Section */}
      <section className="w-full">
        <HeroSection
          containerClass="h-[75vh] sm:h-[60vh] md:h-[85vh]"
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
      </section>

      {/* services Section */}
      <section className="w-full">
        <div className="flex flex-col sm:flex-row md:items-center bg-main-950 py-4 px-8">
          <h2 className="text-3xl font-assistant  md:text-4xl flex-grow text-gray-100">services</h2>
          <p className="hidden md:inline-block text-main-200 flex-grow  sm:text-right justify-end text md:text-lg">sports videography | event coverage | business promos | special occasions</p>
        </div>
        <div className="sm:p-6 lg:p-8 bg-main-100 border-t-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 text-xl">
            <div className="px-4 text-center mb-4 md:p-0 flex flex-col">
              <div className="text-2xl md:text-5xl text-brand">
                <SportsBasketballOutlined fontSize="inherit" className="md:mb-8 " />
                <p className="text-lg md:text-3xl text-dark">sports videography</p>
                <p className="mb-8 text-sm md:text-lg text-darkaccent">highlights | interviews | intros | full game | drone</p>
              </div>
              <div className="text-sm mt-auto">
                <Link href="/services/sports" className="inline-block text-center py-2 px-12 rounded-0 border-1 hover:border-dark hover:text-dark text-sm md:text-lg text-brand border-brand">
                  info & pricing
                </Link>
              </div>
            </div>
            <div className="px-4 text-center mb-4 md:p-0 flex flex-col">
              <div className="text-2xl md:text-5xl text-brand">
                <StorefrontOutlined fontSize="inherit" className="md:mb-8 " />
                <p className="text-lg md:text-3xl text-dark">business & nonprofits</p>
                <p className="mb-8 text-sm md:text-lg text-darkaccent">promos | testimonials | events | fundraising | stories</p>
              </div>
              <div className="text-sm mt-auto">
                <Link href="/services/business" className="inline-block text-center py-2 px-12 rounded-0 border-1 hover:border-dark hover:text-dark text-sm md:text-lg text-brand border-brand">
                  info & pricing
                </Link>
              </div>
            </div>
            <div className="px-4 text-center mb-4 md:p-0 flex flex-col">
              <div className="text-2xl md:text-5xl text-brand">
                <FavoriteBorderOutlined fontSize="inherit" className="md:mb-8 " />
                <p className="text-lg md:text-3xl text-dark">special occasions</p>
                <p className="mb-8 text-sm md:text-lg text-darkaccent">weddings | quinceañeras | birthdays | anniversary | vacations</p>
              </div>
              <div className="text-sm mt-auto">
                <Link
                  href="/services/special-occasions"
                  className="inline-block text-center py-2 px-12 rounded-0 border-1 hover:border-dark hover:text-dark text-sm md:text-lg text-brand border-brand">
                  info & pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* instagram Section */}
      <section className="w-full">
        <div className="bg-main-950 py-4 px-8">
          <h2 className="text-3xl font-assistant sm:text-4xl flex-grow text-gray-100">newest instagram reels</h2>
        </div>
        <div className="py-2 md:py-10 px-4 sm:px-6 lg:px-8 w-full bg-main-100">
          <div>
            <InstagramFeed />
          </div>
        </div>
      </section>

      {/* youtube Section */}
      <section className="w-full">
        <div className="bg-main-950 py-4 px-8">
          <h2 className="text-3xl font-assistant sm:text-4xl flex-grow text-gray-100">newest youtube videos</h2>
        </div>
      </section>
      <section className="py-2 md:py-10 px-4 sm:px-6 lg:px-8  w-full bg-main-100">
        <YouTubeGallery />
        <div className="flex justify-center mt-6">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCWqeQRgDPEryMbcJBfPITvQ"
            color="#fff"
            className="inline-flex items-center rounded-full px-6 py-3 text-sm sm:text-base lg:text-lg font-medium outline outline-1 hover:outline-darkaccent hover:text-darkaccent outline-brand text-brand">
            more on youtube <YouTube fontSize="small" className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
