// TMDB Api
const base_url = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_READ_ACCESS_TOKEN;

export const getMovieGenre = async () => {
  const response = await fetch(`${base_url}/genre/movie/list`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};
