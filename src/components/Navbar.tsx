import React, { useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import navIcons from "../assets/nav";
import { CiLight } from "react-icons/ci";
import { getRequestToken, createSessionId } from "../services/tmdbApi";

const Navbar = () => {
  const handleSubmit = () => {};
  const handleLogin = async () => {
    await getRequestToken();
  };

  const token = localStorage.getItem("request_token");
  const sessionIdFromLS = localStorage.getItem("session_id");

  useEffect(() => {
    const fetchUserSession = async () => {
      if (token) {
        if (sessionIdFromLS) {
          // fetch the user data
          // console.log("user data");
        } else {
          const sessionId = await createSessionId();
          // console.log("fetch with user data");
        }
      }
    };
    fetchUserSession();
  }, [token]);

  return (
    <nav className="py-6 px-6 sm:px-12 flex justify-between items-center w-full ">
      <ToggleTheme />
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 border-b-2 border-b-slate-400">
          <img
            src={navIcons.search}
            alt="search"
            width={20}
            className="dark:invert object-contain"
          />
          <input
            type="text"
            className="bg-transparent outline-none border-none mb-1"
          />
        </div>
      </form>
      <button className="flex gap-2 items-center" onClick={handleLogin}>
        <p className="text-dark200_light800 uppercase font-semibold tracking-wide">
          {sessionIdFromLS ? "User" : "Login"}
        </p>
        <img
          src={navIcons.user}
          alt="user avatar"
          width={27}
          height={27}
          className="dark:invert object-contain"
        />
      </button>
    </nav>
  );
};

export default Navbar;
