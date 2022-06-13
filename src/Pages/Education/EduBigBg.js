import React from 'react'
import { useTranslation } from 'react-i18next';
import LatestCourse from './LatestCourse';





function EduBigBg({courseData,handler}) {
  const { t } = useTranslation();
  return (
    <div className='edu_intro_bigbg' >
      <div className="bg" style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/education/unreal01.png'})`}}></div>  
      <div className="intro_content">
        <div className="title" data-aos="fade-up">
          {t('edu_intro_title')}
        </div>
        <div className="desc" data-aos="fade-up" data-delay="300">
          {t('edu_intro_desc')}
        </div>
      </div>
      <LatestCourse courseData={courseData} handler={handler}/>

    </div>
  )
}

export default EduBigBg