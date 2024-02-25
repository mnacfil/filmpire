import React from "react";
import { ImagesConfiguration, Movie, Movies } from "../types";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { configurationQuery } from "../RootLayout";
import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";
import Rating from "./Rating";
import Pagination from "./Pagination";
type Props = {
  data: Movies | undefined;
};

const MovieList = ({ data }: Props) => {
  const queryClient = useQueryClient();
  const configuration = queryClient.getQueryData<ImagesConfiguration>(
    configurationQuery().queryKey
  );
  const secureBaseUrl =
    configuration?.images.secure_base_url ?? "https://image.tmdb.org/t/p/";
  const mainMovie = data?.results[0];

  return (
    <div className="flex flex-col w-full h-full gap-10">
      <Link
        to={`/movie/${mainMovie?.id}`}
        className="block relative opacity-90"
      >
        <img
          src={`${secureBaseUrl}original/${mainMovie?.backdrop_path}`}
          alt="sample"
          className="w-full object-cover h-[500px] rounded-lg border shadow-light-200 dark:shadow-none"
        />
        <div className="text-white absolute left-10 bottom-20">
          <h4>{mainMovie?.title}</h4>
          <p className="max-w-lg">{mainMovie?.overview}</p>
        </div>
      </Link>
      <div className="grid grid-cols-5 gap-14 w-full mb-5">
        {data?.results.slice(1).map((movie) => {
          return (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="flex flex-col justify-between gap-5"
            >
              <img
                src={`${secureBaseUrl}w500/${movie.poster_path}`}
                alt="sample"
                className="w-full h-full object-cover rounded-[26px] hover:scale-105 transition-all"
              />
              <div className="flex flex-col gap-2">
                <p className="text-dark200_light900 text-3xl text-center">
                  {movie.title}
                </p>
                <Rating rating={movie.vote_average} />
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default MovieList;
