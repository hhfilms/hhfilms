"use client";
import {useState} from "react";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-36 bg-gray-800/50 text-white z-50 flex items-center p-4">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/">
          <Image src="/hhf_nopadding_light.svg" alt="heart & hustle films logo" width={120} height={30} className="" priority />
        </a>

        {/* Hamburger Icon (visible on mobile) */}
        <button onClick={toggleMenu} className="sm:hidden text-white focus:outline-none focus:ring-2 focus:ring-brand" aria-label="Toggle Navigation Menu">
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Full Navigation (visible on tablets and up) */}
        <nav className="hidden sm:flex space-x-4 text-sm sm:text-base lg:text-lg">
          <a href="/" className="hover:text-brand">
            home
          </a>
          {/* Uncomment these links when needed */}
          {/* <a href="/videos" className="hover:text-brand">
            work
          </a>
          <a href="/services" className="hover:text-brand">
            services
          </a> */}
          <a href="/contact" className="hover:text-brand">
            contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation (visible when menuOpen is true) */}
      {menuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-gray-800 shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-6 text-sm">
            <a href="/" className="hover:text-brand" onClick={() => setMenuOpen(false)}>
              home
            </a>
            {/* Uncomment these links when needed */}
            {/* <a href="/videos" className="hover:text-brand" onClick={() => setMenuOpen(false)}>
              work
            </a>
            <a href="/services" className="hover:text-brand" onClick={() => setMenuOpen(false)}>
              services
            </a> */}
            <a href="/contact" className="hover:text-brand" onClick={() => setMenuOpen(false)}>
              contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
