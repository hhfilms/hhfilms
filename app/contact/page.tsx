import ContactUs from "@/components/ContactUs";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      {/* Header Img */}
      <div className="relative w-full h-80 sm:h-96 md:h-[600px]">
        <Image src="https://d3fpz3joletla1.cloudfront.net/sign.jpg" alt="do someting great" layout="fill" style={{objectFit: "cover", objectPosition: `-80% 45%`}} className="md:pt-0" />
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center text-dark py-16 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row w-full space-y-8 lg:space-y-0 lg:space-x-8">
          {/* About Text */}
          <div className="flex-1 text-left border-l-2 border-gray-200 pl-4 sm:pl-8">
            <p className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-bold">contact</p>
            <p className="mb-6 text-lg md:text-2xl leading-relaxed">
              do you have a story you want to bring to life? whether it’s capturing the energy of the game, creating unforgettable memories, or promoting your cause, we’d love to work with you. reach
              out today to discuss your project, ask questions or find availability.
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <ContactUs />
          </div>
        </div>
      </div>
      <div className="text-center md:text-left md:pl-16 py-4 text-xs text-gray-400">
        photo by <a href="https://unsplash.com/@clarktibbs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clark Tibbs</a> on
        <a href="https://unsplash.com/photos/do-something-great-neon-sign-oqStl2L5oxI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </div>
    </>
  );
};

export default Contact;
