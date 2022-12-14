import React from "react";
import { NavLink } from "react-router-dom";

import { links } from "../assets/constants";

const Navlinks = ({ handleClick }) => {
  return (
    <div className="mt-5">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className="flex flex-row justify-start items-center my-5 text-sm font-medium text-gray-300 hover:text-white"
          onClick={() => handleClick && handleClick()}
        >
          <link.icon className="w-6 h-6 mr-2" />
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navlinks;
