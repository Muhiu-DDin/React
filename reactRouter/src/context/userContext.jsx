import { createContext, useState } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  return (
    <userContext.Provider value={{ userName, setUserName }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
