"use client";

import HeroSection from "@/components/HeroSection";
import {VideocamOutlined, CampaignOutlined, VideoCameraFrontOutlined, StadiumOutlined, CameraEnhanceOutlined, DirectionsRunOutlined} from "@mui/icons-material";
import Link from "next/link";

const Sports = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-gray-50 ">
      <HeroSection
        containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh] bg-main-950"
        backgroundType="image"
        backgroundSrc="https://d3fpz3joletla1.cloudfront.net/p17-202-25502.jpg"
        overlayContent={{
          subheading: " ",
          heading: "specializing in sports videography",
          description:
            "our services include full-game filming, slow-motion highlights, drone videography for aerial shots, and coaching analysis videos. we create custom professional, and dynamic, with cutting-edge techniques to capture every thrilling moment for teams or individuals.",
          buttonText: "contact",
        }}
        overlayClassName="top-2/3"
        mediaClassName="object-top object-cover"
        buttonLink="/contact"
        imagePosition="center"
      />

      <section className="p-2 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-xl">
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <VideocamOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">team | individual highlight</p>
              <p className="mb-4 font-light">starting at $50</p>
            </div>
            <p className="mb-8">footage of the most exciting and pivotal moments of the game. short form up to 1 minute and long form available.</p>
            <span className="text-sm">*aspect ratios can include vertical, horizontal, or both for multiple platforms</span>
          </div>

          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <VideoCameraFrontOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">athlete interview</p>
              <p className="mb-4 font-light">starting at $250</p>
            </div>
            <p className="mb-8">
              interview with an athlete to capture their personal story and share their journey to inspire coaches, recruiters, and fans with their dedication, passion, and achievements.
            </p>
            <span className="text-sm">*to be filmed at an agreed upon location on a date that is not a game day</span>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <CampaignOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">player introductions</p>
              <p className="mb-4 font-light">starting at $250</p>
            </div>
            <p className="mb-8">a fun way to have your athletes introduce themselves with their position and a personal message.</p>
            <span className="text-sm">*team only. no individuals</span>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <StadiumOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">drone shots</p>
              <p className="mb-4 font-light">starting at $50</p>
            </div>
            <p className="mb-8">stunning aerial perspectives ideal for outdoor games or large-scale events.</p>
            <span className="text-sm">*subject to local laws and regulations</span>
          </div>

          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <DirectionsRunOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">full-game filming</p>
              <p className="mb-4 font-light">starting at $500</p>
            </div>
            <p className="mb-8">comprehensive coverage of every play, capturing all the action from start to finish.</p>
            <span className="text-sm">*game action only. includes 1 camera angle. no music. no voiceover. no customization.</span>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <CameraEnhanceOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">customized videos</p>
              <p className="mb-4 font-light">
                <Link href="/contact" className="underline underline-offset-4 hover:text-brand">
                  contact
                </Link>{" "}
                for pricing
              </p>
            </div>
            <p>tailored to your specific goals, blending professionalism, creativity, and advanced technology.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sports;
