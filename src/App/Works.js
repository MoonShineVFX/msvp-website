import React,{useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
// import categoryData from './category.json'
import { LoadingAnim } from '../Helper/HtmlComponents';
//Helper
import { getCategory,getWorks} from '../Helper/getfunction'

function Works() {
  const [workData, setWorkData] = useState([]);
  const [filteredWorkData, setFilteredWorkData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('1');
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const { t,i18n } = useTranslation();
  const filterCategory = (categoryID)=>{
    if(categoryID === '1'){
      setCurrentCategory('1')
      setFilteredWorkData(workData)
      
      return
    }
    const filteredData =  workData.filter((value)=>
      value.category.includes(categoryID)
    )
    setCurrentCategory(categoryID)
    setFilteredWorkData(filteredData);
    
  }
  // 點擊作品
  const handleClick= (dataId) =>{
    console.log(dataId)
  }
  useEffect(()=>{
    getWorks((res)=>{
      setWorkData(res)
      setFilteredWorkData(res)
    })
    getCategory((res)=>{
      setCategoryData(res)
    })

  },[])

  return (
    <section id="works">
      <div id='catrgoriesList' className=''>
        <ul className='flex justify-center items-center gap-4 h-14 flex-wrap text-xs xs:w-5/6 xs:mx-auto xs:mb-10 xs:text-sm xs:justify-start'>
        {
          categoryData ? 
          categoryData.map((item,index)=>{
            const{id, name , name_cht } = item
            return(
              <li key={name+id} 
                  onClick={()=> filterCategory(id)} 
                  className={"cursor-pointer  hover:text-white " + (currentCategory === id ? ' text-white border-b ' : 'text-zinc-500  ' )}>
                {i18n.language === 'zh-TW' ? name_cht : name}
              </li>
            )
          }): <LoadingAnim />
        }
        <li></li><li></li><li></li>
        </ul>
      </div>
      <div className="works_list">
        {filteredWorkData ? 
          filteredWorkData.map((item,index)=>{
          return(
            <div 
              className={currentCategory === item.team || 'ALL' ? 'item' : 'item'}
              
              data-aos="zoom-out-up"
              data-aos-delay={index+'00'}
              key={index}
              onClick={() => {
                setShowModal(true);
                setCurrentMovie(item);
              }}
            >
              <div className="item_bg" style={{backgroundImage: `url(${item.imgpath})`}}>
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