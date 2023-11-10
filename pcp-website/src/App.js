import React from "react";
import Home from "./pages/Home";
import AboutPcp from "./pages/AboutPcp";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Membership from "./pages/Membership";
import Chapters from "./pages/Chapters"
import CamanvaChap from "./pages/RegionalChapters/NCR/CamanavaChap"
import MarikinaChap from "./pages/RegionalChapters/NCR/MarikinaChap"
import ManilaChap from "./pages/RegionalChapters/NCR/ManilaChap";
import MatapatChap from "./pages/RegionalChapters/NCR/MatapatChap";
import PasayChap from "./pages/RegionalChapters/NCR/PasayChap";
import PasjmanChap from "./pages/RegionalChapters/NCR/PasjmanChap";
import PamunlasChap from "./pages/RegionalChapters/NCR/PamunlasChap";
import QuezonCityChap from "./pages/RegionalChapters/NCR/QuezonCityChap";
import CamanavaData from "./data/ChaptersData/CamanavaData.json"
import MarikinaData from "./data/ChaptersData/MarikinaData.json"
import ManilaData from "./data/ChaptersData/ManilaData.json"
import MatapatData from "./data/ChaptersData/MatapatData.json"
import PasayData from "./data/ChaptersData/PasayData.json"
import PasajmanData from "./data/ChaptersData/PasajmanData.json"
import PamunlasData from "./data/ChaptersData/PamunlasData.json"
import QuezonCityData from "./data/ChaptersData/QuezonCityData.json"
import BicolChap from "./pages/RegionalChapters/SouthLuzon/BicolChap";
import RizalChap from "./pages/RegionalChapters/SouthLuzon/RizalChap";
import SouthernLuzonChap from "./pages/RegionalChapters/SouthLuzon/SouthernLuzonChap";
import BicolData from "./data/ChaptersData/BicolData.json"
import RizalData from "./data/ChaptersData/RizalData.json"
import SouthernLuzonData from "./data/ChaptersData/SouthernLuzonData.json"


function App() {
  return (
    
      <>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/AboutPcp" 
            element={<AboutPcp />} 
          />
          <Route 
            path="/Membership" 
            element={<Membership/>} 
          />
          <Route 
            path="/Chapters" 
            element={<Chapters/>} 
          />
          {/* Regional Chapters */}
            <Route
              path="/Chapters/Camanava"
              element={<CamanvaChap props={CamanavaData}/>}
            />
            <Route
              path="/Chapters/Marikina"
              element={<MarikinaChap props={MarikinaData}/>}
            />
            <Route
              path="/Chapters/Pasay"
              element={<PasayChap props={PasayData}/>}
            />
            <Route
              path="/Chapters/Pasjman"
              element={<PasjmanChap props={PasajmanData}/>}
            />
            <Route
              path="/Chapters/Quezon-City"
              element={<QuezonCityChap props={QuezonCityData}/>}
            />
            <Route
              path="/Chapters/Manila"
              element={<ManilaChap props={ManilaData}/>}
            />
            <Route
              path="/Chapters/Matapat"
              element={<MatapatChap props={MatapatData}/>}
            />
            <Route
              path="/Chapters/Pamunlas"
              element={<PamunlasChap props={PamunlasData}/>}
            />
          {/* Regional Chapters End */}
          {/* Provincial Chapters */}
          {/* Southern Luzon Region */}
          <Route
            path="/Chapters/Bicol"
            element={<BicolChap props={BicolData}/>}
          />
          <Route
            path="/Chapters/Rizal"
            element={<RizalChap props={RizalData}/>}
          />
          <Route
            path="/Chapters/Southern-Luzon"
            element={<SouthernLuzonChap props={SouthernLuzonData}/>}
          />
        </Routes>
        {/* Visayas Region */}
        <Footer />
      </>
  );
}

export default App;
