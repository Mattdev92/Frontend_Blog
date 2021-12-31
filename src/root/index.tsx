import React, { FC, useReducer, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import AboutPage from "../pages/about";
import FrontendKnowledgePage from "../pages/frontendKnowledge";
import MainPage from "../pages/main";
import client from "../cms/apollo/client";
import { MyContext } from "../globalState/context";
import { reducer } from "../globalState/reducers";
import { InitialState } from "../globalState/initialState";

const Root: FC = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const memo = useMemo(
    () => ({
      state,
      dispatch,
    }),
    []
  );
  return (
    <BrowserRouter>
      <MyContext.Provider value={memo}>
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
