import React from "react";
import { Toaster } from "react-hot-toast";

import { SmoothScroll } from "./smooth-scroll";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <React.StrictMode>
    <SmoothScroll>
      <Toaster />
      {children}
    </SmoothScroll>
  </React.StrictMode>
);

