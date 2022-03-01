import React, { useContext, useState } from 'react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  
  const [showSidebar, setShowSidebar] = useState(false);
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