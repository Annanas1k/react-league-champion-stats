import { useEffect, useMemo, useState } from "react"
import { fetchChampions, getLatestVersion } from "../services/api"
import { ChampContext } from "./createContext"

export const ChampProvider = ({children}) =>{
    const [champions, setChampions] = useState([])
    const [loading, setLoading] = useState(true)
    const [verion, setVersion] = useState(null)

    useEffect(()=>{
        const loadData = async () =>{
            try {
                const latestVersion = await getLatestVersion()
                setVersion(latestVersion)

                const cachedData = localStorage.getItem('champions_data')
                const cachedVerion = localStorage.getItem('champion_version')

                if(cachedData && cachedVerion === latestVersion){
                    setChampions(JSON.parse(cachedData))
                    setLoading(false)
                } else {
                    const data = await fetchChampions(latestVersion)
                    const champsArray = Object.values(data)

                    localStorage.setItem('champions_data', JSON.stringify(champsArray))
                    localStorage.setItem('champions_version', latestVersion)

                    setChampions(champsArray)
                    setLoading(false)
                }
            }catch(err) {
                console.error("Failed to fetch champions: ", err)
                setLoading(false)
            }
        }
        loadData()
    }, [])


    const  value = useMemo(()=>({
        champions, loading, verion
    }), [champions, loading, verion])

    return (
        <ChampContext.Provider value={value}>
            {children}
        </ChampContext.Provider>
    )

}