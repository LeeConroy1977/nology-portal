import React from "react";

const PlacementCard = ({ placement, handleClick }) => {
  const { id, companyName, numberOfConsultants } = placement;
  return (
    <div
      onClick={() => handleClick(id)}
      className="flex flex-row justify-between items-center px-4 md:px-8 2xl:p-8 2xl:px-12 w-[100%] 2xl:w-[60%] md:h-[5.5rem] 2xl:h-[6rem] rounded-lg cursor-pointer  mt-0  bg-white h-[5rem] text-[0.95rem] xl:text-[1.05rem] 2xl:text-[1.2rem] font-bold">
      <p className="text-[#2A2D43]">{companyName}</p>
      <p className="text-purple-500">{numberOfConsultants} Candidates</p>
    </div>
  );
};

export default PlacementCard;
