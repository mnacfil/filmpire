import React from "react";
import { categories, genres } from "../constants/sidebarLinks";
import { NavLink, Link } from "react-router-dom";
NavLink;

const Sidebar = () => {
  return (
    <div className="pt-8 pb-14 overflow-y-auto flex flex-col divide-y-[1px] divide-slate-400-300 h-screen custom-scrollbar">
      <div className="flex items-center justify-center">
        <img
          src="https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png"
          alt="logo"
          width={160}
          className="object-contain"
        />
      </div>
      <div className="py-5">
        <h2 className="font-semibold text-slate-500 px-6 mb-5 text-sm">
          Categories
        </h2>
        <ul className="flex flex-col gap-3 px-6">
          {categories.map((category) => {
            return (
              <li key={category.href}>
                <NavLink to={category.href} className={`flex gap-4`}>
                  <img
                    src={category.icon}
                    alt={category.label}
                    width={30}
                    height={30}
                  />
                  {category.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="py-4">
        <h3 className="font-semibold text-slate-500 px-6 mb-5 text-sm">
          Genres
        </h3>
        <ul className="flex flex-col gap-3 px-6">
          {genres.map((genre) => {
            return (
              <li key={genre.href}>
                <NavLink to={genre.href} className={`flex gap-3`}>
                  <img
                    src={genre.icon}
                    alt={genre.label}
                    width={30}
                    height={30}
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
