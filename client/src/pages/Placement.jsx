import React, { useEffect } from "react";
import { useParams } from "react-router";
import { usePlacements } from "../contexts/PlacementsContext";

const Placement = () => {
  const { id } = useParams();
  const { individualPlacement, fetchPlacementsById } = usePlacements();

  useEffect(() => {
    fetchPlacementsById(id);
  }, []);
  console.log(individualPlacement);
  return <div></div>;
};

export default Placement;
