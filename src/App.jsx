import { MainLayout } from "./components/Layout/MainLayout"
import { HomePage } from "./pages/HomePage/HomePage"
import { Routes, Route } from "react-router"
import {ChampionPage} from './pages/ChampionPages/ChampionPage'


import "./App.css"
import { ChampionDetails } from "./pages/ChampionPages/ChampionDetails"
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
      </Route>

    </Routes>
    </>
  )
}

export default App
