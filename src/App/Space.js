import React from 'react'

function Space({spaceData,handler}) {
  const {space} = spaceData
  // 點擊空間
  const handleClick= (dataId) =>{
    handler(dataId)
  }
  return (
    <section id="space">
      <h1>攝影棚空間配置</h1>
      <div className="space_list">
        {
          space?
            space.map((item,index)=>{
              const {id,title,image}= item
              return(
                <div className="space_item"  onClick={()=>handleClick(id)}>
                  <div className="space_item_bg" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/space/'+ image })`}}></div>
                  <div className="title" >{title}</div>
                </div>
              )
            }) : ""
        }

      </div>
      
    </section>
  )
}

export default Space