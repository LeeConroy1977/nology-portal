import { createContext, useState, useContext } from "react";

import { consultantsData } from "../utils/data/consultants";

const ConsultantsContext = createContext();

export function ConsultantsProvider({ children }) {
  const [consultants, setConsultants] = useState([]);

  const fetchAllConsultants = () => {
    setConsultants([...consultantsData]);
  };

  return (
    <ConsultantsContext.Provider value={{ consultants, fetchAllConsultants }}>
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
