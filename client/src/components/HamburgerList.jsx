import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../contexts/WindowWidthContext";
import { useUser } from "../contexts/UserContext";

const HamburgerList = ({ handleClick }) => {
  const { user } = useUser();
  const { isAdmin } = user;
  return (
    <div className="h-screen w-screen bg-white p-8 sm:p-16 absolute ">
      <ul className="flex gap-10 cursor-pointer lex flex-col text-[#2A2D43] text-[1.3rem]  font-semibold">
        {isAdmin && (
          <li onClick={handleClick}>
            <Link to="/placements">View placements</Link>
          </li>
        )}
        {!isAdmin && (
          <li onClick={handleClick}>
            {" "}
            <Link to="/selections">View selections</Link>
          </li>
        )}
        <li onClick={handleClick}>
          <Link to="/consultants">Consultants</Link>
        </li>
        <li onClick={handleClick}>Sign out</li>
      </ul>
    </div>
  );
};

export default HamburgerList;
