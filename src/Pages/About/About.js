import React from 'react'
import aboutstaffData from '../About/About.json'
import Aboutstaff from './Aboutstaff'
import VideoHeader from '../../App/Components/VideoHeader'
function About() {
  const {aboutstaff} = aboutstaffData
  return (
    <div id="Pages_about">
      <VideoHeader  videourl={'https://vimeo.com/719047386'}/>

      <Aboutstaff aboutStaffData={aboutstaff} />
    </div>
  )
}

export default About