import React, { useEffect } from "react";
import { usePlacements } from "../contexts/PlacementsContext";
import PlacementCard from "../components/PlacementCard";
import { useNavigate } from "react-router";

const Placements = () => {
  const { placements, fetchAllPlacements } = usePlacements();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllPlacements();
  }, []);

  const handleClick = (id) => {
    navigate(`/placements/${id}`);
  };

  return (
    <div className="w-screen h-screen bg-[#F2F2F2] flex flex-col items-center gap-6">
      <h1 className="flex text-[#2A2D43] font-bold pt-6 text-[1.2rem] sm:text-[1.4rem] xl:text-[1.6rem] sm:pt-8 mx-auto">
        Placements
      </h1>
      <div className="w-[80%] md:w-[50%] xl:w-[44%]    2xl:w-[70%] md:mt-6 h-full flex flex-col items-center gap-6 ">
        {placements &&
          placements.map((placement) => {
            return (
              <PlacementCard
                placement={placement}
                key={placement.id}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Placements;
