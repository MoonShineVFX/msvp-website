import React from 'react'
import { useTranslation } from 'react-i18next';
function EduChart() {
  const { t } = useTranslation();
  return (
    <section className='chartlist'>
      <ul className=' flex justify-between items-start' data-aos="fade-up">
        <li  className='w-1/3'>
          <div className="flex flex-col items-center">
            <div className='w-1/3 mb-4'>
              <img src={process.env.PUBLIC_URL +'/images/education/icon01.svg'} alt="" className='max-w-full mx-auto' />
            </div>
           
            <div className='text-sm md:text-lg font-semibold'>{t('chartlist_item1_title')}</div>
            <div className="text-sm text-white/70 text-center">{t('chartlist_item1_desc')}</div>
            <div className='text-2xl font-bold mt-3'>30+</div>
            <div className='text-xs'>{t('chartlist_item1_subtext')}</div>
          </div>
        </li>
        <li  className='w-1/3'>
          <div className="flex flex-col items-center">
            <div className='w-1/3 mb-4'>
              <img src={process.env.PUBLIC_URL +'/images/education/icon02.svg'} alt="" className='max-w-full mx-autol'/>
            </div>
            <div className='text-sm md:text-lg font-semibold'>{t('chartlist_item2_title')}</div>
            <div className="text-sm text-white/70 text-center">{t('chartlist_item2_desc')}</div>
            <div className='text-2xl font-bold mt-3'>1000+</div>
            <div className='text-xs'>{t('chartlist_item2_subtext')}</div>
          </div>
        </li>
        <li  className='w-1/3'>
          <div className="flex flex-col items-center">
            <div className='w-1/3 mb-4'>
              <img src={process.env.PUBLIC_URL +'/images/education/icon03.svg'} alt="" className='max-w-full mx-auto'/>
            </div>
            <div className='text-sm md:text-lg font-semibold'>{t('chartlist_item3_title')}</div>
            <div className="text-sm text-white/70 text-center">{t('chartlist_item3_desc')}</div>
            <div className='text-2xl font-bold mt-3'>80%</div>
            <div className='text-xs'>{t('chartlist_item3_subtext')}</div>
          </div>
        </li>
      </ul>

    </section>
  )
}

export default EduChart