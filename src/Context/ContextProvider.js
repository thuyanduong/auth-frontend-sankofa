import { useState } from "react";
import Context from "./Context";

export default function ContextProvider({children}) {

  const [user, setUser] = useState(null)
  const [usersRobots, setUsersRobots] = useState([])

  const value = {
    user, 
    setUser,
    usersRobots,
    setUsersRobots,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}