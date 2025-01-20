"use client";

import {useState} from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/Services/ServiceCard";
import ServiceDialog from "@/components/Services/ServiceDialog";
import {ArrowForward, VideocamOutlined, CampaignOutlined, VideoCameraFrontOutlined, StadiumOutlined, CameraEnhanceOutlined, DirectionsRunOutlined} from "@mui/icons-material";
import Link from "next/link";
const Services = () => {
  // State to control dialog visibility
  const [dialogOpen, setDialogOpen] = useState(false);

  // State to hold specific data for the dialog, if needed
  const [dialogData, setDialogData] = useState(null);

  // Function to open the dialog
  const handleDialogOpen = (item) => {
    setDialogData(item); // Set any data the dialog might need
    setDialogOpen(true);
  };

  // Function to close the dialog
  const handleDialogClose = () => {
    setDialogOpen(false);
    setDialogData(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-gray-50 ">
      <HeroSection
        containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh] bg-main-950"
        backgroundType="image"
        backgroundSrc="https://d3fpz3joletla1.cloudfront.net/videography.jpg"
        overlayContent={{
          subheading: " ",
          heading: "are you ready to tell your story with high-level film production?",
          description:
            "specializing in sports videography, our services include full-game filming, slow-motion highlights, drone videography for aerial shots, and coaching analysis videos. we create custom professional, and dynamic, with cutting-edge techniques to capture every thrilling moment for teams or individuals.",
          buttonText: "contact",
        }}
        overlayClassName="top-2/3"
        mediaClassName="object-top object-cover"
        buttonLink="/contact"
        imagePosition="top"
      />

      <section className="p-2 md:p-12">
        <h2 className="text-4xl font-extralight font-assistant text-gray-50 sm:text-5xl mb-8">options include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-xl">
          <div className="border-1 rounded-lg p-10">
            <div className="text-5xl">
              <VideocamOutlined fontSize="inherit" className="mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">team or individual highlight</p>
              <p className="mb-4 font-light">starting at $50</p>
            </div>
            <p className="mb-8">footage of the most exciting and pivotal moments of the game. short form up to 1 minute and long form available.</p>
            <span className="text-sm">*aspect ratios can include vertical, horizontal, or both for multiple platforms</span>
          </div>

          <div className="border-1 rounded-lg p-10">
            <div className="text-5xl">
              <VideoCameraFrontOutlined fontSize="inherit" className="mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">athlete interview</p>
              <p className="mb-4 font-light">starting at $250</p>
            </div>
            <p className="mb-8">
              interview with an athlete to capture their personal story and share their journey to inspire coaches, recruiters, and fans with their dedication, passion, and achievements.
            </p>
            <span className="text-sm">*to be filmed at a location on a date that is not a game day</span>
          </div>
          <div className="border-1 rounded-lg p-10">
            <div className="text-5xl">
              <CampaignOutlined fontSize="inherit" className="mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">player introductions</p>
              <p className="mb-4 font-light">starting at $250</p>
            </div>
            <p className="mb-8">a fun way to have your athletes introduce themselves with their position and a personal message.</p>
            <span className="text-sm">*team only. no individuals</span>
          </div>
          <div className="border-1 rounded-lg p-10">
            <div className="text-5xl">
              <StadiumOutlined fontSize="inherit" className="mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">drone shots</p>
              <p className="mb-4 font-light">starting at $50</p>
            </div>
            <p className="mb-8">stunning aerial perspectives ideal for outdoor games or large-scale events.</p>
            <span className="text-sm">*subject to local laws and regulations</span>
          </div>

          <div className="border-1 rounded-lg p-10">
            <div className="text-5xl">
              <DirectionsRunOutlined fontSize="inherit" className="mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">full-game filming</p>
              <p className="mb-4 font-light">starting at $500</p>
            </div>
            <p className="mb-8">comprehensive coverage of every play, capturing all the action from start to finish.</p>
            <span className="text-sm">*includes 1 camera angle. no music. no voiceover. no customization. only game action</span>
          </div>
          <div className="border-1 rounded-lg p-10">
            <div className="text-5xl">
              <CameraEnhanceOutlined fontSize="inherit" className="mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">customized videos</p>
              <p className="mb-4 font-light">
                <Link href="/contact" className="underline underline-offset-4 hover:text-brand">contact</Link> for pricing
              </p>
            </div>
            <p>tailored to your specific goals, blending professionalism, creativity, and advanced technology.</p>
          </div>
        </div>
      </section>

      <section className="p-2 md:p-12">
        <h1 className="text-4xl font-extralight font-assistant text-gray-50 sm:text-5xl text-left">additional services</h1>
        <p className="mb-8">
          long form films | instagram reels | clips | promotional videos | documentaries | highlight reels | interviews | product demos | behind-the-scenes | drone footage | event recaps | special
          occasions | weddings | quinceañeras
        </p>

        <div className="md:flex md:space-x-14">
          <ServiceCard onOpenDialog={handleDialogOpen} />
        </div>
      </section>

      <section className="mb-12">
        <div className="text-center">
          <p className="text-xl my-8 px-4">have a unique vision in mind? let us bring it to life with a custom video tailored just for you.</p>
          <a
            href="/contact"
            className="rounded-full px-6 inline-block py-3 text-sm sm:text-base lg:text-lg font-medium outline outline-1 outline-gray-100 text-gray-100 hover:outline-brand hover:text-brand">
            contact <ArrowForward fontSize="inherit" />
          </a>
        </div>
      </section>

      {/* Pass dialogOpen and dialogData to ServiceDialog */}
      <ServiceDialog open={dialogOpen} data={dialogData} onClose={handleDialogClose} />
    </div>
  );
};

export default Services;
