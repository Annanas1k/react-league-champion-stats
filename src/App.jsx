import { MainLayout } from "./components/Layout/MainLayout"
import { HomePage } from "./pages/HomePage/HomePage"
import { Routes, Route } from "react-router"
import {ChampionPage} from './pages/ChampionPages/ChampionPage'
import { ChampionDetails } from "./pages/ChampionPages/ChampionDetails"
import {Login} from './pages/auth/Login'
import {Register} from './pages/auth/Register'


import "./App.css"
function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/champions">
          <Route index element={<ChampionPage />}/>
          <Route path=":championId"  element={<ChampionDetails />}/>

        </Route>
        <Route path="/auth" >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>

    </Routes>
    </>
  )
}

export default App
