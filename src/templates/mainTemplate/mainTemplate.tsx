import React, { FC } from "react";
import Box from "@mui/material/Box";
import Navigation from "../../components/organism/navigation";
import Sidebar from "../../components/organism/sidebar/sidebar";
import {
  MainWrapperConfig,
  BoxWrapperConfig,
} from "./styles/mainTemplate.styles";

const MainTemplate: FC = ({ children }) => {
  console.log("here");

  return (
    <Box sx={MainWrapperConfig}>
      <Navigation />
      <Box component="main" sx={BoxWrapperConfig}>
        {children}
      </Box>
      <Sidebar />
    </Box>
  );
};

export default MainTemplate;
