import { MainLayout } from "./components/Layout/MainLayout"
import { HomePage } from "./pages/HomePage/HomePage"
import { Routes, Route } from "react-router"
import {ChampionPage} from './pages/ChampionPages/ChampionPage'


import "./App.css"
function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/champions">
          <Route index element={<ChampionPage />}/>

        </Route>
      </Route>

    </Routes>
    </>
  )
}

export default App
