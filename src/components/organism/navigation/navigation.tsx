import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { drawerWidth } from "./styles/navigation.styles";

const Navigation = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Frontend Space
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
