import React,{useContext, useEffect, useState} from 'react'
import Slider from "react-slick";
import { FaChevronRight ,FaChevronLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import aboutjsonData from '../about.json'
function PureSliderAbout(props) {
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation();
  const {about} = aboutjsonData
  const dataArray = [
    {
      title:'跨界完整虛擬製作製程',
      desc:'夢想動畫是台灣率先引進虛擬製片技術的影像公司，並打造全台首座夢想虛擬實景攝影棚 (MOONSHINE XR STUDIO) ，且應用於多個商業專案，包含大型發表會、廣告、戲劇、電影與演唱會製作。我們以自身動畫特效背景為基石，結合技術研發，能提供從前期創意提案、虛擬場景製作到現場拍攝的完整服務。',
      image: 'about01.png'
    },
    {
      title:'專業完善的設備與技術',
      desc:'夢想虛擬實景攝影棚備有兩種尺寸的空間，都內建專業完善的設備。除了提供場地及設備租借外，更可選擇團隊的技術加值服務，我們配合 Mo-Sys 系統獨步研發一套完整的同步串聯功能以及成熟的 XR 延展技術。',
      image: 'about02.png'
    },
    {
      title:'效率與高品質內容製作',
      desc:'使用 Pistage 3D 快速渲染引擎與及 Unreal Engine 創造所見即得的拍攝環境，能夠自由調整燈光與場景部件，並在現場看見變化，縮短後期製作時間，提高溝通效率。夢想擁有完整的場景建置團隊，從導演到美術與建模都能一手包辦，並且擁有豐富製作經驗，在專案執行上具備專業及效率。',
      image: 'about03.png'
    },
    {
      title:'專業協助建置虛擬攝影棚',
      desc:'我們有豐富的專案經驗可以擔任設備顧問與技術指導，協助客戶從 0 到 1 完整的建置虛擬攝影棚與制定相關規劃。',
      image: 'about04.png'
    }
  

  ]
  const [length, setLength] = useState(dataArray.length)

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