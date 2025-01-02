const ServiceCard = ({service}) => {
  return (
    <div className="bg-zinc-800 rounded-lg shadow-md p-6 text-gray-50">
      <p className="text-5xl md:text-6xl text-brand text-center">{service.icon}</p>
      <h3 className="font-extralight text-center mb-4 text-xl md:text-2xl">{service.title}</h3>
      <p className="mb-4 font-extralight text-md md:text-lg text-justify">{service.description}</p>
      {/* <button className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600">Learn More</button> */}
    </div>
  );
};

export default ServiceCard;
