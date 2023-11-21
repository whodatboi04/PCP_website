import React from 'react'
import PJIMCurrent  from '../components/JournalsComponents/PJIMCurrent'
import ContentData from '../data/JournalsData/ContentData.json'
import PJIMArchives from '../components/JournalsComponents/PJIMArchives'
import Notes from '../components/JournalsComponents/Notes'

export default function Journals() {
  return (
    <>
        <PJIMCurrent props={ContentData}/>
        <PJIMArchives />
        <Notes />
    </>
  )
}
