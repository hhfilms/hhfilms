const ServiceCard = ({ service }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
      </div>
    );
  };
  
  export default ServiceCard;
  