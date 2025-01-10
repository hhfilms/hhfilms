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
      <Dialog fullScreen={fullScreen} fullWidth={true} maxWidth="lg" classes={{paper: "bg-stone-400"}} open={open} onClose={onClose} TransitionComponent={Transition}>
        <AppBar className="bg-stone-500 relative">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="div" className="ml-2">
              {data}
            </Typography>
          </Toolbar>
        </AppBar>
        <Section data={data.split(" ")[0]} />
      </Dialog>
    </>
  );
}
