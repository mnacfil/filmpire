import React, { useContext, useState } from "react";
import { Movies, Parent } from "../types";
import {
  UseQueryResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getMovieListByCategory,
  getMovieListByGenre,
} from "../services/tmdbApi";

export type Category = "popular" | "top_rated" | "upcoming" | null;
type MovieValue = {
  moviesGenreQuery: UseQueryResult<Movies, Error>;
  moviesCategoryQuery: UseQueryResult<Movies, Error>;
  genre: number;
  category: Category;
  setGenre: (genre: number) => void;
  setCategory: (category: Category) => void;
};

const MovieContext = React.createContext<MovieValue | null>(null);

const movieListGenreQuery = (genre: number) => ({
  queryKey: ["discover-movie", genre],
  queryFn: () => getMovieListByGenre(genre),
  staleTime: 10000,
});

const movieListByCategory = (category: Category) => ({
  queryKey: ["category-move", category],
  queryFn: () => getMovieListByCategory(category),
});

const MovieProvider = ({ children }: Parent) => {
  const [category, setCategory] = useState<Category>("popular");
  const [genre, setGenre] = useState(0);

  const moviesGenreQuery = useQuery(movieListGenreQuery(genre));
  const moviesCategoryQuery = useQuery(movieListByCategory(category));

  return (
    <MovieContext.Provider
      value={{
        genre,
        category,
        moviesGenreQuery,
        moviesCategoryQuery,
        setGenre,
        setCategory,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

const useMovieCategory = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("Movie Context must be used within the app.");
  }
  return context;
};

export { useMovieCategory, MovieProvider };
