import React from "react";
import ToggleTheme from "./ToggleTheme";
import navIcons from "../assets/nav";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const handleSubmit = () => {};
  return (
    <nav className="py-6 px-6 sm:px-12 flex justify-between items-center w-full ">
      <ToggleTheme />
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 border-b-2 border-b-slate-400">
          <CiLight />
          <input
            type="text"
            className="bg-transparent outline-none border-none mb-1"
          />
        </div>
      </form>
      <button className="flex gap-2 items-center">
        <p className="text-dark200_light800">Login</p>
        <img src={navIcons.user} alt="user avatar" width={24} height={24} />
      </button>
    </nav>
  );
};

export default Navbar;
