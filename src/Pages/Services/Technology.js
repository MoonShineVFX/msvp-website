import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';
function Technology({techData}) {
  const [currentId, setCurrentId] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();
  const {tech} = techData
  const handleClick= (index) =>{
    setCurrentId(index)
    setLoaded(false)
    // handler(dataId)
  }

  const handleImageLoaded =()=> {
    console.log('loaded');
    setLoaded(true);
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
                  <li 
                    key={index}
                    onClick={()=>handleClick(index)}
                    className={currentId === index ? "active" : ""}
                  >
                    {t(`${title}`)}
                  </li>
                )
              }): null
            }
          </ul>
        </div>
        <div className="technology_view">
          <div className="technology_gif" >
              <img 
                src={process.env.PUBLIC_URL +'/images/tech/'+ tech[currentId].image} alt=""
                style={{display: loaded? 'block': 'none'}}
                onLoad={handleImageLoaded}
              />
          </div>
          {!loaded && <div
            style={{
              width: '100%', 
              height: '150px',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <img src={process.env.PUBLIC_URL +'/images/loading.gif'} alt="" />
          </div> }
         
          
          <div className="caption">
            <div className="title">{t(`${tech[currentId].title}`)}</div>
            <div className="desc">{t(`${tech[currentId].desc}`)}</div>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Technology