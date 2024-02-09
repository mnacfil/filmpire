import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { About, Home } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/popular",
        element: <About />,
      },
    ],
  },
]);
