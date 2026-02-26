import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useConsultant } from "../contexts/ConsultantContext";
import ProjectCard from "../components/ProjectCard";
import { useWindowWidth } from "../contexts/WindowWidthContext";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useConsultants } from "../contexts/ConsultantsContext";

const Consultant = () => {
  const { id } = useParams();
  const width = useWindowWidth();
  const { consultant, fetchConsultantById } = useConsultant();
  const { selectedConsultants, handleSelectedConsultants } = useConsultants();

  const {
    name,
    location,
    email,
    githubLink,
    imageUrl,
    bio,
    review,
    techStack,
    phoneNumber,
    projects,
  } = consultant;
  const navigate = useNavigate();

  useEffect(() => {
    fetchConsultantById(id);
  }, [id]);

  const isSelected = selectedConsultants.find((c) => c.id === Number(id));

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-full bg-white pb-12 sm:p-8 xl:p-16 xl:py-10">
      {consultant && (
        <>
          <div
            onClick={() => navigate(-1)}
            className="text-purple-500 text-[1.2rem] sm:text-[1.3rem] xl:text-[1.5rem] font-semibold mr-auto pl-8 md:pl-20 xl:pl-24 2xl:pl-32 mt-4 xl:mt-0 flex items-center justify-center cursor-pointer">
            <FaLongArrowAltLeft className="mr-2 text-[1.6rem] sm:text-[2rem] xl:text-[2.8rem]" />{" "}
            back
          </div>
          <div className="flex flex-col items-center justify-start mt-7 sm:mt-8 ">
            <div className="md:flex flex-row xl:px-16">
              <div className="flex flex-col items-center justify-start md:w-[40%] md:mt-8 ">
                <img
                  src={imageUrl}
                  alt=""
                  className="rounded-full w-[65%] sm:w-[50%] lg:w-[50%] xl:w-[48%] border-[6px] border-purple-500"
                />
                <p className="mt-6 font-bold text-[1.6rem] text-[#2A2D43]">
                  {name}
                </p>
                <p className="mt-1 font-semibold text-[1.2rem] text-[#2A2D43]">
                  {phoneNumber}
                </p>
                <p className="mt-1 font-semibold text-[1.2rem] text-[#2A2D43]">
                  {email}
                </p>
              </div>
              <div className="flex flex-col-reverse md:flex-col items-center lg:justify-start w-full md:w-[60%] mt-8 p-8 md:mt-0 lg:p-0 lg:px-20">
                <p className="mt-6 font-medium lg:font-bold text-[#2A2D43] text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem] 2xl:text-[2rem] md:mt-8 lg:mt-8">
                  {bio}
                </p>
                {width <= 768 && (
                  <h2 className="font-bold text-[1.4rem]   mr-auto mt-12 text-purple-500 ">
                    Bio
                  </h2>
                )}
                {isSelected ? (
                  <button
                    // onClick={() => handleSelectedConsultants(id)}
                    className="text-[1.2rem] xl:text-[1.4rem] w-[75%] sm:w-[50%] h-[70px] border-2 border-purple-500 bg-white  text-purple-500 font-bold rounded-lg md:ml-auto mt-8 md:mt-20 xl:mt-24 md:mr-12">
                    Selected
                  </button>
                ) : (
                  <button
                    onClick={() => handleSelectedConsultants(id)}
                    className="text-[1.2rem] xl:text-[1.4rem] w-[75%] sm:w-[50%] h-[70px] bg-purple-500 text-white font-bold rounded-lg md:ml-auto mt-8 md:mt-20 xl:mt-24 md:mr-12">
                    Select Consultant
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full p-8 md:px-20 xl:px-24 2xl:px-28  md:mt-8 lg:mt-8 xl:mt-16">
            <h2 className="font-bold text-[1.4rem] xl:text-[1.8rem]  text-purple-500 mr-auto  ">
              Projects
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:flex-wrap    gap-4 sm:gap-10">
              {projects &&
                projects.map((project) => {
                  return <ProjectCard project={project} key={project.id} />;
                })}
            </div>
          </div>
          <div className="flex flex-col items-center w-full p-8 md:px-20 lg:mt-12 xl:px-20 ">
            <h2 className="font-bold text-[1.4rem]  xl:text-[1.8rem]  text-purple-500 mr-auto  ">
              Technologies
            </h2>
            <p className="mt-6 font-medium text-[#2A2D43] text-[1.2rem] xl:text-[1.4rem]  mr-auto ">
              {techStack}
            </p>
          </div>
          <div className="flex flex-col items-center w-full px-8 md:px-20  py-4 xl:px-20 ">
            <h2 className="font-bold text-[1.4rem] xl:text-[1.8rem]  text-purple-500 mr-auto  ">
              Review
            </h2>
            <p className=" font-medium text-[#2A2D43] text-[1.2rem] xl:text-[1.4rem] mt-4">
              {review}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Consultant;
