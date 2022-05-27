import React from 'react'
import { useTranslation } from 'react-i18next';
function IntroBigBg({bgimgPath}) {
  const { t } = useTranslation();
  return (
    <div id='intro_bigbg' >
      <div className="bg" style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/intro/intro01.jpg'})`}}></div>  
      <div className="intro_content">
        <div className="title" data-aos="fade-up">
          {t('intro_title')}
        </div>
        <div className="desc" data-aos="fade-up" data-delay="300">
          {t('intro_desc')}
        </div>
      </div>

    </div>
  )
}

export default IntroBigBg