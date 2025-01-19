"use client";

import {useState} from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/Services/ServiceCard";
import ServiceDialog from "@/components/Services/ServiceDialog";
import {ArrowForward} from "@mui/icons-material";
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
            "long form films | instagram reels | clips | promotional videos | documentaries | highlight reels | interviews | product demos | behind-the-scenes | drone footage | event recaps | special occasions | weddings | quinceañeras",
          buttonText: "contact",
        }}
        overlayClassName="top-2/3"
        mediaClassName="object-top object-cover"
        buttonLink="/contact"
        imagePosition="top"
      />
      <section className="my-12">
        <h1 className="text-4xl font-extralight font-assistant text-center text-gray-50 sm:text-5xl mb-8">what we offer</h1>

        <div className="mx-auto xl:flex xl:space-x-32">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <ServiceCard onOpenDialog={handleDialogOpen} />
          </div>
        </div>
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
