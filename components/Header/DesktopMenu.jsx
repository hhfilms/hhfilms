import {useState} from "react";
import Link from "next/link";
import {Button, Menu, MenuItem} from "@mui/material";

export default function DesktopMenu({pathname}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex">
      <Link href="/" className={`hover:text-gray-50 uppercase mr-8 text-center ${pathname === "/" ? "text-gray-50 font-bold" : "text-darkaccent"}`}>
        <span className="mr-1"></span> home
      </Link>
      <Link href="/about" className={`hover:text-gray-50 uppercase mr-8 text-center ${pathname === "/about" ? "text-gray-50 font-bold" : "text-darkaccent"}`}>
        <span className="mr-1"></span> about
      </Link>
      <Link href="/contact" className={`hover:text-gray-50 uppercase mr-8 text-center ${pathname === "/contact" ? "text-gray-50 font-bold" : "text-darkaccent"}`}>
        <span className="mr-1"></span> contact
      </Link>
      <div>
        <Button
          className={`hover:cursor-pointer hover:text-gray-50 uppercase text-base p-0 ${pathname.includes("/services/") ? "text-gray-50 font-bold" : "text-darkaccent"}`}
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
            <Link className="block w-full" href="/services/sports">
              sports
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={`${pathname === "/services/special-occasions" ? "bg-brand text-gray-50 pointer-events-none" : "hover:text-gray-50 hover:bg-brand"}`}>
            <Link className="block w-full" href="/services/special-occasions">
              special occasions
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={`${pathname === "/services/business" ? "bg-brand text-gray-50 pointer-events-none" : "hover:text-gray-50 hover:bg-brand"}`}>
            <Link className="block w-full" href="/services/business">
              business & nonprofit
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
