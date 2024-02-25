import React from "react";
import { ThemeProvider, MovieProvider } from "./context";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { About, Home, Approved, Movie } from "./pages";
import { loader as rootLoader } from "./RootLayout";
import { loader as homeLoader } from "./pages/Home";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader(queryClient),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader(queryClient),
      },
      {
        path: "/popular",
        element: <About />,
      },
      {
        path: "/movie/:movieId",
        element: <Movie />,
      },
    ],
  },
  {
    path: "/approved",
    element: <Approved />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </MovieProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
