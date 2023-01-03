import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// BrowserRouter keeps UI in sync with URL
// it will only reload/refresh the component that needs to be changed
// instead of refreshing/reloading the entire page
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);