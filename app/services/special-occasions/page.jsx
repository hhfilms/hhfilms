"use client";
import {useState} from "react";
import HeroSection from "@/components/HeroSection";
import {InfoOutlined, Diversity1Outlined, CelebrationOutlined, FavoriteBorderOutlined, CakeOutlined, CameraEnhanceOutlined, WbSunnyOutlined} from "@mui/icons-material";
import Link from "next/link";
import useYouTubeStore from "@/store/youtubeStore"; // Import the Zustand store
import DialogComponent from "@/components/Modal";
import {Tooltip, Button} from "@nextui-org/react";

const specialoccasion = () => {
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

  const videos = useYouTubeStore((state) => state.videos);
  const weddingVidId = videos.find((video) => video.tags.includes("wedding"))?.id;

  return (
    <>
      <HeroSection
        containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh] bg-main-950"
        backgroundType="image"
        backgroundSrc="https://d3fpz3joletla1.cloudfront.net/michael-benz-eiJfBem7cPw-unsplash.jpg"
        overlayContent={{
          subheading: " ",
          heading: "special occasions",
          description:
            "life’s most meaningful celebrations deserve to be remembered in a way that captures their beauty and significance. whether it’s a wedding, quinceañera, birthday, or any other milestone, we’re here to tell your story with care and creativity. using professional equipment and expert editing, we craft films that preserve every laugh, tear, and heartfelt moment, so you can relive them for years to come.",
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
              <Diversity1Outlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">weddings</p>
              <p className="mb-4 font-light">starting at $500</p>
            </div>
            <p className="mb-8">
              beautifully crafted films that capture every detail, from the ceremony to the reception. customizable to fit your style and preferences &nbsp;
              <Tooltip content="includes options for short and full-length edits" className="">
                <InfoOutlined fontSize="inherit" className="mb-1" />
              </Tooltip>
            </p>
            <div className="text-xl">
              <Button color="inherit" fontSize="inherit" className="rounded-0 border-1 hover:border-gray-50 hover:text-gray-50 text-lg text-brand border-brand" onClick={handleDialogOpen}>
                sample wedding video
              </Button>
            </div>
            <span className="text-sm"></span>
          </div>

          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <FavoriteBorderOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">quinceañeras</p>
              <p className="mb-4 font-light">starting at $500</p>
            </div>
            <p className="mb-8">
              stunning coverage of your special day, highlighting traditions, dances, and family moments. &nbsp;
              <Tooltip content="includes options for short and full-length edits" className="">
                <InfoOutlined fontSize="inherit" className="mb-1" />
              </Tooltip>
            </p>
            <span className="text-sm"></span>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <CelebrationOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">birthday celebrations</p>
              <p className="mb-4 font-light">starting at $300</p>
            </div>
            <p className="mb-8">vibrant and fun videos capturing the energy and joy of your birthday celebration. ideal for milestone birthdays and family gatherings.</p>
            <span className="text-sm"></span>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <CakeOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">anniversary films</p>
              <p className="mb-4 font-light">starting at $200</p>
            </div>
            <p className="mb-8">celebrate your love story with a film that highlights your journey and special moments together. perfect for sharing at parties or keeping as a cherished memory.</p>
            <span className="text-sm"></span>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <WbSunnyOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">vacation edits</p>
              <p className="mb-4 font-light">starting at $100</p>
            </div>
            <p>do you have footage of a recent trip? let us create a memorable film highliting the best moments for you to have and share for a lifetime.</p>
          </div>
          <div className="border-1 rounded-lg p-4 md:p-10">
            <div className="text-5xl">
              <CameraEnhanceOutlined fontSize="inherit" className="mb-4 md:mb-8" />
            </div>
            <div className="">
              <p className="text-3xl text-brand">custom event videos</p>
              <p className="mb-4 font-light">
                <Link href="/contact" className="underline underline-offset-4 hover:text-brand">
                  contact
                </Link>
                for pricing
              </p>
            </div>
            <p className="mb-8">tailored to any celebration or special moment, blending creativity and professionalism to tell your story.</p>
            <span className="text-sm"></span>
          </div>
        </div>
        <div className="pl-1 py-4 text-xs text-gray-400">
          photo by <a href="https://unsplash.com/@michaelbenz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">michael benz</a> on
          <a href="https://unsplash.com/photos/person-holding-clear-wine-glass-eiJfBem7cPw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> unsplash</a>
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

      <DialogComponent open={dialogOpen} onClose={handleDialogClose}>
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${weddingVidId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </DialogComponent>
    </>
  );
};

export default specialoccasion;
