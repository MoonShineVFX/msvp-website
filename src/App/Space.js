import React from 'react'
import { useTranslation } from 'react-i18next';
function Space({spaceData,handler}) {
  const {space} = spaceData
  const { t } = useTranslation();
  // 點擊空間
  const handleClick= (dataId) =>{
    handler(dataId)
  }
  return (
    <section id="space">
      <h1>{t('section_title4')}</h1>
      <div className="space_list">
        {
          space?
            space.map((item,index)=>{
              const {id,title,image}= item
              return(
                <div className="space_item"  onClick={()=>handleClick(id)} data-aos="fade-up">
                  <div className="space_item_bg" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/space/'+ image })`}}></div>
                  <div className="title" >{t(`${title}`)}</div>
                </div>
              )
            }) : ""
        }

      </div>
      
    </section>
  )
}

export default Space