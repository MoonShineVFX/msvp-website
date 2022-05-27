import React,{useState} from 'react'
import EduChart from './EduChart'
import EduPlace from './EduPlace'
import EduBigBg from './EduBigBg'
import LatestCourse from './LatestCourse'

import EduPortfolio from './EduPortfolio'
import EduPortfolioSingle from './EduPortfolioSingle'


import EduWorkjsonsData from '../Education/EduWorksData.json'

function Education() {
  const [isOpen , setIsOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([]);
  const [workData, setWorkData] = useState(EduWorkjsonsData);
  // 開啟單作品
  const handleAddClick = (dataId) => {
    const results  =   workData.works.find((d)=>{
      return d.id === dataId
    })
    setSearchResults(results)
    setIsOpen(!isOpen)
  };
   // 開啟作品modal
   const handleOpen = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div id="Pages_education">
      {
        isOpen ?  <EduPortfolioSingle data={searchResults} handler={handleOpen} visible={isOpen} /> : null
      }
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
      <EduBigBg />
      <EduPortfolio  workData={EduWorkjsonsData} handler={handleAddClick}/>
    </div>
  )
}

export default Education