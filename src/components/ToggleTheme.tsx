import React from "react";
import navIcons from "../assets/nav";
import icons from "../assets/genres";

const ToggleTheme = () => {
  return (
    <button>
      {/* <IconToggle /> */}
      <img src={navIcons.sun} alt="action" width={24} height={24} />
    </button>
  );
};

export default ToggleTheme;
