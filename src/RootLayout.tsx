import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  getConfiguration,
  getMovieGenre,
  getMovieListByGenre,
} from "./services/tmdbApi";
import {
  QueryClient,
  queryOptions,
  useQueries,
  useQueryClient,
} from "@tanstack/react-query";
import { MovieListGenre, Movies } from "./types";

export const configurationQuery = () => ({
  queryKey: ["configuration"],
  queryFn: getConfiguration,
  staleTime: 1000 * 60 * 60,
});

export const genreQuery = () => ({
  queryKey: ["movie_genre"],
  queryFn: getMovieGenre,
  staleTime: 10000,
});

export const loader = (queryClient: QueryClient) => async () => {
  if (!queryClient.getQueryData<MovieListGenre>(genreQuery().queryKey)) {
    return await queryClient.fetchQuery(genreQuery());
  }
};

// const genreOptions = (genre: number) => {
//   return queryOptions({
//     queryKey: ["genre", genre],
//     queryFn: () => getMovieListByGenre(genre),
//     staleTime: 1000 * 5,
//   });
// };

const RootLayout = () => {
  const queryClient = useQueryClient();
  if (!queryClient.getQueryData(configurationQuery().queryKey)) {
    queryClient.fetchQuery(configurationQuery());
  }

  return (
    <main className="min-h-screen w-full relative">
      <div className="w-full pl-64 fixed top-0 left-0 z-10 background-light900_dark300 light-border border shadow-light-200 dark:shadow-none">
        <Navbar />
      </div>
      <div className="flex">
        <div className="min-w-[240px] z-20 fixed left-0 top-0">
          <Sidebar />
        </div>
        <section className="flex flex-1 w-full flex-col min-h-svh pt-28 !pl-72 px-6 sm:px-12 background-light900_dark200">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
