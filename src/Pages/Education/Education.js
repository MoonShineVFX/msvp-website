import React,{useState} from 'react'
import { useTranslation,Trans } from 'react-i18next';
import EduChart from './EduChart'
import EduPlace from './EduPlace'
import EduBigBg from './EduBigBg'
import CourseSingjeModal from './CourseSingjeModal';
import EduPortfolio from './EduPortfolio'
import EduPortfolioSingle from './EduPortfolioSingle'


//data
import EduWorkjsonsData from './EduWorksData.json'
import coursejsonData from './course.json'

function Education() {
  const [isOpen , setIsOpen] = useState(false)
  const [isCourseOpen , setIsCourseOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([]);
  const [searchCourseResults, setSearchCourseResults] = useState([]);
  const [workData, setWorkData] = useState(EduWorkjsonsData);
  const [courseData, setCourseData] = useState(coursejsonData);
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

  //course open
  const handleSingleCourseClick = (dataId) =>{
    const results  =   courseData.course.find((d)=>{
      return d.id === dataId
    })
    setSearchCourseResults(results)
    setIsCourseOpen(!isCourseOpen)
  }
  const handleCourseNoColse = (dataId)=>{
    const results  =   courseData.course.find((d)=>{
      return d.id === dataId
    })
    setSearchCourseResults(results)
  }
  const handleCourseOpen = () => {
    setIsCourseOpen(!isCourseOpen)
  }
  const handleChangeArticle = (str,id) =>{
    if(str === 'next'){
      if(id === courseData.course.length){
        handleCourseNoColse(1)
      } else{
        handleCourseNoColse(id+1)
      }
    } else if(str === 'prev'){
      if( id === 1){
        handleCourseNoColse(courseData.course.length)
      } else{
        handleCourseNoColse(id-1)
      }
    }

  }


  return (
    <div id="Pages_education">
      {
        isOpen ?  <EduPortfolioSingle data={searchResults} handler={handleOpen} visible={isOpen} /> : null
      }
      {
        isCourseOpen ? <CourseSingjeModal data={searchCourseResults}  handler={handleCourseOpen} handleChangeArticle={handleChangeArticle}/> : null
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
      <EduBigBg  courseData={courseData} handler={handleSingleCourseClick}/>
      <EduPortfolio  workData={EduWorkjsonsData} handler={handleAddClick}/>
    </div>
  )
}

export default Education