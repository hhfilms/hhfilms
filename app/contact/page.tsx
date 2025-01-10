import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      {/* Header Img */}
      <div className="relative w-full h-96 sm:h-96 md:h-[500px] bg-black ">
        <Image src="https://d3fpz3joletla1.cloudfront.net/sign.jpg" alt="do someting great" layout="fill" objectFit="cover" className="pt-44 md:pt-0" />
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center text-gray-50 py-16 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row w-full lg:w-3/4 space-y-8 lg:space-y-0 lg:space-x-8">
          {/* About Text */}
          <div className="flex-1 text-left border-l-2 border-gray-200 pl-4 sm:pl-8">
            <p className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-bold">contact</p>
            <p className="mb-6 text-lg md:text-2xl font-extralight leading-relaxed">
              do you have a story you want to bring to life? whether it’s capturing the energy of the game, creating unforgettable memories, or promoting your cause, we’d love to work with you. reach
              out today to discuss your project, ask questions or find availability.
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
