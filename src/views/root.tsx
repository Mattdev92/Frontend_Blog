import React, { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import MainPage from "../pages/mainPage/index";
import { client } from "../cms/apollo/client";

const Root: FC = () => (
  <ApolloProvider client={client}>
    <MainPage />
  </ApolloProvider>
);
export default Root;
