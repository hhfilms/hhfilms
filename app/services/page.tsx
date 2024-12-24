import ServiceCard from "../../components/ServiceCard";

const services = [
  {title: "Wedding Videography", description: "Capture your special day in stunning detail."},
  {title: "Event Coverage", description: "Professional event videography for any occasion."},
  {title: "Vacation Videos", description: "Turn your travels into cinematic memories."},
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-gray-50">
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
