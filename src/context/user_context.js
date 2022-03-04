import React, { useContext, useState } from "react";

const UserContext = React.createContext();

function checkLocal() {
  if (localStorage.getItem("user")) {
    return true;
  } else {
    return false;
  }
}
export const UserProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(checkLocal());
  const [userSuccess, setUserSuccess] = useState(checkLocal());
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
