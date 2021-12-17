import React from "react";
import ReactDom from "react-dom";
import MainPage from "./pages/mainPage/index";

const App = () => {
  return <MainPage />;
};

const rootElement = document.getElementById("root");

ReactDom.render(<App />, rootElement);
