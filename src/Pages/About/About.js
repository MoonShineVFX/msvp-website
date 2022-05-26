import React from 'react'
import aboutstaffData from '../About/About.json'
import Aboutstaff from './Aboutstaff'
function About() {
  const {aboutstaff} = aboutstaffData
  return (
    <div id="Pages_about">
      <div 
        className="pageHeader" 
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/intro/intro01.jpg'})`}}
      >

      </div>
      <Aboutstaff aboutStaffData={aboutstaff} />
    </div>
  )
}

export default About