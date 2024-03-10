import React from "react";
import navIcons from "../assets/nav";
import { useTheme } from "../context/ThemeContext";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      <img
        src={navIcons.sun}
        width={27}
        height={27}
        alt="sun"
        className="dark:invert object-contain"
      />
    </button>
  );
};

export default ToggleTheme;
