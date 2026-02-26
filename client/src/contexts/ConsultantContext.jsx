import { createContext, useState, useContext } from "react";
import { getConsultantById } from "../utils/api";
import { consultantsData } from "../utils/data/consultants";

const ConsultantContext = createContext();

export function ConsultantProvider({ children }) {
  const [consultant, setConsultant] = useState({});

  const fetchConsultantById = async (id) => {
    const response = consultantsData.find((con) => con.id === Number(id));
    setConsultant(response);
    try {
      // const response = await getConsultantById(id);
      // setConsultant(response.data);
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
