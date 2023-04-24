import React from 'react'
import { useTranslation,Trans } from 'react-i18next';
import Accordion from './Accordion';
import {itemdata} from './accItemData'
function Guidelines() {
  const { t } = useTranslation();

  return (
    <div id="Pages_guidelines">
      <div 
        className="min-h-[30vh] md:min-h-[65vh] bg-center bg-no-repeat bg-cover " 
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/guidelines/guidelines01.jpg'})`}}
      >
      </div>
      <div className='w-10/12 mx-auto '>
        <div className="text-white text-center text-3xl font-bold mb-14 md:mb-28 mt-14 ">{t(`guide_title`)}</div>
        <Accordion items={itemdata} />
      </div>

    </div>
  )
}

export default Guidelines