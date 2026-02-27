import { createContext, useState, useContext } from "react";

import { consultantsData } from "../utils/data/consultants";
import { getAllConsultants } from "../utils/api";

const ConsultantsContext = createContext();

export function ConsultantsProvider({ children }) {
  const [consultants, setConsultants] = useState([]);
  const [selectedConsultants, setSelectedConsultants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllConsultants = async () => {
    try {
      setIsLoading(true);
      const response = await getAllConsultants();
      setConsultants(response);
      setIsLoading(false);
    } catch (error) {}
  };

  const postPlacementList = async (id, arr) => {
    try {
      setIsLoading(true);
      const response = await createPlacementList(id, arr);
      setIsLoading(false);
    } catch (error) {}
  };

  const handleSelectedConsultants = (id) => {
    const selected = consultants.find((c) => c.id === Number(id));
    if (!selected) return;
    if (selectedConsultants.find((c) => c.id === Number(id))) {
      return;
    }

    setSelectedConsultants((prev) => [selected, ...prev]);
  };

  const handleDeleteSelectedUser = (id) => {
    // if (selectedConsultants.find((c) => c.id !== id)) {
    //   console.log("this ran");
    //   return;
    // }

    const filteredSelection = selectedConsultants.filter((c) => c.id !== id);
    setSelectedConsultants([...filteredSelection]);
  };

  return (
    <ConsultantsContext.Provider
      value={{
        consultants,
        fetchAllConsultants,
        selectedConsultants,
        setSelectedConsultants,
        handleSelectedConsultants,
        handleDeleteSelectedUser,
        isLoading,
        postPlacementList,
      }}>
      {" "}
      {children}
    </ConsultantsContext.Provider>
  );
}

export function useConsultants() {
  const context = useContext(ConsultantsContext);

  if (context === undefined) {
    throw new Error("Consultants must be used inside ConsultantsProvider");
  }

  return context;
}
