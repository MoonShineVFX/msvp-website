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
    <div id="works">
      <div id='catrgoriesList' className='my-4'>
        <ul className='flex justify-start items-center gap-4  flex-wrap text-sm md:text-lg md:justify-center  mx-4 md:mx-0'>
        {
          categoryData ? 
          categoryData.map((item,index)=>{
            const{id, name , name_cht } = item
            return(
              <li key={name+id} 
                  onClick={()=> filterCategory(id)} 
                  className={"cursor-pointer  hover:text-white " + (currentCategory === id ? ' text-white border-b ' : 'text-zinc-400  ' )}>
                {i18n.language === 'zh-TW' ? name_cht : name}
              </li>
            )
          }): <LoadingAnim />
        }
        <li></li><li></li><li></li>
        </ul>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 ">
        {filteredWorkData ? 
          filteredWorkData.map((item,index)=>{
            if (item.is_social_link) { 
              return(
                <a
                  href={item.social_link} // 這裡設置超連結的 URL
                  target="_blank" // 打開新分頁
                  rel="noopener noreferrer" // 安全性要求
                  className={`bg-black w-full relative transition-all cursor-pointer overflow-hidden group ${
                    currentCategory === item.team || 'ALL' ? 'item' : 'item'
                  }`}
                  key={index}
                >
                  <div
                    className='bg-center bg-cover bg-no-repeat aspect-[13/9]  w-full h-full  group-hover:scale-110 brightness-90 group-hover:brightness-110 transition  '
                    style={{backgroundImage : `url(${item.imgpath})`}}
                  ></div>
                   <div className={"transition-all  group-hover:bottom-9 group-hover:opacity-100 opacity-0 font-light absolute left-2 bottom-2 text-shadow  lg:bottom-8 lg:left-8 text-base lg:text-lg" }> {item.title} </div>
                </a>
              )
            }else{
              return(

                <div 
                  className={`bg-black w-full  relative  transition-all cursor-pointer  overflow-hidden group ${currentCategory === item.team || 'ALL' ? 'item' : 'item'}`}
                  key={index}
                  onClick={() => {
                    setShowModal(true);
                    setCurrentMovie(item);
                  }}
                >
                  <div
                    className='bg-center bg-cover bg-no-repeat aspect-[13/9]  w-full h-full  group-hover:scale-110 brightness-90 group-hover:brightness-110 transition  '
                    style={{backgroundImage : `url(${item.imgpath})`}}
                  ></div>
                   <div className={"transition-all  group-hover:bottom-9 group-hover:opacity-100 opacity-0 font-light absolute left-2 bottom-2 text-shadow  lg:bottom-8 lg:left-8 text-base lg:text-lg" }> {item.title} </div>
                </div>
              )
            }

        }):""}
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      
      </div>
      
    </div>
  )
}

export default Works