import React, { useContext, useState } from "react";
import { Movies, Parent } from "../types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovieListByGenre } from "../services/tmdbApi";

type SearchOptions = "category" | "genre";
type MovieValue = {
  searchBy: SearchOptions;
  moviesByGenre: Movies | undefined;
  isLoading: boolean;
  fetchMoviesByGenre: (genre: number) => void;
};

const MovieContext = React.createContext<MovieValue | null>(null);

const movieListGenreQuery = (genre: number) => ({
  queryKey: [`genre-${genre}`],
  queryFn: () => getMovieListByGenre(genre),
  staleTime: 10000,
});

const MovieProvider = ({ children }: Parent) => {
  const [searchBy, setSearchBy] = useState<SearchOptions>("category");
  const [moviesByGenre, setMoviesByGenre] = useState<Movies | undefined>(
    undefined
  );
  const [isLoading, setisLoading] = useState(false);
  const queryClient = useQueryClient();

  const fetchMoviesByGenre = async (genre: number) => {
    setSearchBy("genre");
    setisLoading(true);
    try {
      const data = await queryClient.fetchQuery(movieListGenreQuery(genre));
      setMoviesByGenre(data);
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        searchBy,
        isLoading,
        moviesByGenre,
        fetchMoviesByGenre,
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
