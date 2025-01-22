import HeroSection from "@/components/HeroSection";
import InstagramFeed from "@/components/Instagram";
import {YouTube} from "@mui/icons-material";
import YouTubeGallery from "@/components/YouTubeGallery";
import {StorefrontOutlined, SportsBasketballOutlined, FavoriteBorderOutlined} from "@mui/icons-material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative">
        <HeroSection
          containerClass="h-[85vh] sm:h-[60vh] md:h-[85vh]"
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 w-full bg-main-950 border-t-1">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="text-4xl font-assistant  sm:text-5xl mb-4 flex-grow text-gray-50">services</h2>
          <p className="text-main-200 flex-grow text-center sm:text-right justify-end mb-4 text md:text-lg">sports videography | event coverage | business promos | special occasions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-xl">
          <div className="border-1 rounded-lg p-4 md:p-6 flex flex-col">
            <div className="text-5xl text-gray-50">
              <SportsBasketballOutlined fontSize="inherit" className="mb-4 md:mb-8 " />
              <p className="text-3xl text-brand">sports videography</p>
              <p className="mb-8 text-lg">highlights | interviews | intros | full game | drone</p>
            </div>
            <div className="text-sm mt-auto">
              <Link href="/services/sports" className="inline-block text-center py-2 px-12 w-full md:w-auto rounded-0 border-1 hover:border-gray-50 hover:text-gray-50 text-lg text-brand border-brand">
                pricing
              </Link>
            </div>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-6 flex flex-col">
            <div className="text-5xl text-gray-50">
              <StorefrontOutlined fontSize="inherit" className="mb-4 md:mb-8 " />
              <p className="text-3xl text-brand">business & nonprofits</p>
              <p className="mb-8 text-lg">promos | testimonials | events | fundraising | stories</p>
            </div>
            <div className="text-sm mt-auto">
              <Link
                href="/services/business"
                className="inline-block text-center py-2 px-12 w-full md:w-auto rounded-0 border-1 hover:border-gray-50 hover:text-gray-50 text-lg text-brand border-brand">
                pricing
              </Link>
            </div>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-6 flex flex-col">
            <div className="text-5xl text-gray-50">
              <FavoriteBorderOutlined fontSize="inherit" className="mb-4 md:mb-8 " />
              <p className="text-3xl text-brand">special occasions</p>
              <p className="mb-8 text-lg">weddings | quinceañeras | birthdays | anniversary | vacations</p>
            </div>
            <div className="text-sm mt-auto">
              <Link
                href="/services/special-occasions"
                className="inline-block text-center py-2 px-12 w-full md:w-auto rounded-0 border-1 hover:border-gray-50 hover:text-gray-50 text-lg text-brand border-brand">
                pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* instagram Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 w-full bg-main-900">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="text-4xl font-assistant  sm:text-5xl mb-4 flex-grow text-gray-50">instagram reels</h2>
          {/* <p className="text-main-200 flex-grow text-center sm:text-right justify-end mb-4 text md:text-lg">sport highlights, reels & recaps | teams or individuals</p> */}
        </div>
        <div>
          <InstagramFeed />
        </div>
      </section>

      {/* youtube Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8  w-full bg-main-950">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="text-4xl font-assistant sm:text-5xl mb-4 flex-grow text-gray-50">youtube videos</h2>
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
