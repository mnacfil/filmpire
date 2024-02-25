import axios from "axios";
const token = import.meta.env.VITE_READ_ACCESS_TOKEN;

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// axios.interceptors.request.use(function (config) {
//   // for private page, get the token
//   // config.headers.Accept = "application/json";
//   // config.headers.Authorization = `Bearer ${token}`;
//   // console.log(config);

//   return config;
// });

axios.interceptors.response.use(function (config) {
  console.log(config);

  return config;
});
