// import ServiceCard from "../../components/ServiceCard";
import HeroSection from "@/components/HeroSection";

// const services = [
//   {title: "Wedding Videography", description: "Capture your special day in stunning detail."},
//   {title: "Event Coverage", description: "Professional event videography for any occasion."},
//   {title: "Vacation Videos", description: "Turn your travels into cinematic memories."},
// ];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-gray-50 pt-24">
      <HeroSection
        containerClass="h-[75vh] sm:h-[60vh] md:h-[75vh]"
        backgroundType="image"
        backgroundSrc="/videography.jpg"
        overlayContent={{
          subheading: " ",
          heading: "are you ready to tell your story with high-level film production?",
          description:
            "long form films | instagram reels | clips | promotional videos | documentaries | highlight reels | interviews | product demos | behind-the-scenes | drone footage | event recaps | weddings | quinceañeras",
          buttonText: "Contact",
        }}
        showButton={false}
        mediaClassName="object-top"
        buttonLink=""
      />
      <section className="p-4 xl:py-16 xl:px-36">
        <h1 className="text-3xl font-bold mb-8 w-full text-center">what we offer</h1>

        <div className="container mx-auto xl:flex xl:space-x-32 text-justify">
          <div>
            <h1 className="text-3xl font-bold">sports filming</h1>
            <p className="text-lg mb-8">
              specializing in sports videography, our services include full-game filming, slow-motion highlights, drone videography for aerial shots, and coaching analysis videos. we create custom
              highlight reels tailored to athletes and teams, perfect for college recruiting or preserving cherished memories. our editing team ensures your videos are polished, professional, and
              dynamic, with cutting-edge techniques to capture every thrilling moment
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">tailored video production & filming</h1>
            <p className="text-lg mb-8">
              at heart & hustle films, we bring the same energy and expertise to every project, no matter the industry or purpose. from corporate events and promotional videos to special occasions and
              creative storytelling, we tailor our approach to meet your unique vision. using professional-grade equipment and thoughtful editing, we ensure every frame tells a story with clarity,
              emotion, and impact. whether you’re showcasing a product, capturing a milestone, or creating content for your brand, we’re here to make it unforgettable.
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div> */}
        </div>
        <div className="text-center">
          <p className="text-xl mb-4">ready to put your story on film?</p>
          <a href="/contact" className="px-6 inline-block py-3 text-sm sm:text-base lg:text-lg text-gray-100 font-medium bg-brand rounded hover:bg-gray-900">
            contact us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
