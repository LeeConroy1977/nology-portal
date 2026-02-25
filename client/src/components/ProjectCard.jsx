import React from "react";

const ProjectCard = ({ project }) => {
  const { projectName, description, imageUrl, githubLink } = project;
  return (
    <div className="w-[90%] sm:w-[46%] h-[400px] shadow-xl mt-8 rounded-lg">
      <img
        src={imageUrl}
        alt=""
        className="h-[45%] w-full rounded-tr-lg rounded-tl-lg"
      />
      <div className="h-[55%] p-6 flex flex-col">
        <p className=" font-bold text-[1.2rem]">{projectName}</p>
        <p className="mt-3 font-semibold text-[0.95rem]">{description}</p>
        <p className="font-semibold text-[0.9rem] text-purple-500 mt-auto cursor-pointer">
          {githubLink}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
