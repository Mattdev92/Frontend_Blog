import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return <div>Hello World</div>;
};

const rootElement = document.getElementById("root");

ReactDom.render(<App />, rootElement);
