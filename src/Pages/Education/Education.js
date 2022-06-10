import React,{useState} from 'react'
import { useTranslation,Trans } from 'react-i18next';
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
  const { t } = useTranslation();
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
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/education/education01.jpg'})`}}
      >
      <div className="caption">

        <div className="title">{t(`edu_title`)}</div>
        <div className='desc'>{t(`edu_desc`)}</div>

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