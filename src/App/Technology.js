import React,{useState} from 'react'
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next';
function Technology({techData}) {
  const [currentId, setCurrentId] = useState(0);
  const { t } = useTranslation();
  const {tech} = techData
  const handleClick= (index) =>{
    setCurrentId(index)
    // handler(dataId)
  }
  return (
    <section id="technology">
      <h1>{t('section_title5')}</h1>
      <div className="technology_content">
        <div className="technology_list">
          <ul>
            {techData ? 
              tech.map((item,index)=>{
                const {id,title,desc,image}=item
                return(
                  <li onClick={()=>handleClick(index)}>{title}</li>
                )
              }): null
            }
          </ul>
        </div>
        <div className="technology_view">
          <div className='player-wrapper'>
            <ReactPlayer 
              url="https://vimeo.com/524168527"
              controls 
              width='100%'
              height='100%'
              className='react-player'
            />
          </div>
          <div className="caption">
            <div className="title">{tech[currentId].title}</div>
            <div className="desc">{tech[currentId].desc}</div>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Technology