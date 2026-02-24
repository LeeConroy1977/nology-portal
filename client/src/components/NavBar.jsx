import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowWidth } from "../contexts/WindowWidthContext";
import { useUser } from "../contexts/UserContext";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ setIsOpen }) => {
  const width = useWindowWidth();
  const { user } = useUser();
  const { isAdmin } = user;

  const handleHamburgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center h-[4.4rem]  px-[2rem] sm:px-[4rem] lg:px-[7rem] py-0 bg-white">
      <div className="bg-purple-500 h-full px-[1rem] flexCenter">
        <p className="text-white font-semibold text-[1.2rem] ">_nology</p>
      </div>

      {width <= 768 ? (
        <GiHamburgerMenu
          className="size-[1.8rem] text-[#2A2D43]"
          onClick={handleHamburgerClick}
        />
      ) : (
        <ul className="flex gap-12 cursor-pointer font-semibold">
          {isAdmin && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-purple-500" : "text-[#2A2D43]"
                }
                to="/placements">
                View placements
              </NavLink>
            </li>
          )}
          {!isAdmin && (
            <li>
              {" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-purple-500" : "text-[#2A2D43]"
                }
                to="/selections">
                View selections
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-purple-500" : "text-[#2A2D43]"
              }
              to="/consultants">
              Consultants
            </NavLink>
          </li>
          <li>Sign out</li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
