import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="relative w-full h-3/4 overflow-hidden bg-gray-100 ">
      {/* Hero Section */}
      <div className="relative w-full h-full bg-background ">
        {/* Background Video */}
        {/* <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-10">
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img src="/hero.jpg" alt="hero image" className="absolute top-0 opacity-50 left-0 w-full h-full object-cover " />

        {/* Overlay Content */}
        <div className="absolute top-1/2 left-48 transform -translate-y-1/2 text-gray-50 text-left border-l-2 p-8">
          <p className="mb-2 text-sm">welcome to</p>
          <h1 className="mb-4 text-5xl">heart & hustle films</h1>
          <p className="mb-6 max-w-md text-3xl font-extralight">
          heart in every shot<br />hustle in every frame
          </p>
          <button className="px-6 py-3 text-lg text-gray-100 font-medium bg-brand rounded hover:bg-gray-900">contact</button>
        </div>
      </div>
    </div>
  );
}
