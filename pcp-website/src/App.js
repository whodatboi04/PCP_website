import React, { useEffect } from "react";
import Home from "./pages/Home";
import AboutPcp from "./pages/AboutPcp";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import BoholChap from "./pages/RegionalChapters/VisayasRegion/BoholChap";
import CapizAklanChap from './pages/RegionalChapters/VisayasRegion/CapizAklanChap';
import CentralVisayas from './pages/RegionalChapters/VisayasRegion/CentralVisayas';
import EastVisayasChap from './pages/RegionalChapters/VisayasRegion/EastVisayasChap';
import NegrosOcChap from './pages/RegionalChapters/VisayasRegion/NegrosOcChap';
import WestPanayChap from './pages/RegionalChapters/VisayasRegion/WestPanayChap';
import NegrosOrChap from './pages/RegionalChapters/VisayasRegion/NegrosOrChap'
import BoholData from './data/ChaptersData/BoholData.json'
import CapizAklanData from './data/ChaptersData/CapizAklanData.json'
import CentralVisayaData from './data/ChaptersData/CentralVisayasData.json'
import EastVisayasData from './data/ChaptersData/EastVisayas.json'
import NegrosOcData from './data/ChaptersData/NegrosOccidentalData.json'
import WestVisayasPanayData from './data/ChaptersData/WestVisayasPanayData.json'
import NegrosOrData from './data/ChaptersData/NegrosOrientalData.json'
import NorthMinChap from './pages/RegionalChapters/MindanaoRegion/NorthMinChap'
import NWestMinChap from './pages/RegionalChapters/MindanaoRegion/NWestMinChap'
import SoccsChap from './pages/RegionalChapters/MindanaoRegion/SocsChap'
import SouthMin from './pages/RegionalChapters/MindanaoRegion/SouthMin'
import WestMinChap from './pages/RegionalChapters/MindanaoRegion/WestMinChap'
import Caraga from './pages/RegionalChapters/MindanaoRegion/Caraga'
import NorthMindanaoData from './data/ChaptersData/NorthMindanaoData.json'
import NWestMindanaoData from './data/ChaptersData/NWestMindanaoData.json'
import SocsksargenData from './data/ChaptersData/SocksargenData.json'
import SouthMindanaoData from './data/ChaptersData/SouthMindanaoData.json'
import WestMindanaoData from './data/ChaptersData/WestMindanaoData.json'
import CaragaData from './data/ChaptersData/CaragaData.json'
import Journals from "./pages/Journals";
import Contactpage from "./pages/Contactpage";
import HMO from "./pages/HMO";
import Newsletter from "./pages/Newsletter";




function App() {
  // const NavbarRouter = () => {
  //   const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  //   return null;
  // };

  // window.scrollTo({
  //   top: 0,
  //   left: 0,
  //   behavior: 'auto',
  // });

  return (
    
      <>
        {/* <NavbarRouter /> */}
       <BrowserRouter>
        <Navbar />
          <Routes>
            <Route 
              path="/" 
              index element={<Home />} 
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
            {/* Visayas Region */}
            <Route 
              path="/Chapters/Bohol"
              element={<BoholChap props={BoholData}/>}
            />
            <Route 
              path="/Chapters/Capiz-Aklan"
              element={<CapizAklanChap props={CapizAklanData} />}
            />
            <Route 
              path="/Chapters/Central-Visayas"
              element={<CentralVisayas props={CentralVisayaData}/>}
            />
            <Route
              path="/Chapters/Eastern-Visayas"
              element={<EastVisayasChap props={EastVisayasData}/>}
            />
            <Route
              path="/Chapters/Negros-occidental"
              element={<NegrosOcChap props={NegrosOcData}/>}
            />
            <Route 
              path="/Chapters/Western-visayas-panay"
              element={<WestPanayChap props={WestVisayasPanayData}/>}
            />
            <Route 
              path="/Chapters/Negros-Oriental"
              element={<NegrosOrChap props={NegrosOrData}/>}
            />
            {/* Mindanao Region */}
            <Route 
              path="/Chapters/North-Mindanao"
              element={<NorthMinChap props={NorthMindanaoData}/>}
            />
            <Route
              path="/Chapters/North-West-Mindanao"
              element={<NWestMinChap props={NWestMindanaoData}/>}
            />
            <Route 
              path="/Chapters/Socsksargen"
              element={<SoccsChap props={SocsksargenData}/>}
            />
            <Route  
              path="/Chapters/Southern-Mindanao"
              element={<SouthMin props={SouthMindanaoData}/>}
            />
            <Route 
              path="/Chapters/Western-Mindanao"
              element={<WestMinChap props={WestMindanaoData}/>}  
            />
            <Route    
              path="/Chapters/Caraga"
              element={<Caraga props={CaragaData}/>}
            />
            {/* End of Chapters */}
            <Route  
              path="/Journals"
              element={<Journals/>}
            />

            <Route
              path="/Newsletter"
              element={<Newsletter/>}
            />

            <Route 
              path="/HMO"
              element={<HMO/>}
            />

            <Route
              path="/Contacts"
              element={<Contactpage/>}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
  );
}

export default App;
