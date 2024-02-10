import React from "react";
import navIcons from "../assets/nav";
import { useTheme } from "../context/ThemeContext";
import { CiLight, CiDark } from "react-icons/ci";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {/* <IconToggle /> */}
      {theme === "dark" ? <CiLight className="w-[27px]" /> : <CiDark />}
    </button>
  );
};

export default ToggleTheme;
