import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./globals.css";

import { About, Root } from "@/pages";

import { RootLayout } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RootLayout>
    <RouterProvider router={router} />
  </RootLayout>
);

