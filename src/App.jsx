import { MainLayout } from "./components/Layout/MainLayout"
import { HomePage } from "./pages/HomePage/HomePage"
import { Routes, Route } from "react-router"

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>

    </Routes>
    </>
  )
}

export default App
