import React from "react";
import { useConsultants } from "../contexts/ConsultantsContext";
import ConsultantCard from "../components/ConsultantCard";
import { useWindowWidth } from "../contexts/WindowWidthContext";
import { useNewUser } from "../contexts/NewUserContext";
import { useNavigate } from "react-router";

const ViewSelections = () => {
  const {
    selectedConsultants,
    setSelectedConsultants,
    handleDeleteSelectedUser,
    postPlacementList,
  } = useConsultants();
  const width = useWindowWidth();
  const { createUser, setEmployer, employer } = useNewUser();
  const { id } = employer;
  const navigate = useNavigate();

  const hasConsultants = selectedConsultants.length > 0;

  const consultantIds = selectedConsultants.map((c) => c.id);

  const handleSubmit = () => {
    if (selectedConsultants.length > 0) postPlacementList(id, consultantIds);
    setSelectedConsultants([]);
    handleClick();
  };

  const handleClick = () => {
    navigate(`/confirmation`);
  };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen pb-12 bg-[#F2F2F2]">
      <div></div>
      <div className="relative 2xl:w-[75%] h-[100%] ">
        <div className="flex items-center justify-center  ">
          <h1 className="flex text-[#2A2D43] font-bold mt-4 pt-4 text-[1.2rem] sm:text-[1.4rem] xl:text-[1.6rem] sm:pt-8">
            Selected Consultants
          </h1>
          {hasConsultants && width > 639 && (
            <button
              onClick={handleSubmit}
              className="absolute 2xl:right-0 mt-16 py-4 px-24  border-purple-500 border-2 rounded-lg text-[1.2rem] font-bold text-purple-500 bg-white">
              Submit
            </button>
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center  gap-6 sm:gap-10 sm:mt-5 2xl:mt-12 p-4 ">
          {!hasConsultants && (
            <p className="font-semibold text-[1.6rem] text-center 2xl:text-[1.8rem] mt-6 2xl:mt-6">
              Add consultants to the placement list.
            </p>
          )}
          {selectedConsultants &&
            hasConsultants &&
            selectedConsultants.map((consultant) => {
              return (
                <ConsultantCard
                  consultant={consultant}
                  key={consultant.id}
                  handleClick={handleDeleteSelectedUser}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ViewSelections;
