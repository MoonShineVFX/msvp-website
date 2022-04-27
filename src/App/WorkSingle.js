import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
function WorkSingle({data,handler}) {
  const {title,link,desc } = data
  // let finalIntro= intro.replace('\\n', '\n')
  const [active , setActive] = useState(false)

  // 點擊按鈕或背景關閉
  const handleClick= () =>{
    setActive(!active)
    setTimeout(() => {
      handler()
    }, 450);
    // handler()
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(!active)
    }, 500);
    return () => clearTimeout(timer);
  },[]);
  return (
    <div className="workitem">
      <div className={active ? "blackbg active" : "blackbg"} onClick={handleClick}></div>
      <div className={active ? "itemContent active" : "itemContent"}>
        <div className="closeBtn" onClick={handleClick}>X</div>
        <div className="thumb player-wrapper" >
          <ReactPlayer 
            className='react-player'
            url={link} 
            width= "100%"
            height= "100%"
            controls={true}
            volume={0.4}
          />
        </div>
        <article>
          <div className="title">{title}</div>
          <div className="description">{desc}</div>
        </article>
      </div>
    </div>
  )
}

export default WorkSingle
