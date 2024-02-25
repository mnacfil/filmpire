// TMDB Api
import {
  AuthRequestToken,
  AuthSession,
  ImagesConfiguration,
  MovieListGenre,
  Movies,
} from "../types";
import { axiosInstance } from "./axios";

const authenticateUrl = "https://www.themoviedb.org/authenticate";

export const getMovieGenre = async () => {
  try {
    const response =
      await axiosInstance.get<MovieListGenre>("/genre/movie/list");
    return response.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const getMovieListByGenre = async (genre: number) => {
  try {
    // page must be dynamic as it is used in pagination
    const response = await axiosInstance.get<Movies>(
      `/discover/movie?without_genres=${genre}&page=1`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axiosInstance.get("/movie/popular");
    return response.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const getRequestToken = async () => {
  try {
    const response = await axiosInstance.get<AuthRequestToken>(
      "/authentication/token/new"
    );
    if (response.data.success) {
      localStorage.setItem("request_token", response.data.request_token);
      window.location.href = `${authenticateUrl}/${response.data.request_token}?redirect_to=${window.location.origin}`;
    }
  } catch (error) {
    console.log("Sorry your token could not be created.");
    return Promise.reject(error);
  }
};

export const createSessionId = async () => {
  const token = localStorage.getItem("request_token");
  if (token) {
    try {
      const { data } = await axiosInstance.post<AuthSession>(
        "/authentication/session/new",
        {
          request_token: token,
        }
      );
      if (data.success) {
        localStorage.setItem("session_id", data.session_id);
        return data.session_id;
      }
    } catch (error) {
      console.log("Sorry your session could not be created.");
      return Promise.reject(error);
    }
  }
};

export const getConfiguration = async () => {
  try {
    const response =
      await axiosInstance.get<ImagesConfiguration>("/configuration");
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
