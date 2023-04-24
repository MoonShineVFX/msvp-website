import React from 'react'
import { useTranslation,Trans } from 'react-i18next';
import Accordion from './Accordion';
import {itemdata} from './accItemData'
function Guidelines() {
  const { t } = useTranslation();

  return (
    <div id="Pages_guidelines">
      <div 
        className="min-h-[30vh] md:min-h-[65vh] bg-center bg-no-repeat bg-cover relative " 
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/guidelines/guidelines01.jpg'})`}}
      >
        <div 
          className=' absolute top-0 left-0  w-full min-h-[30vh] md:min-h-[70vh] z-50  '
          style={{background: "linear-gradient(180deg, rgba(0,0,0,0.0) 70%, rgb(0, 0, 0) 90%)"}}
          ></div>
      </div>
      <div className='w-10/12 mx-auto '>
        <div className="text-white text-center text-3xl font-bold mb-14 md:mb-28 mt-14 ">{t(`guide_title`)}</div>
        <Accordion items={itemdata} />
      </div>

    </div>
  )
}

export default Guidelines