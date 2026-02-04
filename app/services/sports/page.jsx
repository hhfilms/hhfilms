"use client";
import {useState} from "react";
import HeroSection from "@/components/HeroSection";
import {RecordVoiceOverOutlined, ScoreboardOutlined, VideocamOutlined, CampaignOutlined, VideoCameraFrontOutlined, StadiumOutlined, CameraEnhanceOutlined} from "@mui/icons-material";
import Link from "next/link";
import useYouTubeStore from "@/store/youtubeStore"; // Import the Zustand store
import ServiceCard from "@/components/Services/ServiceCard";
import DialogComponent from "@/components/Modal";
import {Button} from "@nextui-org/react";

const Sports = () => {
  // State to control dialog visibility
  const [dialogOpen, setDialogOpen] = useState(false);
  const [youTubeUrl, setYouTubeUrl] = useState("");

  // State to hold specific data for the dialog, if needed
  const [dialogData, setDialogData] = useState(null);
  const videos = useYouTubeStore((state) => state.videos);
  // Function to open the dialog
  const handleDialogOpen = (type) => {
    const vidId = videos.find((video) => video.tags.includes(type))?.id;
    setYouTubeUrl(`https://www.youtube.com/embed/${vidId}`);
    // setDialogData(item); // Set any data the dialog might need
    setDialogOpen(true);
  };

  // Function to close the dialog
  const handleDialogClose = () => {
    setDialogOpen(false);
    setDialogData(null);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center text-dark ">
        <HeroSection
          containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh] bg-main-950"
          backgroundType="image"
          backgroundSrc="https://d3fpz3joletla1.cloudfront.net/p17-202-25502.jpg"
          overlayContent={{
            subheading: " ",
            heading: "sports videography",
            description:
              "Our services include full-game filming, slow-motion highlights, drone videography for aerial shots, and coaching analysis videos. we create custom professional, and dynamic, with cutting-edge techniques to capture every thrilling moment for teams or individuals.",
            buttonText: "Contact",
          }}
          overlayClassName="top-1/3 lg:top-2/3"
          mediaClassName="object-top object-cover"
          buttonLink="/contact"
          imagePosition="center"
        />

        <section className="p-2 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-xl">
            <ServiceCard
              title="Solo | Team Game Gighlight"
              price="$100 | $200"
              disclaimer="*aspect ratios can include vertical, horizontal, or both for multiple platforms"
              description="Footage of the most exciting and pivotal moments of the game. Short form up to 90 seconds and long form available. Includes individual clips for social sharing. Tournament pricing also available - contact for details"
              icon={<VideocamOutlined fontSize="inherit" className="mb-4 md:mb-8" />}>
              <div className="text-xl mb-8">
                <Button
                  color="inherit"
                  fontSize="inherit"
                  className="w-full md:w-auto rounded-0 border-1 hover:border-gray-900 hover:text-gray-900 text-lg text-brand border-brand"
                  onPress={() => handleDialogOpen("lacrosse")}>
                  sample highlight
                </Button>
              </div>
            </ServiceCard>

            <ServiceCard
              title="Personal Brand Hype Film"
              price="$400"
              disclaimer="*filmed at an agreed upon location on a date that is not a game day"
              description="Have your athlete share their journey and tell a personal story to inspire coaches, recruiters, and fans with their dedication, passion, and achievements."
              icon={<VideoCameraFrontOutlined fontSize="inherit" className="mb-4 md:mb-8" />}>
              <div className="text-xl mb-8">
                <Button
                  color="inherit"
                  fontSize="inherit"
                  className="w-full md:w-auto rounded-0 border-1 hover:border-gray-900 hover:text-gray-900 text-lg text-brand border-brand"
                  onPress={() => handleDialogOpen("hype")}>
                  sample hype film
                </Button>
              </div>
            </ServiceCard>

            <ServiceCard
              title="Athlete Interview"
              price="$150"
              disclaimer="*filmed at an agreed upon location on a date that is not a game day"
              description="A sit-down session where athletes open up about their journey, mindset, and goals, shot and edited for a clean, cinematic look. Great for NIL, recruiting, or personal branding."
              icon={<RecordVoiceOverOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
            />

            <ServiceCard
              title="Player Introductions"
              price="$150"
              disclaimer="*teams only"
              description="A fun way to have your athletes introduce themselves with their position and a personal message."
              icon={<CampaignOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
            />

            {/* <ServiceCard
              title="drone shots"
              price="$50"
              disclaimer="*subject to local laws and regulations"
              description="stunning aerial perspectives ideal for outdoor games or large-scale events"
              icon={<StadiumOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
            /> */}

            <ServiceCard
              title="Full-Game Filming"
              price="$500"
              disclaimer="*includes 1 camera angle. does not include music, voiceover, or customization"
              description="Comprehensive coverage of every play, capturing all the action from start to finish."
              icon={<ScoreboardOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
            />

            <ServiceCard
              title="Custom Sports Video"
              description="Tailored to your specific goals, blending professionalism, creativity, and advanced technology."
              icon={<CameraEnhanceOutlined fontSize="inherit" className="mb-4 md:mb-8" />}
            />
          </div>
        </section>
        <section className="mb-12 text-dark text-center">
          <p className="text-xl my-8 px-4">have a unique vision in mind? let us bring it to life with a custom video tailored just for you.</p>
          <Link
            href="/contact"
            className="uppercase rounded-full px-6 inline-block py-3 text-sm sm:text-base lg:text-lg font-medium outline outline-1 hover:outline-dark hover:text-dark outline-brand text-brand">
            contact
          </Link>
          <p className="text-xs text-center text-darkaccent w-3/4 mx-auto my-8">
            *prices displayed on this site are base prices and may vary depending on customization, additional features, or specific requirements. Please contact us for a detailed quote
          </p>
        </section>
      </div>

      <DialogComponent open={dialogOpen} closeModal={handleDialogClose}>
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={youTubeUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </DialogComponent>
    </>
  );
};

export default Sports;
