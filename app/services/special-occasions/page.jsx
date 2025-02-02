"use client";
import {useState} from "react";
import HeroSection from "@/components/HeroSection";
import {Diversity1Outlined, CelebrationOutlined, DiamondOutlined, CakeOutlined, CameraEnhanceOutlined, WbSunnyOutlined} from "@mui/icons-material";
import Link from "next/link";
import useYouTubeStore from "@/store/youtubeStore"; // Import the Zustand store
import DialogComponent from "@/components/Modal";
import {Button} from "@nextui-org/react";
import ServiceCard from "@/components/Services/ServiceCard";

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
      <section className="p-2 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-xl">
          <ServiceCard
            title="weddings"
            price="$500"
            disclaimer="*includes options for short and full-length edits"
            description="beautifully crafted films that capture every detail, from the ceremony to the reception. customizable to fit your style and preferences"
            icon={<Diversity1Outlined fontSize="inherit" className="mb-4 md:mb-8" />}>
            <div className="text-xl mb-8">
              <Button
                color="inherit"
                fontSize="inherit"
                className="w-full md:w-auto rounded-0 border-1 hover:border-gray-900 hover:text-gray-900 text-lg text-brand border-brand"
                onPress={handleDialogOpen}>
                sample wedding video
              </Button>
            </div>
          </ServiceCard>

          <ServiceCard
            title="quinceañeras"
            price="$500"
            disclaimer="*includes options for short and full-length edits"
            description="stunning coverage of your special day, highlighting traditions, dances, and family moments"
            icon={<DiamondOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="birthday celebrations"
            price="$300"
            disclaimer=""
            description="vibrant and fun videos capturing the energy and joy of your birthday celebration. ideal for milestone birthdays and family gatherings"
            icon={<CelebrationOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="anniversary films"
            price="$200"
            disclaimer=""
            description="celebrate your love story with a film that highlights your journey and special moments together. perfect for sharing at parties or keeping as a cherished memory"
            icon={<CakeOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="vacation edits"
            price="$100"
            disclaimer=""
            description="do you have footage of a recent trip? let us create a memorable film highliting the best moments for you to have and share for a lifetime"
            icon={<WbSunnyOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="custom film"
            description="tailored to any celebration or special moment, blending creativity and professionalism to tell your story"
            icon={<CameraEnhanceOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />
        </div>
      </section>

      <section className="mb-12 text-dark text-center">
        <p className="text-xl my-8 px-4">have a unique vision in mind? let us bring it to life with a custom video tailored just for you.</p>
        <Link href="/contact" className="rounded-full px-6 inline-block py-3 text-sm sm:text-base lg:text-lg font-medium outline outline-1 hover:outline-dark hover:text-dark outline-brand text-brand">
          contact
        </Link>
        <p className="text-xs text-center text-darkaccent w-1/2 m-auto my-8">
          *prices displayed on this site are base prices and may vary depending on customization, additional features, or specific requirements. Please contact us for a detailed quote
        </p>
      </section>

      <div className="pl-24 py-4 text-xs text-gray-400">
        photo by <a href="https://unsplash.com/@michaelbenz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">michael benz</a> on
        <a href="https://unsplash.com/photos/person-holding-clear-wine-glass-eiJfBem7cPw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> unsplash</a>
      </div>

      <DialogComponent open={dialogOpen} closeModal={handleDialogClose}>
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
