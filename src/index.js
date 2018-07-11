import React from "react";
import ReactDOM from "react-dom";

import "@progress/kendo-theme-default/dist/all.css";
import "antd/dist/antd.css";
import "./index.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
