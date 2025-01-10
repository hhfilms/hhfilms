import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {useMediaQuery, useTheme} from "@mui/material/";
import Section from "./Section";

import {Dialog, Button, AppBar, Toolbar, Divider, IconButton, List, ListItem, ListItemText, ListItemButton, Slide, Typography} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} className=" xxxxxx" />;
});

export default function ServiceDialog({open, data, onClose}) {
  if (!open) return null;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Dialog fullScreen={fullScreen} fullWidth={true} maxWidth="lg" classes={{paper: "bg-main-100"}} open={open} onClose={onClose} TransitionComponent={Transition}>
        <AppBar className="bg-main-200 relative text-main-900">
          <Toolbar className="flex items-center text-2xl">
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon color="inherit" fontSize="inherit" fontStyle="inherit" />
            </IconButton>
            <Typography fontSize="inherit" fontStyle="inherit" className="ml-1 relative top-[-2px]">
              {data}
            </Typography>
          </Toolbar>
        </AppBar>
        <Section data={data.split(" ")[0]} />
      </Dialog>
    </>
  );
}
