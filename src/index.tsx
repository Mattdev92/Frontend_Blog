import React from "react";
import ReactDom from "react-dom";
import Root from './views/root';

const App = () => {
  return <Root />;
};

const rootElement = document.getElementById("root");

ReactDom.render(<App />, rootElement);
