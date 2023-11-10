import React from 'react';
import History from '../components/AboutPcpComponents/History';
import OrgGlance from '../components/AboutPcpComponents/OrgGlance';
import MissionVission from '../components/AboutPcpComponents/MissionVision';
import Operation from '../components/AboutPcpComponents/Operation';
import Board from '../components/AboutPcpComponents/Board'
import AffiliateSoc from '../components/AboutPcpComponents/AffiliateSoc'
import { BoardRegentsData } from '../data/AboutPcpData/BoardRegentsData';
import PastPresAward from '../components/AboutPcpComponents/PastPresAward';
import Constitution from '../components/AboutPcpComponents/Constitution';


export default function AboutPcp() {
  return (
    <>
        {/* History of PCP */}
          <History />

        {/* The Organization at a Glance */}
          <OrgGlance />

        {/* Mission and Vission */}
          <MissionVission />
          
        {/* Operations And Highlights of Activities */}
        <Operation />

        {/* Officer and Board of Regents FY 2023-2024 */}
        <Board boards={BoardRegentsData} />

        {/* Specialties and Afilliate Societies */}
        <AffiliateSoc />

        {/* PCP Past Presidents And Awardees */}
        <PastPresAward />

        {/* 2021 PCP Amended Constitution By-Laws And 
        PCP Accredited Residency Training Institutions
        By Region Fiscal Year 2022-2023 */}
        <Constitution />
    </>
  )
}
