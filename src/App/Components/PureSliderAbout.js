import React,{useContext, useEffect, useState} from 'react'
import Slider from "react-slick";
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import aboutjsonData from '../about.json'
function PureSliderAbout(props) {
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation();
  const {about} = aboutjsonData 

  var settings = {
    autoplay: false,
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FaChevronRight size={40}  className="nextbtn"/>,
    prevArrow: <FaChevronLeft size={40} className="prevbtn"/>,
    beforeChange:(current, next)=>setCurrentIndex(next)
  };
  
  return (
    <div id="slider_wrapper">
      <div className="about_detail">
        <div className="about_detail_textcontent">
          <div className="title">
            {t(`${about[currentIndex].title}`)}
          </div>
          <div className="desc">
          {t(`${about[currentIndex].desc}`)}
          </div>
        </div>
        <div className="about_detail_list">
          <Slider  {...settings} className='about_slider items'>
            {about.map((item,index)=>
              <div>
                <div 
                  style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/'+item.image})`}}
                  className="item"
                >
                </div>
              </div>

                
            )}

          </Slider> 
          {/* <ButtonBack onClick={prev}><FaChevronLeft size={40}/></ButtonBack> */}
          {/* <ButtonNext onClick={(e)=> next(e)}><FaChevronRight size={40}/></ButtonNext> */}
        </div>

          
      </div>
     
    </div>
  )
}

export default PureSliderAbout