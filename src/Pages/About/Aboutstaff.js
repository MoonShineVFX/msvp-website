import React,{useState,useEffect} from 'react'
import { motion,AnimatePresence } from "framer-motion"
import { LoadingAnim } from '../../Helper/HtmlComponents';
//Helper
import { getAllTeamForDashboard,getAboutUser} from '../../Helper/getfunction'
function Aboutstaff() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('1');


  const filterCategory = (categoryID)=>{
    if(categoryID === '1'){
      setCurrentCategory('1')
      setFilteredData(data)
      
      return
    }
    const filterData =  data.filter((value)=>
      value.team.includes(categoryID)
    )
    setCurrentCategory(categoryID)
    setFilteredData(filterData);
    
  }

  useEffect(()=>{
    getAboutUser((res)=>{
      setData(res)
      setFilteredData(res)
    })
    getAllTeamForDashboard((res)=>{
      setCategoryData(res)
    })

  },[])
  console.log(data)
  return (
    <section id="About_staff">
      <div className=" xs:text-2xl xs:font-semibold xs:text-center">
        <h1 className='text-2xl font-semibold'> Our Team</h1>
      </div>
      <div className="  xs:mt-5">
        <ul className='w-full grid grid-cols-3 md:grid-cols-5 my-6 gap-3 '>
          {
            categoryData ? 
            categoryData.map((item,index)=>{
              const{id, name , name_cht } = item
              return(
                <li key={name+id} 
                    onClick={()=> filterCategory(id)} 
                    className={"cursor-pointer text-md hover:text-white box-border p-2 transition-all text-center  " + (currentCategory === id ? ' text-white  border-b ' : 'text-zinc-300  border-0  ' )}>
                  { name}
                </li>
              )
            }): <LoadingAnim />
          }
        </ul>
      </div>
      <div  className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <AnimatePresence>
        {
          filteredData?
          filteredData.map((item)=>{
            return(
              <div  
                key={item.id} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                
                className=" aspect-[9/13] bg-cover bg-center bg-no-repeat  rounded-md relative  group brightness-90  hover:brightness-110"
                style={{backgroundImage: `url(${item.imgpath})`}}
              >
                <div className=" flex flex-col h-full justify-end items-center pb-4 group-hover:pb-8 transition-all">
                  <div className="name md:text-3xl font-bold">{item.nickname}</div>
                  <div className="bar w-3 h-1 my-3 bg-white"></div>
                  <div className="text-sm ">{item.subtext}</div>
                </div>
              

              </div>
            )
          }) : <div>Loading...</div>
        }
        </AnimatePresence>
      </div>

    </section>
  )
}

export default Aboutstaff