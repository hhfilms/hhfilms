import {ArrowForward, StoreOutlined, SportsFootballOutlined, FavoriteBorderOutlined, LightbulbOutlined} from "@mui/icons-material";

const services = [
  {
    title: "sports filming",
    description:
      "specializing in sports videography, our services include full-game filming, slow-motion highlights, drone videography for aerial shots, and coaching analysis videos. we create custom professional, and dynamic, with cutting-edge techniques to capture every thrilling moment for teams or individuals.",
    icon: <SportsFootballOutlined fontSize="inherit" />,
  },
  {
    title: "business & nonprofit",
    description:
      "we bring energy and expertise to every promotional project, tailoring our approach to meet your unique vision. Whether it's a corporate event, a product showcase, or a compelling story for your brand or nonprofit, we use professional-grade equipment and thoughtful editing to ensure every frame delivers clarity, emotion, and impact. Our goal is to help you captivate your audience and make your message unforgettable.",
    icon: <StoreOutlined fontSize="inherit" />,
  },
  {
    title: "special occasions",
    description:
      "from weddings and quinceañeras to birthdays and other milestone celebrations, we specialize in capturing the moments that matter most. using professional-grade equipment and meticulous editing, we create films that bring your cherished memories to life. every frame is thoughtfully crafted to tell your story with emotion, clarity, and the impact it deserves, preserving your special moments for years to come.",
    icon: <FavoriteBorderOutlined fontSize="inherit" />,
  },
];

const ServiceCard = ({onOpenDialog}) => {
  const handleCardClick = (item) => {
    const cardData = item; // Capture the full service object
    onOpenDialog(cardData); // Pass it to the parent component
  };

  return services.map((service, index) => (
    <div key={index} className="bg-zinc-800 shadow-md p-6 text-gray-50 font-light flex flex-col">
      <p className="md:hidden text-5xl md:text-6xl text-brand text-center">{service.icon}</p>
      <h3 className="text-center md:text-left md:flex items-center mb-4 text-xl md:text-3xl">
        <span className="hidden md:block text-brand text-3xl md:text-6xl mr-1 md:mr-4">{service.icon}</span> {service.title}
      </h3>
      <p className="mb-8 text-lg md:text-xl flex-grow">{service.description}</p>
      <div className="mt-auto flex justify-center space-x-8">
        <button
          onClick={() => handleCardClick(service.title)} // Fix: Use an anonymous function
          className="flex items-center rounded-full px-6 py-3 text-sm sm:text-base lg:text-lg outline outline-1 outline-gray-100 text-gray-100 hover:outline-brand hover:text-brand">
          more info <LightbulbOutlined fontSize="inherit" />
        </button>
      </div>
    </div>
  ));
};

export default ServiceCard;