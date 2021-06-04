import React,{useEffect} from 'react';
import './index.scss'
import './mobileIndex.scss'

import Header from './Header'
import Footer from './Footer'
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
      <Header/>
      <div className="container">
        <Chapter1/>
      </div>
      <Chapter2/>
      <Chapter3/>

      <Footer/>
    </div>
  );
}

export default App;
