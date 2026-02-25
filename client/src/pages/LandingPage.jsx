import React from "react";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/sign-in");
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-start items-center pt-32 font-bold  text-[#2A2D43]">
      <p className=" text-[2.6rem] xl:text-[3rem]">Nology</p>
      <p className=" text-[3rem] mt-4 xl:text-[3.6rem] text-purple-500">
        Placement
      </p>
      <p className="text-[2.6rem] xl:text-[3rem] mt-4">Portal</p>
      <button
        onClick={handleNavigation}
        className="mt-40 py-4 px-24 border-purple-500 border-2 rounded-lg text-[1.2rem] text-purple-500">
        Enter
      </button>
    </div>
  );
};

export default LandingPage;
