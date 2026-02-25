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
    <div className="w-screen h-screen bg-[#F2F2F2] flex flex-col gap-6">
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
  );
};

export default Placements;
