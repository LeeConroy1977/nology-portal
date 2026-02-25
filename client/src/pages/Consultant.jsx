import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useConsultant } from "../contexts/ConsultantContext";
import ProjectCard from "../components/ProjectCard";
import { useWindowWidth } from "../contexts/WindowWidthContext";

const Consultant = () => {
  const { id } = useParams();
  const width = useWindowWidth();
  const { consultant, fetchConsultantById } = useConsultant();

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

  useEffect(() => {
    fetchConsultantById(id);
  }, []);

  console.log(consultant);

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-full bg-white pb-12 sm:p-8 xl:p-16">
      {consultant && (
        <>
          <div className="flex flex-col items-center justify-start mt-12 sm:mt-8 ">
            <div className="lg:flex flex-row">
              <div className="flex flex-col items-center justify-start lg:w-[40%] lg:mt-8 ">
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
              <div className="flex flex-col-reverse md:flex-col items-center lg:justify-start w-full lg:w-[60%] mt-8 p-8 lg:mt-0 lg:p-0 lg:px-20">
                <p className="mt-6 font-medium lg:font-bold text-[#2A2D43] text-[1.2rem] lg:text-[1.8rem] md:mt-16 lg:mt-8">
                  {bio}
                </p>
                {width <= 768 && (
                  <h2 className="font-bold text-[1.4rem]   mr-auto mt-12 text-purple-500 ">
                    Bio
                  </h2>
                )}

                <button className="text-[1.2rem] w-[75%] sm:w-[50%] h-[70px] bg-purple-500 text-white font-semibold rounded-lg lg:ml-auto mt-8 lg:mt-20 xl:mt-24 xl:mr-12">
                  Select Consultant
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full p-8">
            <h2 className="font-bold text-[1.4rem] text-purple-500 mr-auto  ">
              Projects
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:flex-wrap    gap-4 sm:gap-10">
              {projects &&
                projects.map((project) => {
                  return <ProjectCard project={project} key={project.id} />;
                })}
            </div>
          </div>
          <div className="flex flex-col items-center w-full p-8">
            <h2 className="font-bold text-[1.4rem] text-purple-500 mr-auto  ">
              Technologies
            </h2>
            <p className="mt-6 font-medium text-[#2A2D43] text-[1.2rem] mr-auto ">
              {techStack}
            </p>
          </div>
          <div className="flex flex-col items-center w-full px-8 py-4">
            <h2 className="font-bold text-[1.4rem] text-purple-500 mr-auto  ">
              Review
            </h2>
            <p className=" font-medium text-[#2A2D43] text-[1.2rem] mt-4">
              {review}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Consultant;
