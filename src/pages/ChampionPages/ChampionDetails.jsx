import { useParams } from "react-router"
import { useChampContext } from "../../hooks/useChampContext"
import { useEffect, useState } from "react"
import { fetchChampionDetails } from "../../services/api"
import { ChampionDetailsInfo } from "../../components/champion/ChampionDetailsInfo"
import { ChampionDetailsAbility } from "../../components/champion/ChampionDetailAbitily"
import { ChampionDetailsSkins } from "../../components/champion/ChampionDetailsSkins"


export const ChampionDetails =() =>{

    const  {championId} = useParams()
    const { version } = useChampContext()

    const [champion, setChampion] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        const getDetails = async () =>{
            if(!version) return null
            const newChampion = await fetchChampionDetails(version, championId)
            setChampion(newChampion)
            setLoading(false)
        }
        if(version){
            getDetails()
        }
    }, [championId, version])

    if(loading) return <p>se incarca...</p>
    if(!champion) return <p>champion 404</p>


    return(
        <>
        <div className="champion-details-wrapper">
             {console.log(champion)}
             <ChampionDetailsInfo champion={champion} />
             <ChampionDetailsAbility champion={champion} version={version} />
             <ChampionDetailsSkins champion={champion} />
        </div>
        </>
    )
}