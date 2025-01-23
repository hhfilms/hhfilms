"use client";
import HeroSection from "@/components/HeroSection";
import {StoreOutlined, LocalActivityOutlined, ReviewsOutlined, RedeemOutlined, ThumbUpAltOutlined, Diversity3Outlined} from "@mui/icons-material";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import DialogComponent from "@/components/Modal";
import {useState} from "react";
import useYouTubeStore from "@/store/youtubeStore"; // Import the Zustand store
import ServiceCard from "@/components/Services/ServiceCard";

const business = () => {
  const videos = useYouTubeStore((state) => state.videos);
  const promoId = videos.find((video) => video.tags.includes("promo"))?.id;
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
      <section className="p-2 md:p-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-xl">
          <ServiceCard
            title="promotional video"
            price="$500"
            disclaimer="*aspect ratios can include vertical, horizontal, or both for multiple platforms"
            description="highlight your mission, products, or services. these videos are designed to connect with your audience, showcase what makes you unique, and drive action"
            icon={<StoreOutlined fontSize="inherit" className="mb-4 md:mb-8" />}>
            <div className="text-xl mb-8">
              <Button
                color="inherit"
                fontSize="inherit"
                className="w-full md:w-auto rounded-0 border-1 hover:border-dark hover:text-dark text-lg text-brand border-brand"
                onPress={handleDialogOpen}>
                sample promo video
              </Button>
            </div>
          </ServiceCard>

          <ServiceCard
            title="testimonial videos"
            price="$500"
            description="directly from satisfied customers, clients, or beneficiaries, testimonial videos showcase real people sharing their positive experiences with your organization, adding credibility and a personal touch to your story"
            icon={<ReviewsOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="event coverage"
            price="$300"
            description="event coverage captures the energy and importance of your special occasions. share these moments with those who couldn’t attend or use them as promotional material to build excitement
              for future events"
            icon={<LocalActivityOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="fundraising appeals"
            price="$200"
            description="bring your mission to life with powerful storytelling that inspires generosity. fundraising appeal videos highlight the urgency of your cause, the impact of donations, and how supporters can make a difference"
            icon={<RedeemOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="impact stories"
            price="$200"
            description="impact stories are a compelling way to show the difference you’re making. these videos combine heartfelt storytelling with real-world results, inspiring support and showcasing your
              mission in action"
            icon={<Diversity3Outlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />

          <ServiceCard
            title="social media content"
            price="$200"
            description="short, engaging videos are essential for a strong social media presence. reels, stories, or posts - we craft content that grabs attention and encourages sharing, helping you connect with
              your audience on platforms like instagram, TikTok, and LinkedIn"
            icon={<ThumbUpAltOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
          />
        </div>
      </section>

      <section className="mb-12  text-center">
        <p className="text-xl my-8 px-4">have a unique vision in mind? let us bring it to life with a custom video tailored just for you.</p>
        <Link href="/contact" className="rounded-full px-6 inline-block py-3 text-sm sm:text-base lg:text-lg font-medium outline outline-1 hover:outline-dark hover:text-dark outline-brand text-brand">
          contact
        </Link>
      </section>
      <div className="pl-24 py-4 text-left text-xs text-gray-400">
        photo by <a href="https://unsplash.com/@timmossholder?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">tim mossholder</a> on
        <a href="https://unsplash.com/photos/a-black-and-gold-sign-that-says-grand-opening-Cg7xHNo0ur0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"> unsplash</a>
      </div>
      <DialogComponent open={dialogOpen} closeModal={handleDialogClose}>
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${promoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </DialogComponent>
    </>
  );
};

export default business;
