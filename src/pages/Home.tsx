import React, { useEffect } from "react";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import MovieList from "../components/MovieList";
import { Movies } from "../types";
import { getPopularMovies } from "../services/tmdbApi";
import { useMovieCategory } from "../context/MovieContext";

export const popularMoviesQuery = () => ({
  queryKey: ["popular_movie"],
  queryFn: getPopularMovies,
  staleTime: 10000,
});

export const loader = (queryClient: QueryClient) => async () => {
  return await queryClient.ensureQueryData<Movies>(popularMoviesQuery());
};

const Home = () => {
  const data = useLoaderData() as Movies;
  const { moviesByGenre, searchBy } = useMovieCategory();

  console.log(moviesByGenre);

  if (searchBy === "genre") {
    return <MovieList data={moviesByGenre} />;
  }

  return <MovieList data={data} />;
};

export default Home;
