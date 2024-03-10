import React, { useContext, useEffect, useState } from "react";
import { Movies, Parent } from "../types";
import {
  UseQueryResult,
  useQuery,
  keepPreviousData,
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
  page: number;
  categoryPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setGenre: (genre: number) => void;
  setCategory: (category: Category) => void;
  setCategoryPage: React.Dispatch<React.SetStateAction<number>>;
};

const MovieContext = React.createContext<MovieValue | null>(null);

const movieListGenreQuery = (genre: number, page: number) => ({
  queryKey: ["discover-movie", genre, page],
  queryFn: () => getMovieListByGenre(genre, page),
  staleTime: 5000,
  placeholderData: keepPreviousData,
});

const movieListCategoryQuery = (category: Category, page: number) => ({
  queryKey: ["category-movie", category, page],
  queryFn: () => getMovieListByCategory(category, page),
  staleTime: 5000,
  placeholderData: keepPreviousData,
});

const MovieProvider = ({ children }: Parent) => {
  const queryClient = useQueryClient();
  const [category, setCategory] = useState<Category>("popular");
  const [genre, setGenre] = useState(0);
  const [page, setPage] = useState(1);
  const [categoryPage, setCategoryPage] = useState(1);

  const moviesGenreQuery = useQuery(movieListGenreQuery(genre, page));
  const moviesCategoryQuery = useQuery(
    movieListCategoryQuery(category, categoryPage)
  );

  // prefetch the next page
  useEffect(() => {
    if (!moviesGenreQuery.isPlaceholderData) {
      queryClient.prefetchQuery({
        queryKey: ["discover-movie", genre, page + 1],
        queryFn: () => getMovieListByGenre(genre, page + 1),
      });
    }
  }, [
    moviesGenreQuery.data,
    moviesGenreQuery.isPlaceholderData,
    genre,
    page,
    queryClient,
  ]);

  // prefetch the next page for category
  useEffect(() => {
    if (!moviesCategoryQuery.isPlaceholderData) {
      queryClient.prefetchQuery({
        queryKey: ["category-movie", category, categoryPage + 1],
        queryFn: () => getMovieListByCategory(category, categoryPage + 1),
      });
    }
  }, [
    moviesCategoryQuery.data,
    moviesCategoryQuery.isPlaceholderData,
    category,
    categoryPage,
    queryClient,
  ]);

  return (
    <MovieContext.Provider
      value={{
        page,
        genre,
        category,
        categoryPage,
        moviesGenreQuery,
        moviesCategoryQuery,
        setPage,
        setGenre,
        setCategory,
        setCategoryPage,
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
