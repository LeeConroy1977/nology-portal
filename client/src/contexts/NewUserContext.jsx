import { createContext, useState, useContext } from "react";
import { createEmployer } from "../utils/api";

const NewUserContext = createContext();

export function NewUserProvider({ children }) {
  const [newUser, setNewUser] = useState({});
  const [employer, setEmployer] = useState({});

  const createUser = async (user) => {
    console.log("createUser ran");
    const response = await createEmployer(user);
    console.log(response);
    setEmployer(response);
    return response;
  };

  return (
    <NewUserContext.Provider
      value={{ newUser, setNewUser, createUser, employer, setEmployer }}>
      {" "}
      {children}
    </NewUserContext.Provider>
  );
}

export function useNewUser() {
  const context = useContext(NewUserContext);

  if (context === undefined) {
    throw new Error("NewuseUser must be used inside NewUserProvider");
  }

  return context;
}
