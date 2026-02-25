import React, { useEffect } from "react";
import VisitorCard from "../components/VisitorCard";
import { visitorData } from "../utils/data/visitors";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const SignIn = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleClick = (id) => {
    const visitor = visitorData.find((v) => v.id === id);

    if (!visitor) return;

    setUser(visitor);

    if (visitor.isAdmin) {
      navigate("/consultants");
    } else {
      navigate("/welcome");
    }
  };
  console.log(user);
  return (
    <div className="w-screen h-screen bg-[#F2F2F2] flex flex-col items-center p-8 lg:px-24 xl:px-32 2xl:px-40">
      <h1 className=" font-bold text-[1.6rem] xl:text-[1.8rem] text-[#2A2D43] mt-0 mr-auto ml-4 sm:ml-16 md:ml-24 xl:ml-60 2xl:ml-80">
        Sign in as...
      </h1>
      <div
        onClick={() => handleClick(visitorData[0].id)}
        className="flexCenter w-[90%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[32%] h-[30%] bg-white border-4 border-purple-500 mt-10 sm:mt-16 rounded-lg p-6 sm:p-12 cursor-pointer">
        <CgProfile className="text-[6rem] sm:text-[8rem] md:text-[7rem] mr-auto text-gray-800" />
        <p className="my-6 font-bold text-[1.8rem] sm:text-[2.2rem] md:text-[2rem] text-purple-500 mr-8">
          User
        </p>
      </div>
      <div
        onClick={() => handleClick(visitorData[1].id)}
        className="flexCenter w-[90%] h-[30%] sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[32%]  bg-white border-4 border-purple-500 mt-12 sm:mt-16 rounded-lg p-6 sm:p-12 cursor-pointer">
        <CgProfile className="text-[6rem] sm:text-[8rem] md:text-[7rem] mr-auto text-gray-800" />
        <p className="my-6 font-bold text-[1.8rem] sm:text-[2.2rem] md:text-[2rem] text-purple-500 mr-8">
          Admin
        </p>
      </div>
    </div>
  );
};

export default SignIn;
