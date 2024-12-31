import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";


export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </>
  )
}