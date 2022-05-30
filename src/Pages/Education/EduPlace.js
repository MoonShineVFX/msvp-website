import React from 'react'
import Slider from "react-slick";
import { MdOutlineArrowBackIosNew,MdOutlineArrowForwardIos } from "react-icons/md";
import { useTranslation } from 'react-i18next';
function EduPlace() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <MdOutlineArrowForwardIos color="white" />,
    prevArrow: <MdOutlineArrowBackIosNew color="white"/>
  };
  return (
    <div className='eduplace'>
      <div className="eduplace_list">
        <div className="eduplace_item">
            <div className="left">
              <Slider {...settings} className="edu_slider">
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/m01.png'} alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/m01.png'} alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/m01.png'} alt="" />
                </div>

              </Slider>
            </div>
            <div className="right">
              <div className="title">
                {t('eduplace_item1_title')}
              </div>
              <div className="desc">
                {t('eduplace_item1_desc')}
              </div>
            </div>
        </div>
        <div className="eduplace_item set2">
          <div className="left">
            <Slider {...settings} className="edu_slider">
              <div>
                <img src={process.env.PUBLIC_URL +'/images/education/m01.png'} alt="" />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL +'/images/education/m01.png'} alt="" />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL +'/images/education/m01.png'} alt="" />
              </div>

            </Slider>
          </div>
          <div className="right">
            <div className="title">
              {t('eduplace_item2_title')}
            </div>
            <div className="desc">
              {t('eduplace_item2_desc')} 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EduPlace