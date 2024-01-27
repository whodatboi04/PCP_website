import React from 'react'
import ControlledCarousel from "../components/HomeComponents/Banner"
import NewsEvents from "../components/HomeComponents/NewsEvents"
import PcpNews from "../components/HomeComponents/PcpNews"
import PcpBook from "../components/HomeComponents/PcpBook"
import SlidesNews from "../data/HomeData/NewsEvents.json"
import PcpSlidesNews from "../data/HomeData/PcpNews.json"
import Webinars from "../components/HomeComponents/Webinars"
import { bannerData } from "../data/HomeData/BannerData"
import { webinarsData } from "../data/HomeData/Webinars"
import Covid19 from "../components/HomeComponents/Covid19"
import VaxCert from "../components/HomeComponents/VaxCert"
import PcpBrochure from '../components/HomeComponents/PcpBrochure'
import {PcpBrochureData} from "../data/HomeData/PcpBrochureData"
import PcpPay from "../components/HomeComponents/PcpPay"
import HmoMediaForum from '../components/HomeComponents/HmoMediaForum'
import { MediaCommData } from '../data/HomeData/MediaCommData'
import PcpDOHWebinars from '../components/HomeComponents/PcpDOHWebinars'
import DOHWebinarsData from '../data/HomeData/DOHWebinarsData.json'
import CmtteeUpdt from '../components/HomeComponents/CmtteeUpdt'
import ConactUs from "../components/HomeComponents/Contact"
import Guidelines from '../components/HomeComponents/Guidelines'
import BoardIRR from '../components/HomeComponents/BoardIRR'
import ClipLoader from "react-spinners/ClipLoader";


export default function Home() {

  return (
    <>
        <>
          <ControlledCarousel BannerSlides={bannerData} />
          <NewsEvents NewsSlides={SlidesNews} />
          <PcpNews SlidesPcpNews={PcpSlidesNews} />
          <PcpBook />
          <Webinars webinarSlides={webinarsData} />
          <Covid19 />
          <VaxCert />
          <PcpBrochure PcpBrochureContents={PcpBrochureData} />
          <Guidelines />
          <BoardIRR />
          <PcpPay />
          <HmoMediaForum MediaComm={MediaCommData} />
          <PcpDOHWebinars DOHWebinars={DOHWebinarsData} />
          <CmtteeUpdt />
          <ConactUs />
        </>
      {/* )} */}
    </>
  );
}

