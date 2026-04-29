import { useNavigate } from "react-router"



export const ChampionCard = ({champion}) => {
    const navigate = useNavigate()

    const cardImageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`

    return(
        <div className="col-6 col-md-4 col-lg-2 mb-4">
            <div 
                className="card bg-riot-gray border-0 h-100 champion-hover-card"
                onClick={()=>navigate(`/champion/${champion.id}`)}
                style={{cursor: "pointer", transition: "transform 0.2s", width: "300px"}}>
                <img src={cardImageUrl} alt={champion.name} className="card-img-top"/>
                <div className="card-body p-2 text-center">
                    <h6 className="card-title text-uppercase fw-bold m-0" style={{fontSize: "0.8rem"}}>
                        {champion.name}
                    </h6>
                </div>
            </div>
        </div>
    )




}