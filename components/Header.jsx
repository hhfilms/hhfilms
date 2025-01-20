"use client";
import {useState} from "react";
import PropTypes from "prop-types";
import {Menu, MenuItem, Button, AppBar, Toolbar, useScrollTrigger, Box, Divider, Drawer, IconButton, List, ListItem, Slide} from "@mui/material";
import {PriceChangeOutlined, HomeOutlined, SmsOutlined, MonochromePhotosOutlined, InfoOutlined} from "@mui/icons-material";
import Image from "next/image";
import Socials from "@/components/Socials";
import {usePathname} from "next/navigation";
import Link from "next/link";

const drawerWidth = 240;

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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const pathname = usePathname();
  const {window} = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="pt-48 text-lg">
      <Divider />
      <Link href="/" className={`p-1 block w-full ${pathname === "/" ? "text-brand" : "text-gray-50 hover:text-brand"}`}>
        <span className="mr-1">
          <HomeOutlined className="md:hidden" />
        </span>
        home
      </Link>
      <Link href="/about" className={`p-1 block w-full ${pathname === "/about" ? "text-brand" : "text-gray-50 hover:text-brand"}`}>
        <span className="mr-1">
          <InfoOutlined className="md:hidden" />
        </span>
        about
      </Link>
      <Link href="/contact" className={`p-1 block w-full ${pathname === "/contact" ? "text-brand" : "text-gray-50 hover:text-brand"}`}>
        <span className="mr-1">
          <SmsOutlined className="md:hidden" />
        </span>
        contact
      </Link>
      <p className="text-gray-50 pl-1">
        <span className="mr-1">
          <PriceChangeOutlined className="md:hidden" />
        </span>
        services & pricing
      </p>
      <List className="text-gray-50 pl-3">
        <ListItem className="py-1 block w-full text-lg">
          <Link className={`${pathname === "/services/sports" ? "text-brand" : "text-gray-50 hover:text-brand"}`} href="/services/sports">
            sports
          </Link>
        </ListItem>
        <ListItem className="py-1  block w-full text-lg">
          <Link className={`${pathname === "/services/special-occasions" ? "text-brand" : "text-gray-50 hover:text-brand"}`} href="/services/special-occasions">
            special occasions
          </Link>
        </ListItem>
        <ListItem className={`${pathname === "/services/business" ? "text-brand" : "text-gray-50 hover:text-brand"}`}>
          <Link href="/services/business">business & nonprofit</Link>
        </ListItem>
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
              <Link href="/" className={`text-xl mr-8 text-center ${pathname === "/" ? "text-brand underline underline-offset-8" : "text-gray-50 hover:text-brand"}`}>
                <span className="mr-1"></span> home
              </Link>
              <Link href="/about" className={`text-xl mr-8 text-center ${pathname === "/about" ? "text-brand underline underline-offset-8" : "text-gray-50 hover:text-brand"}`}>
                <span className="mr-1"></span> about
              </Link>
              <Link href="/contact" className={`text-xl mr-8 text-center ${pathname === "/contact" ? "text-brand underline underline-offset-8" : "text-gray-50 hover:text-brand"}`}>
                <span className="mr-1"></span> contact
              </Link>
              <div>
                <Button
                  className="text-gray-50 lowercase text-xl p-0"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}>
                  services & pricing
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}>
                  <MenuItem onClick={handleClose} className={`${pathname === "/services/sports" ? "bg-brand text-gray-50 pointer-events-none" : "hover:text-gray-50 hover:bg-brand"}`}>
                    <Link href="/services/sports">sports</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={`${pathname === "/services/special-occasions" ? "bg-brand text-gray-50 pointer-events-none" : "hover:text-gray-50 hover:bg-brand"}`}>
                    <Link href="/services/special-occasions">special occasions</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose} className={`${pathname === "/services/business" ? "bg-brand text-gray-50 pointer-events-none" : "hover:text-gray-50 hover:bg-brand"}`}>
                    <Link href="/services/business">business & nonprofit</Link>
                  </MenuItem>
                </Menu>
              </div>
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
