import React from "react";
import ReactDOM from "react-dom/client";

import { SmoothScroll } from "@components";

import App from "./App.tsx";

import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </React.StrictMode>
);

