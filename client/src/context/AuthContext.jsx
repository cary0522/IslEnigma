import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuContextProvider = ({ children }) => {
  const [member, setMember] = useState(
    JSON.parse(localStorage.getItem("member")) || null
  )

  return (
    <AuthContext.Provider value={{ member, setMember }}>
      {children}
    </AuthContext.Provider>
  )
}
