import React, { useEffect } from "react";
import { useConsultants } from "../contexts/ConsultantsContext";
import ConsultantCard from "../components/ConsultantCard";
import { useNavigate } from "react-router-dom";
import { useConsultant } from "../contexts/ConsultantContext";

const Consultants = () => {
  const {
    consultants,
    fetchAllConsultants,
    selectedConsultants,
    setSelectedConsultants,
  } = useConsultants();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllConsultants();
  }, []);

  const handleClick = (id) => {
    navigate(`/consultants/${id}`);
  };

  return (
    <div className="w-screen min-h-full bg-[#F2F2F2] pb-12 flex flex-col items-center justify-center">
      <div className="w-[84%] md:w-[92%] 2xl:w-[80%] h-[100%] flex flex-col ">
        <h1 className="flex text-[#2A2D43] font-bold pt-6 text-[1.2rem] sm:text-[1.4rem] xl:text-[1.6rem] sm:pt-8 mx-auto">
          Nology Consultants
        </h1>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 sm:gap-10 mt-5 lg:mt-8 xl:mt-10 ">
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
    </div>
  );
};

export default Consultants;
