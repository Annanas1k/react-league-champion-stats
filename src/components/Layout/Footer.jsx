import { FaDiscord, FaReddit, FaYoutube } from "react-icons/fa"


export const Footer = () =>{

    return (
        <footer className="bg-black text-secondary py-5 border-top border-secondary mt-auto">
        <div className="container text-center">
            <div className="mb-4">
            <FaYoutube className="me-2" />
            <FaDiscord  className="me-2"/>
            <FaReddit />
            </div>
            
            <p className="small mb-2">
            ™ & © 2026 Riot Games, Inc. League of Legends and all related logos are trademarks...
            </p>
            
            <div className="d-flex justify-content-center gap-3 small fw-bold text-uppercase">
            <a href="#" className="text-secondary text-decoration-none">Privacy Notice</a>
            <a href="#" className="text-secondary text-decoration-none">Terms of Service</a>
            <a href="#" className="text-secondary text-decoration-none">Cookie Preferences</a>
            </div>
        </div>
        </footer>
    )
}