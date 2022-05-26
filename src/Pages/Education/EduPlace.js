import React from 'react'
import Slider from "react-slick";
function EduPlace() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
                MoonShine Internship
              </div>
              <div className="desc">
                夢想動畫每年豐富經歷與實戰經驗，提供學員最貼近市場的專業知識
              </div>
            </div>
        </div>
        <div className="eduplace_item set2">
          <div className="left">
            <Slider {...settings}>
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
              CG ARK 
            </div>
            <div className="desc">
              夢想方舟是由台灣頂尖的動畫特效人才集結成立的動畫學院，教授影像、娛樂與互動領域等課程，由資深的業界人士，傳授業界的知識與經驗，讓創作者將創意實踐，完成理想目標。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EduPlace