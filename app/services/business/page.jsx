"use client";
import HeroSection from "@/components/HeroSection";
import {StoreOutlined, LocalActivityOutlined, ReviewsOutlined, RedeemOutlined, ThumbUpAltOutlined, Diversity3Outlined} from "@mui/icons-material";
import Link from "next/link";

const business = () => {
  return (
    <>
      <HeroSection
        containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh] bg-main-950"
        backgroundType="image"
        backgroundSrc="https://d3fpz3joletla1.cloudfront.net/tim-mossholder-Cg7xHNo0ur0-unsplash.jpg"
        overlayContent={{
          subheading: " ",
          heading: "businesses & nonprofits",
          description:
            "showcase your mission, services, or brand. we offer customized solutions to fit your vision. from engaging interviews to polished visuals, our team ensures every detail is handled with professionalism and creativity, delivering videos that leave a lasting impact. explore the options below to see how we can bring your message to life.",
          buttonText: "contact",
        }}
        overlayClassName="top-2/3"
        mediaClassName="object-top object-cover"
        buttonLink="/contact"
        imagePosition="center"
      />
      <section className="p-2 md:p-12 text-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-xl">
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <StoreOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">promotional video</p>
              <p className="mb-4 font-light">starting at $1,000</p>
            </div>
            <p className="mb-8">highlight your mission, products, or services. these videos are designed to connect with your audience, showcase what makes you unique, and drive action.</p>
            <span className="text-sm">*aspect ratios can include vertical, horizontal, or both for multiple platforms</span>
          </div>

          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <ReviewsOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">testimonial videos</p>
              <p className="mb-4 font-light">starting at $1,000</p>
            </div>
            <p className="mb-8">
              directly from satisfied customers, clients, or beneficiaries, testimonial videos showcase real people sharing their positive experiences with your organization, adding credibility and a
              personal touch to your story.
            </p>
            <span className="text-sm"> </span>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <LocalActivityOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">event coverage</p>
              <p className="mb-4 font-light">starting at $300</p>
            </div>
            <p className="mb-8">
              event coverage captures the energy and importance of your special occasions. share these moments with those who couldn’t attend or use them as promotional material to build excitement
              for future events.
            </p>
            <span className="text-sm"></span>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <RedeemOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">fundraising appeals</p>
              <p className="mb-4 font-light">starting at $200</p>
            </div>
            <p className="mb-8">
              bring your mission to life with powerful storytelling that inspires generosity. fundraising appeal videos highlight the urgency of your cause, the impact of donations, and how supporters
              can make a difference.
            </p>
            <span className="text-sm"></span>
          </div>

          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <Diversity3Outlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">impact stories</p>
              <p className="mb-4 font-light">starting at $200</p>
            </div>
            <p className="mb-8">
              impact stories are a compelling way to show the difference you’re making. these videos combine heartfelt storytelling with real-world results, inspiring support and showcasing your
              mission in action.
            </p>
            <span className="text-sm"></span>
          </div>

          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <ThumbUpAltOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">social media content</p>
              <p className="mb-4 font-light">starting at $200</p>
            </div>
            <p className="mb-8">
              short, engaging videos are essential for a strong social media presence. reels, stories, or posts - we craft content that grabs attention and encourages sharing, helping you connect with
              your audience on platforms like instagram, TikTok, and LinkedIn.
            </p>
            <span className="text-sm"></span>
          </div>
        </div>
        <div className="pl-1 py-4 text-xs text-gray-400">
          photo by <a href="https://unsplash.com/@timmossholder?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">tim mossholder</a> on
          <a href="https://unsplash.com/photos/a-black-and-gold-sign-that-says-grand-opening-Cg7xHNo0ur0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> unsplash</a>
        </div>
      </section>

      <section className="mb-12 text-gray-50 text-center">
        <p className="text-xl my-8 px-4">have a unique vision in mind? let us bring it to life with a custom video tailored just for you.</p>
        <Link
          href="/contact"
          className="rounded-full px-6 inline-block py-3 text-sm sm:text-base lg:text-lg font-medium outline outline-1 outline-gray-100 text-gray-100 hover:outline-brand hover:text-brand">
          contact
        </Link>
      </section>
    </>
  );
};

export default business;
