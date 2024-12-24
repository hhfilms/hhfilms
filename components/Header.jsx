import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-800/50 text-white py-4 fixed top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/hhf_nopadding_light.svg"
          alt="heart & hustle films logo"
          width={150}
          height={38}
          priority
        />
        <nav>
          <a href="/" className="mx-2 hover:text-brand">
            home
          </a>
          {/* <a href="/videos" className="mx-2 hover:text-brand">
            work
          </a>
          <a href="/services" className="mx-2 hover:text-brand">
            services
          </a> */}
          <a href="/contact" className="mx-2 hover:text-brand">
            contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
