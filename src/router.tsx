import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { About, Home } from "./pages";
import { loader as rootLoader } from "./RootLayout";
import { queryClient } from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader(queryClient),
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
