import React, { useEffect } from "react";
import { useConsultants } from "../contexts/ConsultantsContext";
import ConsultantCard from "../components/ConsultantCard";
import { useNavigate } from "react-router-dom";
import { useConsultant } from "../contexts/ConsultantContext";

const Consultants = () => {
  const { consultants, fetchAllConsultants } = useConsultants();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllConsultants();
  }, []);

  const handleClick = (id) => {
    navigate(`/consultants/${id}`);
  };

  return (
    <div className="w-screen min-h-full bg-[#F2F2F2] pb-12 ">
      <h1 className="text-[#2A2D43] font-bold pt-4 text-[1.2rem] sm:text-[1.4rem] xl:text-[1.6rem] sm:pt-8 mr-auto ml-8 sm:ml-[7rem] md:ml-[8rem] lg:ml-[10rem] xl:ml-[10rem] 2xl:ml-[21rem]">
        Nology Consultants
      </h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 sm:gap-10 sm:mt-5 p-4 ">
        {consultants &&
          consultants.map((consultant) => {
            return (
              <ConsultantCard
                consultant={consultant}
                key={consultant.id}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Consultants;
