import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { FiHeadphones } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";

import Navlinks from "./Navlinks";

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <Link to="/">
          <div className="flex gap-1 justify-center items-center">
            <FiHeadphones className="text-white" size={22} />
            <p className="text-white font-semibold text-xl">Musicly</p>
          </div>
          <Navlinks />
        </Link>
      </div>

      {/* Mobile Sidebar */}
      <div className=" absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 tp-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex gap-1 justify-center items-center mt-10">
          <FiHeadphones className="text-white" size={22} />
          <p className="text-white font-semibold text-lg">Musicly</p>
        </div>
        <NavLink handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
