import {useState} from "react";
import {Drawer, Box, Divider, Button, MenuItem} from "@mui/material";
import Link from "next/link";
import {ExpandLessOutlined, ExpandMoreOutlined, PriceChangeOutlined, HomeOutlined, SmsOutlined, InfoOutlined} from "@mui/icons-material";

export default function MobileDrawer({props, pathname, mobileOpen, handleDrawerToggle}) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsSubMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    handleDrawerToggle(false); // Close the drawer
    if (isSubMenuOpen) {
      toggleMenu(); // Close the menu
    }
  };
  const {window} = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      PaperProps={{
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Custom background color
          borderRadius: "0px !important", // Custom border radius
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: {xs: "block", md: "none"},
        "& .MuiDrawer-paper": {boxSizing: "border-box", width: "100%", borderRadius: 0},
      }}>
      <Box className="pt-28 text-lg">
        <Divider />
        <Link onClick={handleMenuItemClick} href="/" className={`text-darkaccent uppercase px-2 py-1 block w-full ${pathname === "/" ? "text-gray-50 font-bold" : "text-darkaccent"}}`}>
          <span className="mr-1">
            <HomeOutlined className="md:hidden" />
          </span>
          home
        </Link>
        <Link onClick={handleMenuItemClick} href="/about" className={`text-darkaccent uppercase px-2 py-1 block w-full ${pathname === "/about" ? "text-gray-50 font-bold" : "text-darkaccent"}`}>
          <span className="mr-1">
            <InfoOutlined className="md:hidden" />
          </span>
          about
        </Link>
        <Link onClick={handleMenuItemClick} href="/contact" className={`uppercase px-2 py-1 block w-full ${pathname === "/contact" ? "text-gray-50 font-bold" : "text-darkaccent"}`}>
          <span className="mr-1">
            <SmsOutlined className="md:hidden" />
          </span>
          contact
        </Link>
        <div className="relative inline-block text-left w-full">
          {/* Button to toggle the menu */}
          <Button
            className={`hover:cursor-pointer hover:text-gray-50 uppercase text-xl px-2 py-1 ${pathname.includes("/services/") ? "text-gray-50 font-bold" : "text-darkaccent"}`}
            id="basic-button"
            aria-controls={mobileOpen ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={mobileOpen ? "true" : undefined}
            onClick={toggleMenu}>
            <span className="mr-1">
              <PriceChangeOutlined className="md:hidden" />
            </span>
            services & pricing {isSubMenuOpen ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
          </Button>

          {/* Menu dropdown */}
          <div
            className={`mt-2 w-full bg-transparent transition-transform duration-300 origin-top-right transform ${isSubMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
            style={{transformOrigin: "top"}}>
            <ul className="p-0">
              <MenuItem onClick={handleMenuItemClick} className={`${pathname === "/services/sports" ? "bg-gray-100/80 text-gray-900 pointer-events-none" : "text-gray-50"}`}>
                <Link className="block w-full" href="/services/sports">
                  sports
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuItemClick} className={`${pathname === "/services/special-occasions" ? "bg-gray-100/80 text-gray-900 pointer-events-none" : "text-gray-50"}`}>
                <Link className="block w-full" href="/services/special-occasions">
                  special occasions
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuItemClick} className={`${pathname === "/services/business" ? "bg-gray-100/80 text-gray-900 pointer-events-none" : "text-gray-50"}`}>
                <Link className="block w-full" href="/services/business">
                  business & nonprofit
                </Link>
              </MenuItem>
            </ul>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
