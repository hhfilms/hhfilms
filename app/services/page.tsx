import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";
import {StoreOutlined, SportsFootballOutlined, FavoriteBorderOutlined} from "@mui/icons-material";
const services = [
  {
    title: "sports filming",
    description:
      "specializing in sports videography, our services include full-game filming, slow-motion highlights, drone videography for aerial shots, and coaching analysis videos. we create custom professional, and dynamic, with cutting-edge techniques to capture every thrilling moment",
    icon: <SportsFootballOutlined fontSize="inherit" />,
  },
  {
    title: "business & non-profit promos",
    description:
      "we bring energy and expertise to every promotional project, tailoring our approach to meet your unique vision. Whether it's a corporate event, a product showcase, or a compelling story for your brand or non-profit, we use professional-grade equipment and thoughtful editing to ensure every frame delivers clarity, emotion, and impact. Our goal is to help you captivate your audience and make your message unforgettable.",
    icon: <StoreOutlined fontSize="inherit" />,
  },
  {
    title: "special moments",
    description:
      "from weddings and quinceañeras to birthdays and other milestone celebrations, we specialize in capturing the moments that matter most. using professional-grade equipment and meticulous editing, we create films that bring your cherished memories to life. every frame is thoughtfully crafted to tell your story with emotion, clarity, and the impact it deserves, preserving your special moments for years to come.",
    icon: <FavoriteBorderOutlined fontSize="inherit" />,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-gray-50 pt-24">
      <HeroSection
        containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh]"
        backgroundType="image"
        backgroundSrc="https://hhf-assets.s3.us-east-2.amazonaws.com/videography.jpg"
        overlayContent={{
          subheading: " ",
          heading: "are you ready to tell your story with high-level film production?",
          description:
            "long form films | instagram reels | clips | promotional videos | documentaries | highlight reels | interviews | product demos | behind-the-scenes | drone footage | event recaps | weddings | quinceañeras",
          buttonText: "Contact",
        }}
        showButton={false}
        mediaClassName="object-top object-cover"
        buttonLink=""
      />
      <section className="p-4 xl:py-16 xl:px-36">
        <h1 className="text-4xl font-extralight font-assistant text-center text-gray-50 sm:text-5xl mb-8">what we offer</h1>

        <div className="container mx-auto xl:flex xl:space-x-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl my-8">ready to put your story on film?</p>
          <a href="/contact" className="px-6 inline-block py-3 text-sm sm:text-base lg:text-lg text-gray-100 font-medium bg-brand rounded hover:bg-gray-900">
            contact us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
