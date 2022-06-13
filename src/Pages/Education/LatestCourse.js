import React from 'react'
import { useTranslation } from 'react-i18next';
function LatestCourse({courseData,handler}) {
  const {course} = courseData
  const { t } = useTranslation();
  // 點擊course
  const handleClick= (dataId) =>{
    handler(dataId)
  }
  return (
    <div className='edu_latestCourse'>
      <h1>{t('FeaturedCourse')}</h1>
      <div className="latestCourse_list">
        <ul>
            {
              course ? 
              course.map((item,index)=>{
                const {id,title,cover} = item
                return(
                  <li 
                    key={id}
                    className="latestCourse_item" data-aos="fade-up"
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/education/course/'+ cover})`}}
                    onClick={()=>handleClick(item.id)}
                  >
                    <div className="latestCourse_info">
                      <div className="title">{title}</div>
                    </div>
                  </li >
                )
              }) :""
            }


        </ul>
      </div>
    </div>
  )
}

export default LatestCourse