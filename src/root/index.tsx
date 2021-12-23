import React, { FC, useReducer } from "react";
import AboutPage from "../pages/about";
import FrontendKnowledgePage from "../pages/frontendKnowledge";
import MainPage from "../pages/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "../cms/apollo/client";
import { MyContext } from "../globalState/context";
import { reducer } from "../globalState/reducers";
import { InitialState } from "../globalState/initialState";

const Root: FC = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <BrowserRouter>
      <MyContext.Provider value={{ state, dispatch }}>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/bazawiedzy" element={<FrontendKnowledgePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </ApolloProvider>
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
