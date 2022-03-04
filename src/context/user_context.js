import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  // const userLogin = localStorage.getItem("user");
  const [showSidebar, setShowSidebar] = useState(false);
  const [userSuccess, setUserSuccess] = useState(false);
  const handlerShowSidebar = (el) => {
    setUserSuccess(el);
    setShowSidebar(el);
  };
  return (
    <UserContext.Provider
      value={{ showSidebar, handlerShowSidebar, userSuccess }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
