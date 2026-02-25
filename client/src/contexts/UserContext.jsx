import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [isFormData, setIsFormData] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isFormData, setIsFormData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
}
