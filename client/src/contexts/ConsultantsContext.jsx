import { createContext, useState, useContext } from "react";

import { consultantsData } from "../utils/data/consultants";

const ConsultantsContext = createContext();

export function ConsultantsProvider({ children }) {
  const [consultants, setConsultants] = useState([]);
  const [selectedConsultants, setSelectedConsultants] = useState([]);

  const fetchAllConsultants = () => {
    setConsultants([...consultantsData]);
  };

  const handleSelectedConsultants = (id) => {
    const selected = consultants.find((c) => c.id === Number(id));
    if (!selected) return;
    if (selectedConsultants.find((c) => c.id === Number(id))) {
      return;
    }

    setSelectedConsultants((prev) => [selected, ...prev]);
  };

  return (
    <ConsultantsContext.Provider
      value={{
        consultants,
        fetchAllConsultants,
        selectedConsultants,
        setSelectedConsultants,
        handleSelectedConsultants,
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
