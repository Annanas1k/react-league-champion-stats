import { Outlet } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"


export const MainLayout = () =>{

    return(
        <div className="main-wrapper">
            <Header />
            <main className="page-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}