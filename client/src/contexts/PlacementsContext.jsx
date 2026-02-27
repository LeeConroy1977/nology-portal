import { createContext, useState, useContext } from "react";
import {
  getAllPlacements,
  getConsultantById,
  getPlacementById,
} from "../utils/api";

const PlacementsContext = createContext();

export function PlacementsProvider({ children }) {
  const [placements, setPlacements] = useState([]);
  const [individualPlacement, setIndividualPlacement] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllPlacements = async () => {
    console.log("This ran");
    try {
      setIsLoading(true);
      const response = await getAllPlacements();
      console.log(response.placements);
      setPlacements(response.placements);
      setIsLoading(false);
    } catch (error) {}
  };

  const fetchPlacementsById = async (id) => {
    try {
      const response = await getPlacementById(id);
      setIndividualPlacement(response);
    } catch (error) {}
  };

  return (
    <PlacementsContext.Provider
      value={{
        placements,
        individualPlacement,
        fetchAllPlacements,
        fetchPlacementsById,
        setIndividualPlacement,
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
