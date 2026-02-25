import React from "react";

const PlacementCard = ({ placement, handleClick }) => {
  const { id, companyName, consultantNum } = placement;
  return (
    <div
      onClick={() => handleClick(id)}
      className="flex flex-row cursor-pointer mt-6 bg-white h-[5rem]">
      <p>{companyName}</p>
      <p>{consultantNum}</p>
    </div>
  );
};

export default PlacementCard;
