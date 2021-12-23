import React, { FC, useReducer } from "react";
import Box from "@mui/material/Box";
import Navigation from "../../components/organism/navigation";
import Sidebar from "../../components/organism/sidebar/sidebar";
import {
  MainWrapperConfig,
  BoxWrapperConfig,
} from "./styles/mainTemplate.styles";
import { ApolloProvider } from "@apollo/client";
import client from "../../cms/apollo/client";
import { MyContext } from "../../globalState/context";
import { reducer } from "../../globalState/reducers";
import { InitialState } from "../../globalState/initialState";

const MainTemplate: FC = ({ children }) => {
  console.log("here");
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <ApolloProvider client={client}>
        <Box sx={MainWrapperConfig}>
          <Navigation />
          <Box component="main" sx={BoxWrapperConfig}>
            {children}
          </Box>
          <Sidebar />
        </Box>
      </ApolloProvider>
    </MyContext.Provider>
  );
};

export default MainTemplate;
