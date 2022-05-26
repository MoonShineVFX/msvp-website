import React,{useState,useEffect} from 'react';

import Header from '../App/Header'

import Works from '../App/Works'
import HomeAbout from '../App/HomeAbout'
import Space from '../App/Space'
// import Technology from '../App/Technology'
import Contact from '../App/Contact'
import WorkSingle from '../App/WorkSingle';
import SpaceSingle from '../App/SpaceSingle';
import HeaderVideo from '../App/HeaderVideo';
import MobileNabar from '../App/MobileNabar';
import IntroBigBg from '../App/IntroBigBg';
import PartnerMarquee from '../App/PartnerMarquee';


//data
import worksjsonData from '../App/worksData.json'
import techData from '../App/techArray.json'
import spacejsonData from '../App/space.json'
import partnerjsonData from '../App/partner.json'
import aboutjsonData from '../App/about.json'
function Home() {
  const [isOpen , setIsOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([]);
  const [workData, setWorkData] = useState(worksjsonData);
  const [isSpaceOpen , setIsSapceOpen] = useState(false)
  const [spaceData, setSpaceData] = useState(spacejsonData);
  const [searchSpaceResults, setSearchSapceResults] = useState([]);
  const [isHeaderOpen , setIsHeaderOpen] = useState(false)

 

  // 開啟單作品
  const handleAddClick = (dataId) => {
    const results  =   workData.works.find((d)=>{
      return d.id === dataId
    })
    setSearchResults(results)
    setIsOpen(!isOpen)
  };
  // 開啟作品modal
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  //開啟單空間資料
  const handleSpaceClick = (dataId) => {
    const results  =   spaceData.space.find((d)=>{
      return d.id === dataId
    })
    setSearchSapceResults(results)
    setIsSapceOpen(!isSpaceOpen)
  };
  //開關單空間modal
  const handleSpaceOpen = () => {
    setIsSapceOpen(!isSpaceOpen)
  }
  //開啟header資料
  const handleHeaderClick = (dataId) => {
    setIsHeaderOpen(!isHeaderOpen)
  };
  //開關header modal
  const handleHeaderOpen = () => {
    setIsHeaderOpen(!isHeaderOpen)
  }
  


  return (
    <div>
      {
        isOpen ?  <WorkSingle data={searchResults} handler={handleOpen} visible={isOpen} /> : null
      }
      {
        isSpaceOpen ?  <SpaceSingle data={searchSpaceResults} handler={handleSpaceOpen} visible={isSpaceOpen} /> : null
      }
      {
        isHeaderOpen ? <HeaderVideo handler={handleHeaderOpen} visible={isHeaderOpen}/> : null
      }

      <Header handler={handleHeaderClick}/>
      <Works workData={worksjsonData} handler={handleAddClick} />
      <IntroBigBg/>
      {/* <About aboutData={aboutjsonData}/> */}
      <Space spaceData={spacejsonData} handler={handleSpaceClick} />
      {/* <Technology techData={techData} /> */}
      <PartnerMarquee  partnerData={partnerjsonData}/>
      <Contact/>


    </div>
  )
}

export default Home