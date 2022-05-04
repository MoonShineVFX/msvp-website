import React from 'react'
import { useTranslation } from 'react-i18next';
function Intro() {
  const { t } = useTranslation();
  return (
    <section id="intro">
      <div className="about_intro">
        <div className="content">
          <div className="left_container" data-aos="fade-right">
            <div className="left_word">
              <div className="title">
              {t('intro_title')}
              </div>
              <p>{t('intro_desc')}</p>
            </div>
          </div>

          <div className="right_img" data-aos="fade-right">
            <img src={process.env.PUBLIC_URL+'/images/intro/intro01.png'} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro