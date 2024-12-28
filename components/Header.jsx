"use client";
import * as React from "react";
import PropTypes from "prop-types";
import {AppBar, Toolbar, CssBaseline, useScrollTrigger, Box, Divider, Drawer, IconButton, List, ListItem, ListItemText, Slide} from "@mui/material";
import {Menu, Home, Mail} from "@mui/icons-material";
import Image from "next/image";

const drawerWidth = 240;
const navItems = [
  {name: "Home", url: "/", icon: <Home />},
  {name: "Contact", url: "/contact", icon: <Mail />},
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
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="text-center pt-32">
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name}>
            <a href={item.url} className="text-center text-gray-50">
              {item.icon} {item.name}
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="fixed" sx={{zIndex: 1300}} className="bg-midnight">
          {/* desktop toolbar */}
          <Toolbar className="hidden p-8 md:flex items-center justify-between">
            {/* Optional right section (hidden on mobile) */}
            <Box className="flex-1"> </Box>
            {/* Centered Image */}
            <div className="flex-1 flex justify-center">
              <a href="/">
                <Image src="/hhf_nopadding_light.svg" alt="heart & hustle films logo" width={175} height={30} priority />
              </a>
            </div>

            {/* Navigation on the right */}
            <Box className="flex-1 flex justify-end space-x-4">
              {navItems.map((item) => (
                <a href={item.url} key={item.name} className="text-gray-50 text-xl mr-8">
                  {item.icon} {item.name}
                </a>
              ))}
            </Box>
          </Toolbar>

          {/* mobile toolbar */}
          <Toolbar className="md:hidden py-4 flex items-center justify-between">
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className="mr-2">
              <Menu />
            </IconButton>

            {/* Image centered */}
            <div className="flex-1 flex justify-center">
              <a href="/">
                <Image src="/hhf_nopadding_light.svg" alt="heart & hustle films logo" width={175} height={30} priority />
              </a>
            </div>

            {/* Optional right section (hidden on mobile) */}
            <Box className=""></Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav className="">
        <Drawer
          className=""
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
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
