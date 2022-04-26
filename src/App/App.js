import React,{useEffect} from 'react';
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
import Chapter1 from './Chapter1'
import Chapter2 from './Chapter2'
import Chapter3 from './Chapter3'

import Aos from 'aos'
import 'aos/dist/aos.css'


function App() {
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Works/>
      <About/>
      <Space/>
      <Technology/>
      <Partner/>
      <Contact/>


      <Footer/>
    </div>
  );
}

export default App;
