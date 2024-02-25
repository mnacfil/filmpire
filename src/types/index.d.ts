export type Parent = {
  children: React.ReactNode;
};

export type AuthRequestToken = {
  success: boolean;
  expires_at: string;
  request_token: string;
};

export type AuthSession = {
  success: boolean;
  session_id: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Movies = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
};

export type MovieListGenre = {
  genres: {
    id: number;
    name: string;
  }[];
};

type ImagesConfiguration = {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
};
