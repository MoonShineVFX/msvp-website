import React,{useState} from 'react'
import { motion,AnimatePresence } from "framer-motion/dist/framer-motion"
function Aboutstaff({aboutStaffData}) {

  const [data, setData] = useState(aboutStaffData);
  const [currentCategory, setCurrentCategory] = useState('ALL');
  const filterCategory = (category)=>{
    if(category === 'ALL'){
      setCurrentCategory('ALL')
      setData(aboutStaffData)
      
      return
    }
    const filteredData =  aboutStaffData.filter((value)=>{
      return value.team === category;
    })
    setCurrentCategory(category)
    setData(filteredData);
    
    
  }
  console.log(data)
  return (
    <section id="About_staff">
      <div className="unitHeader">
        <h1> Our Team</h1>
      </div>
      <div className="about_department_list">
        <ul>
          <li 
            className={currentCategory === 'ALL' ? 'button active' : 'button'}
            onClick={()=> filterCategory('ALL')} >ALL</li>
          <li 
            className={currentCategory === 'Tech' ? 'button active' : 'button'}
            onClick={()=> filterCategory('Tech')}>Tech Team</li>  
          <li 
            className={currentCategory === 'Animation' ? 'button active' : 'button'}
            onClick={()=> filterCategory('Animation')}>Animation Team</li>
          <li 
            className={currentCategory === 'Art' ? 'button active' : 'button'}
            onClick={()=> filterCategory('Art')}>Art Team</li>

          <li 
            className={currentCategory === 'Managment' ? 'button active' : 'button'}
            onClick={()=> filterCategory('Managment')}>Managment Team</li>
        </ul>
      </div>
      <motion.div layout className="aboutstaff_list">
        <AnimatePresence>
        {
          data?
          data.map((item)=>{
            return(
              <motion.div  
                key={item.id} 
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="aboutstaff_item"
                style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/aboutstaff/'+ item.image})`}}
              >
                <div className="person_info">
                  <div className="name">{item.nick_name}</div>
                  <div className="bar"></div>
                  <div className="name_subtext">{item.name_subtext}</div>
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