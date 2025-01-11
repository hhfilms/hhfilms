import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {useMediaQuery, useTheme} from "@mui/material/";
import Section from "./Section";

import {Dialog, AppBar, Toolbar, IconButton, Slide, Typography} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} className="" />;
});

export default function ServiceDialog({open, data, onClose}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (!open) return null;

  return (
    <>
      <Dialog fullScreen={fullScreen} fullWidth={true} maxWidth="lg" classes={{paper: "!bg-main-100"}} open={open} onClose={onClose} TransitionComponent={Transition}>
        <AppBar className="!bg-main-200 relative !text-main-900 md:!hidden">
          <Toolbar className="flex items-center text-2xl">
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon color="inherit" fontSize="inherit" fontStyle="inherit" />
            </IconButton>
            <Typography fontSize="inherit" fontStyle="inherit" className="ml-1 relative top-[-2px]">
              {data}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="hidden md:flex items-center pt-4  ml-14 text-xl ">
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon color="inherit" fontSize="inherit" fontStyle="inherit" />
          </IconButton>
          {data}
        </div>
        <div className="mt-16 md:mt-0">
          <Section data={data.split(" ")[0]} />
        </div>
      </Dialog>
    </>
  );
}
