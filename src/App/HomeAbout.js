import React from 'react'
import { useTranslation } from 'react-i18next';
function HomeAbout({aboutData}) {
  const {about} =aboutData
  const { t } = useTranslation();
  return (
    <section id="about">
      {
        about?
        about.map((item,index)=>{
          const {title,desc,image} = item
          return(
            <div className='about_item'>
              <div className="about_item_text" data-aos="fade-right">
                <div className="title"> {t(`${title}`)}</div>
                <div className="desc"> {t(`${desc}`)}</div>
               
              </div>
              <div className="about_item_img" data-aos="fade-left">
                <img src={process.env.PUBLIC_URL + '/images/about/'+image} alt="" />
              </div>
            </div>
          )
        }) : ""
      }
    </section>
  )
}

export default HomeAbout