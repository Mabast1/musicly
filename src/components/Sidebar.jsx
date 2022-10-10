import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { FiHeadphones } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";

import Navlinks from "./Navlinks";

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isPlaying } = useSelector((state) => state.player);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <Link to="/">
          <div className="flex gap-1 justify-center items-center">
            <FiHeadphones
              className={`text-purple-500 ${isPlaying && "animate-spin"}`}
              size={22}
            />
            <p className="text-white font-semibold text-xl animate-slowfade">
              Musicly
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-[9px] tracking-widest ">
              mabastahmad.com
            </p>
          </div>
        </Link>

        <div className="flex flex-col justify-between gap-10">
          <Navlinks />
          <div className="border-b border-gray-500 my-4" />
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-md text-white font-bold">Todays Top Clip</p>
            <iframe
              width="200"
              height="300"
              src="https://www.youtube.com/embed/z1Da5CgyGoI?rel=0&modestbranding=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
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
        <Navlinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
