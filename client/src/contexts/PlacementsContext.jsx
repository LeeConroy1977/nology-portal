import { createContext, useState, useContext } from "react";
import {
  getAllPlacements,
  getConsultantById,
  getPlacementById,
} from "../utils/api";
import { placementData } from "../utils/data/placement";

const PlacementsContext = createContext();

export function PlacementsProvider({ children }) {
  const [placements, setPlacements] = useState([]);
  const [individualPlacement, setIndividualPlacement] = useState({});

  const fetchAllPlacements = async () => {
    try {
      const response = await getAllPlacements();
      //   setPlacements(response.data);
      setPlacements(placementData);
    } catch (error) {}
  };

  const fetchPlacementsById = async (id) => {
    try {
      const response = await getPlacementById(id);
      //   setPlacements(response.data);
      setIndividualPlacement(response.data);
    } catch (error) {}
  };

  return (
    <PlacementsContext.Provider
      value={{
        placements,
        individualPlacement,
        fetchAllPlacements,
        fetchPlacementsById,
      }}>
      {" "}
      {children}
    </PlacementsContext.Provider>
  );
}

export function usePlacements() {
  const context = useContext(PlacementsContext);

  if (context === undefined) {
    throw new Error("Placements must be used inside ConsultantsProvider");
  }

  return context;
}
