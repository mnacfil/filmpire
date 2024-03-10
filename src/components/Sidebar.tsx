import React from "react";
import { categories, genres } from "../constants/sidebarLinks";
import { NavLink, useLoaderData } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { MovieListGenre } from "../types";
import { getMovieListByGenre } from "../services/tmdbApi";
import { Category, useMovieCategory } from "../context/MovieContext.tsx";

const movieListGenreQuery = (genre: number) => ({
  queryKey: ["genre", genre],
  queryFn: () => getMovieListByGenre(genre, 1),
  staleTime: 10 * 1000,
});

const Sidebar = () => {
  const {
    setGenre,
    setCategory,
    setPage,
    page,
    setCategoryPage,
    categoryPage,
  } = useMovieCategory();
  const data = useLoaderData() as MovieListGenre;
  const queryClient = useQueryClient();

  const handleMouseEnter = async (genre: number) => {
    await queryClient.prefetchQuery(movieListGenreQuery(genre));
  };

  const handleGenreMovies = (genre: number) => {
    if (page !== 1) {
      setPage(1);
    }
    setGenre(genre);
    setCategory(null);
  };

  const handleCategoryMovies = (category: Category) => {
    if (categoryPage !== 1) {
      setCategoryPage(1);
    }
    setCategory(category);
    setGenre(0);
  };

  return (
    <div className="pt-8 pb-14 overflow-y-auto flex flex-col divide-y-[1px] divide-light-700 dark:divide-dark-400 h-screen custom-scrollbar background-light900_dark300">
      <div className="flex items-center justify-center">
        <img
          src="https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png"
          alt="logo"
          width={160}
          className="object-contain invert-colors mb-5"
        />
      </div>
      <div className="py-5">
        <p className="px-6 mb-5 paragraph-regular text-dark500_light700">
          Categories
        </p>
        <ul className="flex flex-col gap-3 px-6">
          {categories.map((category) => {
            return (
              <li
                key={category.value}
                onClick={() => handleCategoryMovies(category.value as Category)}
                className={`flex gap-3 base-medium text-dark200_light900 cursor-pointer`}
              >
                <img
                  src={category.icon}
                  alt={category.label}
                  width={27}
                  height={27}
                  className="invert-colors"
                />
                <p>{category.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="py-4">
        <p className="px-6 mb-5 paragraph-regular text-dark500_light700">
          Genres
        </p>
        <ul className="flex flex-col gap-3 px-6">
          {data.genres.map((genre) => (
            <li key={genre.id}>
              <button
                className={`flex gap-3 base-medium text-dark200_light900 w-full`}
                onClick={() => handleGenreMovies(genre.id)}
                onMouseEnter={() => handleMouseEnter(genre.id)}
              >
                <img src={""} alt={""} width={27} height={27} />
                {genre.name}
              </button>
            </li>
          ))}
          {/* {genres.map((genre) => {
            return (
              <li key={genre.href}>
                <NavLink
                  to={genre.href}
                  className={`flex gap-3 base-medium text-dark200_light900`}
                >
                  <img
                    src={genre.icon}
                    alt={genre.label}
                    width={27}
                    height={27}
                  />
                  {genre.label}
                </NavLink>
              </li>
            );
          })} */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
