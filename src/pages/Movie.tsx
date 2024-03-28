import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById } from "../services/tmdbApi";
import { configurationQuery } from "../RootLayout";
import { ImagesConfiguration } from "../types";
import Rating from "../components/Rating";
import genresIcon from "../assets/genres";
import { GiSpiderWeb } from "react-icons/gi";
import { MdFavorite, MdLocalMovies, MdMovie } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

const Movie = () => {
  const params = useParams();
  const queryClient = useQueryClient();

  const configuration = queryClient.getQueryData<ImagesConfiguration>(
    configurationQuery().queryKey
  );

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movieById", params.movieId],
    queryFn: () => getMovieById(params.movieId!),
  });

  if (isLoading) {
    return (
      <p className="min-h-screen w-full flex items-center justify-center">
        Loading...
      </p>
    );
  }

  // console.log(movie);

  const secureBaseUrl =
    configuration?.images.secure_base_url ?? "https://image.tmdb.org/t/p/";

  return (
    <>
      <div className="w-full flex justify-between gap-16 mb-24">
        <div className="relative">
          <img
            src={`${secureBaseUrl}/original${movie?.poster_path}`}
            alt={movie?.title}
            width={650}
            className="object-contain rounded-[26px] border light-border shadow-light-200"
          />
        </div>
        <div className="flex flex-col w-full gap-6 ">
          <h1 className="text-dark200_light900 text-5xl flex gap-2 justify-center font-semibold">
            {movie?.title}
            <span>({movie?.release_date.split("-")[0]})</span>
          </h1>
          <h3 className="text-center text-dark400_light700 h3-semibold">
            {movie?.tagline}
          </h3>
          <div>
            <div className="flex items-center justify-center gap-10">
              <div className="flex space-x-4">
                <Rating rating={movie?.vote_average ?? 0} />
                <p className="text-dark200_light900 paragraph-medium">
                  {movie?.vote_average.toFixed(1)}/10
                </p>
              </div>
              <div className="flex space-x-4">
                <p className="text-dark300_light900 base-medium text-green-400">
                  {movie?.runtime}min |
                </p>
                <p className="text-dark200_light900 base-medium">
                  {movie?.spoken_languages[0].english_name}
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center justify-center mt-6 flex-wrap">
              {movie?.genres.map((item) => (
                <div className="flex space-x-2" key={item.id}>
                  <img
                    src={genresIcon[item.name.toLowerCase()]}
                    alt={""}
                    width={27}
                    height={27}
                    className="dark:invert object-contain"
                  />
                  <p className="paragraph-regular text-dark400_light700">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <h2 className="h2-semibold text-dark200_light900">Overview</h2>
          <p className="max-w-2xl paragraph-regular text-dark300_light700 mb-5">
            {movie?.overview}
          </p>
          <h2 className="h2-semibold text-dark200_light900">Top Cast</h2>
          <div className="flex flex-wrap gap-5">
            {movie?.credits.cast.slice(0, 6).map((item) => (
              <div className="flex flex-col space-y-1">
                <img
                  src={`${secureBaseUrl}/w154${item.profile_path}`}
                  alt={item.name}
                  width={154}
                  className="object-contain rounded-md"
                />
                <h4 className="paragraph-semibold text-dark200_light900">
                  {item.name}
                </h4>
                <p className="body-regular text-dark400_light500">
                  {item.character}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div className="border border-blue-400 rounded-md w-fit flex divide-x divide-blue-400">
              <Link
                to={movie?.homepage!}
                target="_blank"
                className="hover:bg-blue-50 hover:rounded-md dark:bg-transparent dark:hover:rounded-none transform px-4 py-2 body-medium text-blue-400 flex space-x-2 items-center"
              >
                <span>Website</span>
                <GiSpiderWeb />
              </Link>
              <Link
                to={`https://www.imdb.com/title/${movie?.imdb_id}`}
                target="_blank"
                className="hover:bg-blue-50 dark:bg-transparent transform px-4 py-2 body-medium text-blue-400 flex space-x-2 items-center"
              >
                <span>IMDB</span>
                <MdMovie />
              </Link>
              <button className="hover:bg-blue-50 hover:rounded-r-md dark:bg-transparent transform px-4 py-2 body-medium text-blue-400 flex space-x-2 items-center">
                <span>Trailer</span>
                <MdLocalMovies />
              </button>
            </div>
            <div>
              <div className="border border-blue-400 rounded-md w-fit flex divide-x divide-blue-400">
                <button className="hover:bg-blue-50 hover:rounded-md dark:bg-transparent dark:hover:rounded-none transform px-4 py-2 body-medium text-blue-400 flex space-x-2 items-center">
                  <span>Favorite</span>
                  <MdFavorite />
                </button>
                <button className="hover:bg-blue-50 dark:bg-transparent transform px-4 py-2 body-medium text-blue-400 flex space-x-2 items-center">
                  <span>Watchlist</span>
                  <FaCartPlus />
                </button>
                <button className="hover:bg-blue-50 hover:rounded-r-md dark:bg-transparent transform px-4 py-2 body-medium text-blue-400 flex space-x-2 items-center">
                  <span>Back</span>
                  <MdLocalMovies />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-dark200_light900 text-4xl text-center mb-10">
        You might also like
      </h2>
      <div>
        <div className="grid grid-cols-5 gap-14 w-full mb-5">
          {movie?.recommendations.results.map((movie) => {
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
      </div>
    </>
  );
};

export default Movie;
