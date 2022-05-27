import React,{useState} from 'react'

function EduPortfolio({workData,handler}) {
  const {works} = workData
  const [data, setData] = useState(works);
  // 點擊作品
  const handleClick= (dataId) =>{
    handler(dataId)
  }
  return (
    <div className='edu_Portfolio'>
      <h1>Student Gallery</h1>
      <div className="edu_Portfolio_list">
        <ul>
          {data ? 
            data.map((item,index)=>{
            return(
              <li 
                className='edu_Portfolio_item'
                onClick={()=>handleClick(item.id) }
                data-aos="zoom-out-up"
                data-aos-delay={index+'00'}
              >
                <div className="item_bg" style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/education/eduworks/'+ item.image})`}}>
                </div>
                <div className='title'> {item.title}</div>
              </li>
            )
          }):""}
        </ul>
      </div>
    </div>
  )
}

export default EduPortfolio