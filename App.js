import './App.css';
import React from "react";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingpage/LandingPage";
import Cards from "./components/cards/Cards";
import InfoBox from "./components/info-box/InfoBox";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">

        <Navbar/>
        <LandingPage/>
        <Cards/>
        <InfoBox/>
        <Contact/>
        <Footer/>



    </div>
  );
}

export default App;
