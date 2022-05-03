import React from 'react'
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";
function Partner({partnerData}) {
  const {partner} = partnerData
  const { t } = useTranslation();
  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />
  };
  return (
    <section id="partner" className='fluid_section'>
      <h1>{t('section_title6')}</h1>
        <br />
        <br />
        <br />
        <Slider {...settings} className='partner_slider'>
        {
            partner?
            partner.map((item)=>{
              return (
                <div className='item'>
                  <img 
                    src={process.env.PUBLIC_URL+'/images/partner/'+item.image} 
                    alt=""
                  />
                </div>
              )
            }) : ""
          }
        </Slider>

    </section>
  )
}

export default Partner