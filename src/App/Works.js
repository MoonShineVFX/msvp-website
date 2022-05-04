import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import categoryData from './category.json'

function Works({workData,handler}) {
  const {works} = workData
  const [data, setData] = useState(works);
  const [currentCategory, setCurrentCategory] = useState('ALL');
  const { t } = useTranslation();
  const filterCategory = (category)=>{
    if(category === 'ALL'){
      setCurrentCategory('ALL')
      setData(works)
      
      return
    }
    const filteredData =  works.filter((value)=>{
      return value.category === category;
    })
    setCurrentCategory(category)
    setData(filteredData);
    
    
  }
  // 點擊作品
  const handleClick= (dataId) =>{
    handler(dataId)
  }
  return (
    <section id="works">
      <div className="works_categories_list">
        <ul>
          {categoryData.category.map((item, index)=>{
            return (
              <li 
                type="button" 
                className={currentCategory === item.eng_name ? 'button active' : 'button'}
                onClick={()=> filterCategory(item.eng_name)} 
                key={index}
                > 
                {t(`${item.cht_name}`)}
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="works_list">
        {data ? 
          data.map((item,index)=>{
          return(
            <div 
              className={currentCategory === item.category || 'ALL' ? 'item' : 'item'}
              onClick={()=>handleClick(item.id) }
              data-aos="zoom-out-up"
              data-aos-delay={index+'00'}
            >
              <div className="item_bg" style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/works/'+ item.image})`}}>
              </div>
              <div className='title'> {item.title}</div>
            </div>
          )
        }):""}
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      
      </div>
      
    </section>
  )
}

export default Works