import React, { useContext, useState } from 'react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const userLogin = localStorage.getItem("user");
  const [showSidebar, setShowSidebar] = useState(!!userLogin);
  const handlerShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <UserContext.Provider value={{showSidebar,handlerShowSidebar}}>{children}</UserContext.Provider>
  )
}
export const useUserContext = () => {
  return useContext(UserContext)
}