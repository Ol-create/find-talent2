import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);