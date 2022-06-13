import React from 'react'
import Slider from "react-slick";
import { MdOutlineArrowBackIosNew,MdOutlineArrowForwardIos } from "react-icons/md";
import { useTranslation } from 'react-i18next';
function EduPlace() {
  const { t } = useTranslation();
  const ArrowLeft = (props) => (
    <MdOutlineArrowBackIosNew {...props} color="white"/>
  );
  const ArrowRight = (props) => (
    <MdOutlineArrowForwardIos {...props} color="white" />
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft  />
  };
  return (
    <div className='eduplace'>
      <div className="eduplace_list">
        <div className="eduplace_item">
            <div className="left">
              <Slider {...settings} className="edu_slider">
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/internship/internship01.jpg'} alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/internship/internship02.jpg'} alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/internship/internship03.jpg'} alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/internship/internship04.jpg'} alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/internship/internship05.jpg'} alt="" />
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
                  <img src={process.env.PUBLIC_URL +'/images/education/cgark/cgark01.jpg'} alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/cgark/cgark02.jpg'} alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/cgark/cgark03.jpg'} alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/cgark/cgark04.jpg'} alt="" />
                </div>
                <div>
                  <img src={process.env.PUBLIC_URL +'/images/education/cgark/cgark05.jpg'} alt="" />
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