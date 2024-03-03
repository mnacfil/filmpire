import icons from "../assets/genres";

type Sidebar = Array<{ icon: string; value: string; label: string }>;

export const categories: Sidebar = [
  {
    value: "popular",
    label: "Popular",
    icon: icons.popular,
  },
  {
    value: "top_rated",
    label: "Top Rated",
    icon: icons["top rated"],
  },
  {
    value: "upcoming",
    label: "Upcoming",
    icon: icons.upcoming,
  },
];

export const genres: Sidebar = [
  {
    value: "/action",
    label: "Action",
    icon: icons.action,
  },
  {
    value: "/Adventure",
    label: "adventure",
    icon: icons.adventure,
  },
  {
    value: "/animation",
    label: "Animation",
    icon: icons.animation,
  },
  {
    value: "/comedy",
    label: "Comedy",
    icon: icons.comedy,
  },
  {
    value: "/crime",
    label: "Crime",
    icon: icons.crime,
  },
  {
    value: "/documentary",
    label: "Documentary",
    icon: icons.documentary,
  },
  {
    value: "/drama",
    label: "Drama",
    icon: icons.drama,
  },
  {
    value: "/family",
    label: "Family",
    icon: icons.family,
  },
  {
    value: "/fantasy",
    label: "Fantasy",
    icon: icons.fantasy,
  },
  {
    value: "/history",
    label: "History",
    icon: icons.history,
  },
  {
    value: "/horror",
    label: "Horror",
    icon: icons.horror,
  },
  {
    value: "/music",
    label: "Music",
    icon: icons.music,
  },
  {
    value: "/mystery",
    label: "Mystery",
    icon: icons.mystery,
  },
  {
    value: "/romance",
    label: "Romance",
    icon: icons.romance,
  },
  {
    value: "/science-fiction",
    label: "Science Fiction",
    icon: icons["science fiction"],
  },
  {
    value: "/tv-movie",
    label: "Tv Movie",
    icon: icons["tv movie"],
  },
  {
    value: "/thriller",
    label: "Thriller",
    icon: icons.thriller,
  },
  {
    value: "/war",
    label: "War",
    icon: icons.war,
  },
  {
    value: "/western",
    label: "Western",
    icon: icons.western,
  },
];
