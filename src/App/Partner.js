import React from 'react'
import { useTranslation } from 'react-i18next';
function Partner() {
  const { t } = useTranslation();
  return (
    <section id="partner">
      <h1>{t('section_title6')}</h1>
      <div className="partner_list">
        <ul>
          <li>
            <img src={process.env.PUBLIC_URL+'/images/partner/Acer.png'} alt="" />
          </li>
          <li>
            <img src={process.env.PUBLIC_URL+'/images/partner/ASUS.png'} alt="" />
          </li>
          <li>
            <img src={process.env.PUBLIC_URL+'/images/partner/rog.png'} alt="" />
          </li>
          <li>
            <img src={process.env.PUBLIC_URL+'/images/partner/Gamania.png'} alt="" />
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}

export default Partner