import React, {useState, useEffect} from 'react'
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
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      {/* {loading ? (
        <ClipLoader
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : ( */}
        <>
          {/* Carousel Bootstrap Banner for Poster Events */}
          <ControlledCarousel BannerSlides={bannerData} />

          {/* Latest News And Events */}
          <NewsEvents NewsSlides={SlidesNews} />

          {/* PCP Breaking News */}
          <PcpNews SlidesPcpNews={PcpSlidesNews} />

          {/* PCP Book */}
          <PcpBook />

          {/* PCP Webinars   */}
          <Webinars webinarSlides={webinarsData} />

          {/* Covid-19 Updates   */}
          <Covid19 />

          {/* Covid-19 Vaccination & Certificate Claim  */}
          <VaxCert />

          {/* PCP Brochure & PCP-CPD Board Resolution
            & 2021 Amended By-Laws & PCP Research Guidelines */}
          <PcpBrochure PcpBrochureContents={PcpBrochureData} />

          {/* Amended By-Laws / Research Guidelines */}
          <Guidelines />

          {/* Board Resolution & IRR */}
          <BoardIRR />

          {/* PCP Online Payment  */}
          <PcpPay />

          {/* Update on HMO's & Media communication
          & Recent Webinars/Health Forum For Covid-19 Vaccines */}
          <HmoMediaForum MediaComm={MediaCommData} />

          {/* PCP-DOH Webinars Series */}
          <PcpDOHWebinars DOHWebinars={DOHWebinarsData} />

          {/* Committee Updates */}
          <CmtteeUpdt />

          {/* Contact Us */}
          <ConactUs />
        </>
      {/* )} */}
    </>
  );
}

