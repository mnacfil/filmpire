import React from "react";
import { categories, genres } from "../constants/sidebarLinks";
import { NavLink, useLoaderData } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Sidebar = () => {
  const result = useLoaderData();
  const queryClient = useQueryClient();

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
              <li key={category.href}>
                <NavLink
                  to={category.href}
                  className={`flex gap-3 base-medium text-dark200_light900`}
                >
                  <img
                    src={category.icon}
                    alt={category.label}
                    width={27}
                    height={27}
                    className="object-contain"
                  />
                  {category.label}
                </NavLink>
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
          {genres.map((genre) => {
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
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
