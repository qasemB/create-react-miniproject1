import { createContext } from "react";

export const MainContext = createContext({
    showMenu: false,
    setShowMenu: ()=>{}
})