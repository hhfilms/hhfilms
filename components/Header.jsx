"use client";
import {useState} from "react";
import PropTypes from "prop-types";
import {AppBar, Toolbar, useScrollTrigger, Box, Divider, Drawer, IconButton, List, ListItem, ListItemText, Slide} from "@mui/material";
import {HomeOutlined, SmsOutlined, MonochromePhotosOutlined, InfoOutlined} from "@mui/icons-material";
import Image from "next/image";
import Socials from "./Socials";

const drawerWidth = 240;
const navItems = [
  {name: "home", url: "/", icon: <HomeOutlined className="md:hidden" />},
  {name: "about", url: "/about", icon: <InfoOutlined className="md:hidden" />},
  {name: "contact", url: "/contact", icon: <SmsOutlined className="md:hidden" />},
  {name: "services", url: "/services", icon: <MonochromePhotosOutlined className="md:hidden" />},
];

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
  const {window} = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="text-center pt-48">
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name}>
            <a href={item.url} className="p-1 text-gray-50 block w-full">
              <span className="mr-1">{item.icon}</span> {item.name}
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar elevation="0" position="fixed" sx={{zIndex: 1300}} className="app-bar bg-main-950/25">
          {/* desktop toolbar */}
          <Toolbar className="hidden p-8 md:flex items-center justify-between">
            {/* Left Section */}
            <Box className="mr-8">
              <a href="/">
                <Image className="w-44 h-auto" src="/hhf_nopadding_light.svg" alt="heart & hustle films logo" width={175} height={30} />
              </a>
            </Box>

            {/* Center Section (hidden on mobile) */}
            <div className="flex-1 flex justify-start ">
              {navItems.map((item) => (
                <a href={item.url} key={item.name} className="text-gray-50 text-xl mr-8 text-center">
                  <span className="mr-1">{item.icon}</span> {item.name}
                </a>
              ))}
            </div>

            {/* Right Section */}
            <Box className="flex-1 flex justify-end ">
              <Socials containerClass="hidden md:inline-flex flex-row text-2xl w-full text-brand justify-end space-x-4" />
            </Box>
          </Toolbar>

          {/* mobile toolbar */}
          <Toolbar className="md:hidden py-4 flex items-center justify-between">
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
                <Image className="w-44 h-auto" src="/hhf_nopadding_light.svg" alt="heart & hustle films logo" width={175} height={30} />
              </a>
            </div>
            {/* Optional right section (hidden on mobile) */}
            <Box className=""></Box>
          </Toolbar>
          <Socials containerClass="md:hidden text-gray-50 py-2 flex flex-row text-3xl w-full text-gray-50 justify-around" />
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Custom background color
              borderRadius: "8px", // Custom border radius
            },
            elevation: 16, // Add a shadow elevation
          }}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {xs: "block", md: "none"},
            "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
          }}>
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Header;
