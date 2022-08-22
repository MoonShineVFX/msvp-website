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
      <div className="unitHeader xs:text-2xl xs:font-semibold xs:text-center">
        <h1> Our Team</h1>
      </div>
      <div className="about_department_list  xs:mt-5">
        <ul className='w-full'>
          {
            categoryData ? 
            categoryData.map((item,index)=>{
              const{id, name , name_cht } = item
              return(
                <li key={name+id} 
                    onClick={()=> filterCategory(id)} 
                    className={"cursor-pointer text-sm hover:text-white box-border p-2 transition-all " + (currentCategory === id ? ' text-white  border rounded-full ' : 'text-zinc-500  border-0  ' )}>
                  { name}
                </li>
              )
            }): <LoadingAnim />
          }
        </ul>
      </div>
      <motion.div layout className="aboutstaff_list">
        <AnimatePresence>
        {
          filteredData?
          filteredData.map((item)=>{
            return(
              <motion.div  
                key={item.id} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                
                className="aboutstaff_item"
                style={{backgroundImage: `url(${item.imgpath})`}}
              >
                <div className="person_info">
                  <div className="name">{item.nickname}</div>
                  <div className="bar"></div>
                  <div className="name_subtext">{item.subtext}</div>
                </div>
              

              </motion.div>
            )
          }) : <div>Loading...</div>
        }
        </AnimatePresence>
      </motion.div>

    </section>
  )
}

export default Aboutstaff