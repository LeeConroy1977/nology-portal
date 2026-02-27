import { createContext, useState, useContext } from "react";
import { getConsultantById } from "../utils/api";

const ConsultantContext = createContext();

export function ConsultantProvider({ children }) {
  const [consultant, setConsultant] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchConsultantById = async (id) => {
    try {
      setIsLoading(true);
      const response = await getConsultantById(id);
      setConsultant(response);
      setIsLoading(false);
    } catch (error) {}
  };

  return (
    <ConsultantContext.Provider value={{ consultant, fetchConsultantById }}>
      {" "}
      {children}
    </ConsultantContext.Provider>
  );
}

export function useConsultant() {
  const context = useContext(ConsultantContext);

  if (context === undefined) {
    throw new Error("Consultant must be used inside ConsultantsProvider");
  }

  return context;
}
