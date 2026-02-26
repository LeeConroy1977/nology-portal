import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWindowWidth } from "../contexts/WindowWidthContext";
import { useUser } from "../contexts/UserContext";

const HamburgerList = ({ handleClick }) => {
  const { user, setUser, isFormData } = useUser();

  const navigate = useNavigate();

  const handleSignOut = () => {
    setUser(null);
    handleClick();
    navigate("/sign-in");
  };

  return (
    <div className="h-screen w-screen bg-white p-8 sm:p-16 absolute z-10 ">
      <ul className="flex gap-10 cursor-pointer lex flex-col text-[#2A2D43] text-[1.3rem]  font-semibold">
        {user && user.isAdmin && (
          <>
            <li onClick={handleClick}>
              <Link to="/placements">View placements</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/consultants">Consultants</Link>
            </li>
          </>
        )}
        {user && !user.isAdmin && isFormData && (
          <>
            <li onClick={handleClick}>
              {" "}
              <Link to="/selections">View selections</Link>
            </li>

            <li onClick={handleClick}>
              <Link to="/consultants">Consultants</Link>
            </li>
          </>
        )}
        <li onClick={handleSignOut}>Sign out</li>
      </ul>
    </div>
  );
};

export default HamburgerList;
