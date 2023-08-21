
//import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

import HomePage from "./pages/HomePage.js";
import NosotrosPage from "./pages/Nosotros.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Nav/>
      <Routes>
      <Route path="/" element={HomePage}/>
      <Route path="nosotros" element={NosotrosPage}/>
      </Routes>
      </BrowserRouter> 
      <Footer/>
    </div>
  );
}

export default App;
