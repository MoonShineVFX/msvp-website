import React,{useState,useEffect} from 'react';
import './index.scss'
import './mobileIndex.scss'

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Works from './Works'
import About from './About'
import Space from './Space'
import Technology from './Technology'
import Partner from './/Partner'
import Contact from './Contact'
import WorkSingle from './WorkSingle';
import SpaceSingle from './SpaceSingle';
import Chapter1 from './Chapter1'
import Chapter2 from './Chapter2'
import Chapter3 from './Chapter3'

import Aos from 'aos'
import 'aos/dist/aos.css'
import techData from './techArray.json'

function App() {

  const worksArray = [
    {
      id:1,
      title:'2021 ASUS ROG CES 線上發表會花絮',
      desc:'線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮',
      link:'https://vimeo.com/701988669',
      image:'/images/pic/pic03.jpg',
      category:'PRESENTATION'
    },
    {
      id:2,
      title:'2021 ASUS ROG CES 線上發表會花絮',
      desc:'線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮',
      link:'https://vimeo.com/701988669',
      image:'/images/pic/pic03.jpg',
      category:'PRESENTATION'
    },
    {
      id:3,
      title:'2021 ASUS ROG CES 線上發表會花絮',
      desc:'線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮',
      link:'https://vimeo.com/701988669',
      image:'/images/pic/pic03.jpg',
      category:'PRESENTATION'
    },
    {
      id:4,
      title:'2021 ASUS ROG CES 線上發表會花絮',
      desc:'線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮',
      link:'https://vimeo.com/701988669',
      image:'/images/pic/pic03.jpg',
      category:'DRAMA'
    },
    {
      id:5,
      title:'2021 ASUS ROG CES 線上發表會花絮',
      desc:'線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮',
      link:'https://vimeo.com/701988669',
      image:'/images/pic/pic03.jpg',
      category:'PRESENTATION'
    },
    {
      id:6,
      title:'2021 ASUS ROG CES 線上發表會花絮',
      desc:'線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮',
      link:'https://vimeo.com/701988669',
      image:'/images/pic/pic03.jpg',
      category:'ADVERTISEMENT'
    },
    {
      id:7,
      title:'2021 ASUS ROG CES 線上發表會花絮',
      desc:'線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮',
      link:'https://vimeo.com/701988669',
      image:'/images/pic/pic03.jpg',
      category:'ADVERTISEMENT'
    },
    {
      id:8,
      title:'2021 ASUS ROG CES 線上發表會花絮',
      desc:'線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮',
      link:'https://vimeo.com/701988669',
      image:'/images/pic/pic04.jpg',
      category:'INTERNSHIP'
    },
    {
      id:9,
      title:'2021 ASUS ROG CES 線上發表會花絮6',
      desc:'線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮線上發表會花絮',
      link:'https://vimeo.com/701988669',
      image:'/images/pic/pic04.jpg',
      category:'METAVERSE CONCERT'
    }
  ]
  const spaceArray = [
    {
      id:1,
      title:'A 棚 ',
      desc:'弧形 LED 及天幕，適合需大型空間、真實場景建置的拍攝',
      purpose:'戲劇錄影、廣告拍攝、線上發表會、電競賽轉播',
      spec:'270° LED 弧形螢幕、可升降 truss 供燈具架設、獨立 Wifi 網路、遠端監控系統',
      spacespce:'總體面積：160 坪、舞台面積：86 坪、可用高度：6 公尺',
      image:'/images/pic/pic04.jpg',
    },
    {
      id:2,
      title:'B 棚 ',
      desc:'配合 XR 技術讓場景延伸，適合定點及小範圍走動的拍攝',
      purpose:'MV 錄影、直播座談、線上發表會',
      spec:'90° LED 直角螢幕、可升降 truss 供燈具架設、獨立 Wifi 網路、遠端監控系統',
      spacespce:'總體面積：50 坪、舞台面積：7 坪、可用高度：5 公尺',
      image:'/images/pic/pic04.jpg',
    }
  ]
  const techArray = [
    {
      id:1,
      title:'追蹤技術 ',
      desc:'透過定位讓攝影鏡頭追蹤畫面，提升攝影團隊溝通效率。',
      image:'/images/pic/pic04.jpg',
    }
  ]
  const [isOpen , setIsOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([]);
  const [workData, setWorkData] = useState(worksArray);
  const [isSpaceOpen , setIsSapceOpen] = useState(false)
  const [spaceData, setSpaceData] = useState(spaceArray);
  const [searchSpaceResults, setSearchSapceResults] = useState([]);

  // 開啟單作品
  const handleAddClick = (dataId) => {
    const results  =   workData.find((d)=>{
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
    const results  =   spaceData.find((d)=>{
      return d.id === dataId
    })
    setSearchSapceResults(results)
    setIsSapceOpen(!isSpaceOpen)
  };
  //開關單空間modal
  const handleSpaceOpen = () => {
    setIsSapceOpen(!isSpaceOpen)
  }
  
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  return (
    <div className="App">
      {
        isOpen ?  <WorkSingle data={searchResults} handler={handleOpen} visible={isOpen} /> : null
      }
      {
        isSpaceOpen ?  <SpaceSingle data={searchSpaceResults} handler={handleSpaceOpen} visible={isSpaceOpen} /> : null
      }

      <Navbar/>
      <Header/>
      <Works workData={worksArray} handler={handleAddClick} />
      <About/>
      <Space handler={handleSpaceClick} />
      <Technology techData={techData} />
      <Partner/>
      <Contact/>


      <Footer/>
    </div>
  );
}

export default App;
