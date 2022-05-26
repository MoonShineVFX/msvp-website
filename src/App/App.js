import React,{useState,useEffect} from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './index.scss'
import './mobileIndex.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import PagesNavbar from './Components/PagesNavbar'
import Footer from '../App/Footer'


//pages
import Home from '../Pages/Home'
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services';
import Education from '../Pages/Education/Education';


//data
import pagesNavData from './Components/PagesNavbar.json'


function App() {
  const {navbar} =pagesNavData

  const [isToggled, setToggled] = useState(false);
  const [isScorllEnd, setISScorllEnd]= useState(false)
  const toggleTrueFalse = () => setToggled(!isToggled);


  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])


  return (
    <BrowserRouter>
      <PagesNavbar data={navbar} toggleTrueFalse={toggleTrueFalse}/>
      <Routes> 
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="education" element={<Education />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
