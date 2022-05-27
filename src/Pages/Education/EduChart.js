import React from 'react'
import { useTranslation } from 'react-i18next';
function EduChart() {
  const { t } = useTranslation();
  return (
    <section className='chartlist'>
      <ul>
        <li data-aos="fade-up">
          <div className="chartlist_item">
            <img src={process.env.PUBLIC_URL +'/images/education/icon01.svg'} alt="" className='imgicon' />
            <div className='title'>{t('chartlist_item1_title')}</div>
            <div className='number'>30+</div>
            <div className='sub_text'>{t('chartlist_item1_subtext')}</div>
          </div>
        </li>
        <li data-aos="fade-up">
          <div className="chartlist_item">
            <img src={process.env.PUBLIC_URL +'/images/education/icon02.svg'} alt="" className='imgicon'/>
            <div className='title'>{t('chartlist_item2_title')}</div>
            <div className='number'>1000+</div>
            <div className='sub_text'>{t('chartlist_item2_subtext')}</div>
          </div>
        </li>
        <li data-aos="fade-up">
          <div className="chartlist_item">
            <img src={process.env.PUBLIC_URL +'/images/education/icon03.svg'} alt="" className='imgicon'/>
            <div className='title'>{t('chartlist_item3_title')}</div>
            <div className='number'>80%</div>
            <div className='sub_text'>{t('chartlist_item3_subtext')}</div>
          </div>
        </li>
      </ul>

    </section>
  )
}

export default EduChart