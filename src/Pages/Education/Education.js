import React,{useState} from 'react'
import EduChart from './EduChart'
import EduPlace from './EduPlace'
import LatestCourse from './LatestCourse'
import EduPortfolio from './EduPortfolio'

import worksjsonData from '../../App/worksData.json'

function Education() {

  return (
    <div id="Pages_education">
      <div 
        className="pageHeader" 
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/intro/intro01.jpg'})`}}
      >
      <div className="caption">

        <div className="title">Education System</div>
        <div className='desc'>因市場專業人才的稀缺，夢想開始重視人才培育。自 2018 年舉辦推廣課程，並結合自身專案經歷，發展出一套教育系統培養符合市場的即戰力。</div>

      </div>

      </div>

      <EduChart />
      <EduPlace />
      <LatestCourse />
      <EduPortfolio  workData={worksjsonData}/>
    </div>
  )
}

export default Education