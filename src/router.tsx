import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { About, Home } from "./pages";
import { getMovieGenre } from "./services/tmdbApi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: getMovieGenre,
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
