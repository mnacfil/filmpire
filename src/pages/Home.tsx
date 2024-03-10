import React, { useEffect } from "react";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import MovieList from "../components/MovieList";
import { Movies } from "../types";
import { getMovieListByCategory } from "../services/tmdbApi";
import { Category, useMovieCategory } from "../context/MovieContext";

export const popularMoviesQuery = (category: Category) => ({
  queryKey: ["popular_movie"],
  queryFn: () => getMovieListByCategory(category, 1),
  staleTime: 10000,
});

export const loader = (queryClient: QueryClient) => async () => {
  return await queryClient.ensureQueryData<Movies>(
    popularMoviesQuery("popular")
  );
};

const Home = () => {
  const data = useLoaderData() as Movies;
  const { genre, moviesGenreQuery, category, moviesCategoryQuery } =
    useMovieCategory();

  if (moviesGenreQuery.isLoading || moviesCategoryQuery.isLoading) {
    return (
      <p className="min-h-screen w-full flex items-center justify-center text-4xl text-dark200_light900">
        Loading...
      </p>
    );
  }
  if (moviesGenreQuery.error || moviesCategoryQuery.error) {
    return <p className="pl-80">Error happen</p>;
  }

  if (genre !== 0) {
    return <MovieList data={moviesGenreQuery.data} />;
  }

  if (category !== null) {
    return <MovieList data={moviesCategoryQuery.data} />;
  }

  // display by default
  return <MovieList data={data} />;
};

export default Home;
