import React,{useState} from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './index.scss'
import './mobileIndex.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PagesNavbar from './Components/PagesNavbar'
import Footer from '../App/Footer'


//pages
import Home from '../Pages/Home'
import About from '../Pages/About/About'


//data
import pagesNavData from './Components/PagesNavbar.json'


function App() {
  const {navbar} =pagesNavData

  const [isToggled, setToggled] = useState(false);
  const [isScorllEnd, setISScorllEnd]= useState(false)
  const toggleTrueFalse = () => setToggled(!isToggled);


  return (
    <BrowserRouter>
      <PagesNavbar data={navbar} toggleTrueFalse={toggleTrueFalse}/>
      <Routes> 
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
