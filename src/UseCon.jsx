import React from "react";

export const UserContext= React.createContext()

export const UserProvider =({children}) =>{
    
    return <UserContext.Provider value="Chandhu">{children}</UserContext.Provider>
}
