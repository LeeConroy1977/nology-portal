import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowWidth } from "../contexts/WindowWidthContext";
import { useUser } from "../contexts/UserContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavBar = ({ setIsOpen }) => {
  const width = useWindowWidth();
  const { user, setUser, isFormData } = useUser();

  const navigate = useNavigate();

  const handleHamburgerClick = () => {
    setIsOpen((prev) => !prev);
    v;
  };

  const handleSignOut = () => {
    setUser(null);
    navigate("/sign-in");
  };
  console.log(isFormData);
  return (
    <nav className="flex justify-between items-center h-[4.4rem]  px-[2rem] sm:px-[4rem] lg:px-[7rem] xl:h-[4.8rem] 2xl:h-[5rem] py-0 bg-white">
      <div className="bg-purple-500 h-full px-[1rem] flexCenter">
        <p className="text-white font-semibold text-[1.2rem] ">_nology</p>
      </div>
      {user &&
        isFormData &&
        (width <= 768 ? (
          <GiHamburgerMenu
            className="size-[1.8rem] text-[#2A2D43]"
            onClick={handleHamburgerClick}
          />
        ) : (
          <ul className="flex gap-12 xl:gap-16 cursor-pointer font-semibold xl:text-[1.1rem] 2xl:text-[1.2rem] ">
            {user && user.isAdmin && (
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

            {user && !user.isAdmin && isFormData && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-purple-500" : "text-[#2A2D43]"
                    }
                    to="/selections">
                    View selections
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-purple-500" : "text-[#2A2D43]"
                    }
                    to="/consultants">
                    Consultants
                  </NavLink>
                </li>
              </>
            )}

            <li onClick={handleSignOut}>Sign out</li>
          </ul>
        ))}
    </nav>
  );
};

export default NavBar;
