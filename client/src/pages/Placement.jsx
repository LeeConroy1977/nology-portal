import React, { useEffect } from "react";
import { useParams } from "react-router";
import { usePlacements } from "../contexts/PlacementsContext";
import { useConsultants } from "../contexts/ConsultantsContext";
import ConsultantCard from "../components/ConsultantCard";

const Placement = () => {
  const { id } = useParams();
  const { individualPlacement, fetchPlacementsById } = usePlacements();
  const { fakeConsultants } = useConsultants();

  const { companyName, contactName, email, phoneNumber, comment } =
    individualPlacement;

  // useEffect(() => {
  //   // fetchPlacementsById(id);
  //   console.log(individualPlacement);
  // }, []);

  console.log(fakeConsultants);
  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-full bg-white pb-12 sm:p-8 xl:p-16 xl:py-10">
      <div className="xl:w-[60%] text-[#2A2D43]">
        <h1 className="flex text-[#2A2D43] font-bold pt-6 text-[1.2rem] sm:text-[1.4rem] xl:text-[1.6rem] sm:pt-8 mx-auto">
          {companyName} Placement Interview
        </h1>
        <p className="font-bold pt-6 text-[1.2rem]">Company: {companyName}</p>
        <p className="font-bold pt-6 text-[1.2rem]">
          Contact name: {contactName}
        </p>
        <p className="font-bold pt-6 text-[1.2rem]">Email: {email}</p>
        <p className="font-bold pt-6 text-[1.2rem]">Phone: {phoneNumber}</p>
        <p className="font-bold pt-6 text-[1.2rem]">Comment: {comment}</p>
      </div>
      <div className="xl:w-[75%] ">
        {fakeConsultants &&
          fakeConsultants.map((consultant) => {
            return <ConsultantCard consultant={consultant} />;
          })}
      </div>
    </div>
  );
};

export default Placement;
