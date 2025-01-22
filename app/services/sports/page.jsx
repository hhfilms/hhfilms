"use client";

import HeroSection from "@/components/HeroSection";
import {VideocamOutlined, CampaignOutlined, VideoCameraFrontOutlined, StadiumOutlined, CameraEnhanceOutlined} from "@mui/icons-material";
import Link from "next/link";
import ServiceCard from "@/components/Services/ServiceCard";

const Sports = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-dark ">
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
          <ServiceCard
            title="team | individual highlight"
            price="$50 | $100"
            disclaimer="*aspect ratios can include vertical, horizontal, or both for multiple platforms"
            description="footage of the most exciting and pivotal moments of the game. short form up to 1 minute and long form available."
            icon={<VideocamOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="athlete interview"
            price="$250"
            disclaimer="*filmed at an agreed upon location on a date that is not a game day"
            description="interview with an athlete to capture their personal story and share their journey to inspire coaches, recruiters, and fans with their dedication, passion, and achievements."
            icon={<VideoCameraFrontOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="player introductions"
            price="$250"
            disclaimer="*teams only"
            description="a fun way to have your athletes introduce themselves with their position and a personal message."
            icon={<CampaignOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="drone shots"
            price="$50"
            disclaimer="*subject to local laws and regulations"
            description="stunning aerial perspectives ideal for outdoor games or large-scale events"
            icon={<StadiumOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="full-game filming"
            price="$500"
            disclaimer="*includes 1 camera angle. no music, voiceover, or customization"
            description="comprehensive coverage of every play, capturing all the action from start to finish."
            icon={<VideocamOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="customized videos"
            description="tailored to your specific goals, blending professionalism, creativity, and advanced technology."
            icon={<CameraEnhanceOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />
        </div>
      </section>
    </div>
  );
};

export default Sports;
