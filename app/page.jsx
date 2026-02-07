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
      <section className="w-full">
        <HeroSection
          containerClass="h-[60vh]"
          backgroundType="video"
          backgroundSrc="https://d3fpz3joletla1.cloudfront.net/Compilation.mp4"
          overlayContent={{
            subheading: "",
            heading: "heart & hustle Films",
            description: `Heart in every shot | Hustle in every frame`,
            buttonText: "contact",
          }}
          buttonLink="/contact"
          mediaClassName="h-full w-full object-cover"
          overlayClassName="top-1/2"
          imagePosition="center"
        />
      </section>

      {/* services Section */}
      <section className="w-full capitalize">
        <div className="flex flex-col sm:flex-row md:items-center bg-main-950 py-4 px-8">
          <h2 className="text-2xl font-sans lg:text-3xl flex-grow text-gray-100 uppercase">We create content for</h2>
          {/* <p className="hidden md:inline-block text-main-200 flex-grow  sm:text-right justify-end text uppercase tracking-wide md:text-md">sports videography | event coverage | business promos | special occasions</p> */}
        </div>
        <div className="sm:p-6 lg:p-8 bg-main-100 border-t-1">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 text-xl">
            <div className="px-4 text-center mb-4 md:p-0 flex flex-col">
              <div className="text-2xl md:text-5xl text-brand">
                <SportsBasketballOutlined fontSize="inherit" className="md:mb-8 " />
                <p className="text-lg md:text-2xl text-dark font-semibold">sports</p>
                <p className="mb-8 text-sm md:text-md text-darkaccent">hype reel | highlights | interviews | intros | recruiting film | full game</p>
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
                <p className="text-lg md:text-2xl text-dark font-semibold">business & nonprofits</p>
                <p className="mb-8 text-sm md:text-md text-darkaccent">promos | testimonials | corporate events | fundraising</p>
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
                <p className="text-lg md:text-2xl text-dark font-semibold">special occasions</p>
                <p className="mb-8 text-sm md:text-md text-darkaccent">weddings | quinceañeras | birthdays | anniversaries</p>
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
          <h2 className="text-2xl font-sans lg:text-3xl flex-grow text-gray-100 uppercase">
            Social Media <span className="small text-sm normal-case">(click to play)</span>{" "}
          </h2>
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
          <h2 className="text-2xl font-sans lg:text-3xl flex-grow text-gray-100 uppercase">Sports</h2>
        </div>
        <div className="md:py-10 md:px-6 xl:px-8 w-full bg-main-100">
          <div>
            <YouTubeGallery tag="sports"/>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCWqeQRgDPEryMbcJBfPITvQ"
            color="#fff"
            className="mb-6 inline-flex items-center rounded-full px-6 py-3 text-sm sm:text-base lg:text-lg font-medium outline outline-1 hover:outline-darkaccent hover:text-darkaccent outline-brand text-brand">
            More on YouTube <YouTube fontSize="small" className="ml-2" />
          </a>
        </div>
      </section>

      <section className="w-full">
        <div className="bg-main-950 py-4 px-8">
          <h2 className="text-2xl font-sans lg:text-3xl flex-grow text-gray-100 uppercase">Special Occasions</h2>
        </div>
        <div className="md:py-10 md:px-6 xl:px-8 w-full bg-main-100">
          <div>
            <YouTubeGallery tag="special occasion"/>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCWqeQRgDPEryMbcJBfPITvQ"
            color="#fff"
            className="mb-6 inline-flex items-center rounded-full px-6 py-3 text-sm sm:text-base lg:text-lg font-medium outline outline-1 hover:outline-darkaccent hover:text-darkaccent outline-brand text-brand">
            More on YouTube <YouTube fontSize="small" className="ml-2" />
          </a>
        </div>
      </section>

      <section className="w-full">
        <div className="bg-main-950 py-4 px-8">
          <h2 className="text-2xl font-sans lg:text-3xl flex-grow text-gray-100 uppercase">Business</h2>
        </div>
        <div className="md:py-10 md:px-6 xl:px-8 w-full bg-main-100">
          <div>
            <YouTubeGallery tag="promo"/>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCWqeQRgDPEryMbcJBfPITvQ"
            color="#fff"
            className="mb-6 inline-flex items-center rounded-full px-6 py-3 text-sm sm:text-base lg:text-lg font-medium outline outline-1 hover:outline-darkaccent hover:text-darkaccent outline-brand text-brand">
            More on YouTube <YouTube fontSize="small" className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
