import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../node_modules/sweetalert2/dist/sweetalert2.all.min";
import "../node_modules/sweetalert2/dist/sweetalert2.min.css";
import "./index.css";
import "animate.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
