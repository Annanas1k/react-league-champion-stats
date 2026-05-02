import { useContext } from "react"
import { UserContext } from "../context/createContext"

export const useUserContext = () =>{
    return useContext(UserContext)
}