import icons from "../assets/genres";

type Sidebar = Array<{ icon: string; href: string; label: string }>;

export const categories: Sidebar = [
  {
    href: "/popular",
    label: "Popular",
    icon: icons.popular,
  },
  {
    href: "/top-rate",
    label: "Top Rated",
    icon: icons["top rated"],
  },
  {
    href: "/upcoming",
    label: "Upcoming",
    icon: icons.upcoming,
  },
];

export const genres: Sidebar = [
  {
    href: "/action",
    label: "Action",
    icon: icons.action,
  },
  {
    href: "/Adventure",
    label: "adventure",
    icon: icons.adventure,
  },
  {
    href: "/animation",
    label: "Animation",
    icon: icons.animation,
  },
  {
    href: "/comedy",
    label: "Comedy",
    icon: icons.comedy,
  },
  {
    href: "/crime",
    label: "Crime",
    icon: icons.crime,
  },
  {
    href: "/documentary",
    label: "Documentary",
    icon: icons.documentary,
  },
  {
    href: "/drama",
    label: "Drama",
    icon: icons.drama,
  },
  {
    href: "/family",
    label: "Family",
    icon: icons.family,
  },
  {
    href: "/fantasy",
    label: "Fantasy",
    icon: icons.fantasy,
  },
  {
    href: "/history",
    label: "History",
    icon: icons.history,
  },
  {
    href: "/horror",
    label: "Horror",
    icon: icons.horror,
  },
  {
    href: "/music",
    label: "Music",
    icon: icons.music,
  },
  {
    href: "/mystery",
    label: "Mystery",
    icon: icons.mystery,
  },
  {
    href: "/romance",
    label: "Romance",
    icon: icons.romance,
  },
  {
    href: "/science-fiction",
    label: "Science Fiction",
    icon: icons["science fiction"],
  },
  {
    href: "/tv-movie",
    label: "Tv Movie",
    icon: icons["tv movie"],
  },
  {
    href: "/thriller",
    label: "Thriller",
    icon: icons.thriller,
  },
  {
    href: "/war",
    label: "War",
    icon: icons.war,
  },
  {
    href: "/western",
    label: "Western",
    icon: icons.western,
  },
];
