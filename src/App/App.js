import React,{useState,useEffect} from 'react';
import './index.scss'
import './mobileIndex.scss'
import {Events} from "react-scroll";

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Works from './Works'
import Intro from './Intro';
import About from './About'
import Space from './Space'
import Technology from './Technology'
import Partner from './/Partner'
import Contact from './Contact'
import WorkSingle from './WorkSingle';
import SpaceSingle from './SpaceSingle';
import HeaderVideo from './HeaderVideo';
import MobileNabar from './MobileNabar';
import Chapter1 from './Chapter1'
import Chapter2 from './Chapter2'
import Chapter3 from './Chapter3'

import Aos from 'aos'
import 'aos/dist/aos.css'
import worksjsonData from './worksData.json'
import techData from './techArray.json'
import navData from './navbar.json'
import spacejsonData from './space.json'

function App() {


  const [isOpen , setIsOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([]);
  const [workData, setWorkData] = useState(worksjsonData);
  const [isSpaceOpen , setIsSapceOpen] = useState(false)
  const [spaceData, setSpaceData] = useState(spacejsonData);
  const [searchSpaceResults, setSearchSapceResults] = useState([]);
  const [isHeaderOpen , setIsHeaderOpen] = useState(false)
  const [isToggled, setToggled] = useState(false);
  const [isScorllEnd, setISScorllEnd]= useState(false)
  const toggleTrueFalse = () => setToggled(!isToggled);
  Events.scrollEvent.register('end', function(to, element) {
    setISScorllEnd(!isScorllEnd)
    setTimeout(()=>{
      setToggled(false)
      setISScorllEnd(false)
    },800)
    console.log(isToggled,isScorllEnd)
  });
 

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
  
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  return (
    <div className="App">
      <MobileNabar navData={navData} isToggled={isToggled} isScorllEnd={isScorllEnd}/>
      {
        isOpen ?  <WorkSingle data={searchResults} handler={handleOpen} visible={isOpen} /> : null
      }
      {
        isSpaceOpen ?  <SpaceSingle data={searchSpaceResults} handler={handleSpaceOpen} visible={isSpaceOpen} /> : null
      }
      {
        isHeaderOpen ? <HeaderVideo handler={handleHeaderOpen} visible={isHeaderOpen}/> : null
      }

      <Navbar navData={navData} toggleTrueFalse={toggleTrueFalse} />
      <Header handler={handleHeaderClick}/>
      <Works workData={worksjsonData} handler={handleAddClick} />
      <Intro/>
      <About/>
      <Space spaceData={spacejsonData} handler={handleSpaceClick} />
      <Technology techData={techData} />
      <Partner/>
      <Contact/>


      <Footer/>
    </div>
  );
}

export default App;
