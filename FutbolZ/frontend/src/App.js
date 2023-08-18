//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";


import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import EquiposPage from "./pages/EquiposPage";
import ActualidadPage from "./pages/ActualidadPage";
import LoginPage from "./pages/LoginPage";
import RegistroPage from "./pages/RegistroPage";

function App() {
    return (
        <div className="App">
            <Header />

            <BrowserRouter />
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/equipos" element={<EquiposPage />} />
                <Route path="/actualidad" element={<ActualidadPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro" element={<RegistroPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

