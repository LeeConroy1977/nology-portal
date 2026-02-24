import { createContext, useState, useContext } from "react";

const NewUserContext = createContext();

export function NewUserProvider({ children }) {
  const [newUser, setNewUser] = useState({});

  const createUser = async (user) => {
    const response = await createEmployer(user);
    return response.user;
  };

  return (
    <NewUserContext.Provider value={{ newUser, setNewUser, createUser }}>
      {" "}
      {children}
    </NewUserContext.Provider>
  );
}

export function NewUser() {
  const context = useContext(NewUserContext);

  if (context === undefined) {
    throw new Error("NewuseUser must be used inside NewUserProvider");
  }

  return context;
}
