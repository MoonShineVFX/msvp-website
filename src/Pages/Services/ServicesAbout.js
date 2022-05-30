import React from 'react'
import { useTranslation,Trans } from 'react-i18next';
function ServicesAbout({aboutData}) {
  const {about} =aboutData
  const { t } = useTranslation();
  return (
    <section id="servives_about">
      {
        about?
        about.map((item,index)=>{
          const {title,desc,image} = item
          return(
            <div className='about_item'>
              <div className="about_item_text" data-aos="fade-right">
                <div className="title"> {t(`${title}`)}</div>
                <div className="desc">
                  <Trans i18nKey={`${desc}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </Trans>
                </div>
               
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

export default ServicesAbout