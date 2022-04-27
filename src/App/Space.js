import React from 'react'

function Space({handler}) {

  // 點擊空間
  const handleClick= (dataId) =>{
    handler(dataId)
  }
  return (
    <section id="space">
      <h1>攝影棚空間配置</h1>
      <div className="space_list">
        <div className="space_item"  onClick={()=>handleClick(1)}>
          <div className="space_item_bg" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pic/pic03.jpg'})`}}></div>
          <div className="title" >A 棚 CAVE</div>
        </div>
        <div className="space_item" onClick={()=>handleClick(2)}>
          <div className="space_item_bg" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pic/pic02.jpg'})`}}></div>
          <div className="title" >B 棚 CUBE</div>
        </div>
      </div>
      
    </section>
  )
}

export default Space