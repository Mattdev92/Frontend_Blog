import React, { FC, useReducer } from "react";
import { ApolloProvider } from "@apollo/client";
import MainPage from "../pages/mainPage/index";
import { client } from "../cms/apollo/client";
import { MyContext } from "../globalState/context";
import { reducer } from "../globalState/reducers";
import { InitialState } from "../globalState/initialState";

const Root: FC = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <ApolloProvider client={client}>
        <MainPage />
      </ApolloProvider>
    </MyContext.Provider>
  );
};

export default Root;
