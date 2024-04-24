import { createContext, useState } from "react";

export const userContext=createContext({
    user:null,
    logIn:()=>{},
    logOut:()=>{}
});
const USER={name:"guest",isauthenticated:false}

export function UserContextProvider({children}){
    const[user,setUser]=useState(USER);
return  <userContext.Provider value={{}}>{children}</userContext.Provider>
}

