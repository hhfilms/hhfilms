"use client";
import {useState} from "react";
import PropTypes from "prop-types";
import {AppBar, Toolbar, useScrollTrigger, Box, IconButton, Slide} from "@mui/material";
import Image from "next/image";
import Socials from "@/components/Socials";
import {usePathname} from "next/navigation";
import DesktopMenu from "@/components/Header/DesktopMenu";
import MobileDrawer from "@/components/Header/MobileDrawer";

function HideOnScroll(props) {
  const {children, window} = props;
  const trigger = useScrollTrigger({target: window ? window() : undefined});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

const Header = (props) => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar elevation="0" position="fixed" sx={{zIndex: 1300}} className="app-bar bg-main-950 p-4">
          {/* desktop toolbar */}
          <Toolbar className="hidden pl-12 pr-2 py-2 xl:flex items-center relative justify-between w-full">
            {/* Left Section */}
            <Box className="flex-1">
              <DesktopMenu pathname={pathname} />
            </Box>

            {/* Center Section (hidden on mobile) */}
            <Box className="flex-1 absolute left-1/2 transform -translate-x-1/2">
              <a href="/">
                <Image className="w-64 h-auto" src="/logo-white.svg" alt="heart & hustle films logo" width={175} height={30} />
              </a>
            </Box>

            {/* Right Section */}
            <Box className="flex-1">
              <Socials containerClass="hidden md:inline-flex flex-row text-2xl w-full text-brand justify-end space-x-4" />
            </Box>
          </Toolbar>

          {/* mobile toolbar button */}
          <Toolbar className="xl:hidden py-4 flex items-center justify-between">
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className="mr-2">
              <a
                className="group flex items-center justify-center w-8 h-8 rounded tap-highlight-transparent outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-pressed={mobileOpen}>
                <span className="sr-only">{mobileOpen ? "Close navigation menu" : "Open navigation menu"}</span>
                <span className={`relative flex flex-col items-center justify-center w-6 h-6 text-inherit transition-opacity ${mobileOpen ? "opacity-70" : "opacity-100"}`}>
                  {/* Top Line */}
                  <span className={`block h-[2px] w-full bg-current transition-transform duration-150 ${mobileOpen ? "translate-y-[2px] rotate-45" : "-translate-y-1 rotate-0"}`}></span>

                  {/* Middle Line (hidden in "X" state) */}
                  <span className={`block h-[2px] w-full bg-current transition-opacity duration-150 ${mobileOpen ? "opacity-0" : "opacity-100"}`}></span>

                  {/* Bottom Line */}
                  <span className={`block h-[2px] w-full bg-current transition-transform duration-150 ${mobileOpen ? "-translate-y-[2px] -rotate-45" : "translate-y-1 rotate-0"}`}></span>
                </span>
              </a>
            </IconButton>

            {/* Image centered */}
            <div className="flex-1 flex justify-center">
              <a href="/">
                <Image className="hidden md:block w-64 h-auto" src="/logo-white.svg" alt="heart & hustle films logo" width={175} height={30} />
                <Image className="w-16 -ml-4 h-auto md:hidden" src="/icon-white.svg" alt="heart & hustle films logo" width={175} height={30} />
              </a>
            </div>
            {/* Optional right section */}
            <Box className=""></Box>
          </Toolbar>
          {/* <Socials containerClass="md:hidden text-gray-50 py-2 flex flex-row text-3xl w-full text-gray-50 justify-around" /> */}
        </AppBar>
      </HideOnScroll>

      <MobileDrawer pathname={pathname} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} props={props} />
    </>
  );
};

export default Header;
