import React from "react";
import ReactDom from "react-dom";
import Root from "./root";
import { worker } from "./mocks/browsers";

worker.start();
ReactDom.render(<Root />, document.getElementById("root"));
