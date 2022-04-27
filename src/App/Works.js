import React,{useState} from 'react'

function Works({workData,handler}) {
  const [data, setData] = useState(workData);
  const [currentCategory, setCurrentCategory] = useState('ALL');
  const filtersData = [
    {cht_name:"全部",eng_name:"ALL", status: false},
    {cht_name:"線上發表會",eng_name:"PRESENTATION", status: false},
    {cht_name:"虛擬演唱會",eng_name:"METAVERSE CONCERT", status: false},
    {cht_name:"廣告",eng_name:"ADVERTISEMENT", status: false},
    {cht_name:"戲劇與電影",eng_name:"DRAMA", status: false},
    {cht_name:"實習計畫",eng_name:"INTERNSHIP", status: false}
  ];
  const filterCategory = (category)=>{
    if(category === 'ALL'){
      setCurrentCategory('ALL')
      setData(workData)
      
      return
    }
    const filteredData =  workData.filter((value)=>{
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
          {filtersData.map((item, index)=>{
            return (
              <li 
                type="button" 
                className={currentCategory === item.eng_name ? 'button active' : 'button'}
                onClick={()=> filterCategory(item.eng_name)} 
                key={index}>{item.cht_name}</li>
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
              className={currentCategory === item.category || 'ALL' ? 'item active' : 'item'}
              onClick={()=>handleClick(item.id) }
            >
              <div className="item_bg" style={{backgroundImage: `url(${process.env.PUBLIC_URL + item.image})`}}>
              </div>
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