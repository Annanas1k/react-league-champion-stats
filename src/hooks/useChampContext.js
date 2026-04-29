import { useContext } from "react"
import { ChampContext } from "../context/createContext"


export const useChampContext = () =>{
    return useContext(ChampContext)
}