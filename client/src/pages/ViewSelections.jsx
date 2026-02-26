import React from "react";
import { useConsultants } from "../contexts/ConsultantsContext";
import ConsultantCard from "../components/ConsultantCard";

const ViewSelections = () => {
  const { selectedConsultants } = useConsultants();
  return (
    <div className="flex flex-col w-screen min-h-screen pb-12 bg-[#F2F2F2]">
      <div className="flex items-center justify-center relative">
        <h1 className="flex text-[#2A2D43] font-bold mt-4 pt-4 text-[1.2rem] sm:text-[1.4rem] xl:text-[1.6rem] sm:pt-8">
          Selected Consultants
        </h1>
        <button className="absolute 2xl:right-44 mt-16 py-4 px-24  border-purple-500 border-2 rounded-lg text-[1.2rem] font-bold text-purple-500 bg-white">
          Submit
        </button>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center  gap-6 sm:gap-10 sm:mt-5 2xl:mt-12 p-4 ">
        {selectedConsultants &&
          selectedConsultants.map((consultant) => {
            return (
              <ConsultantCard consultant={consultant} key={consultant.id} />
            );
          })}
      </div>
    </div>
  );
};

export default ViewSelections;
