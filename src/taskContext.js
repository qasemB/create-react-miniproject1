import { createContext } from "react";

export const taskContext = createContext({
    taskItems : [],
    setTaskItems : ()=>{}
})