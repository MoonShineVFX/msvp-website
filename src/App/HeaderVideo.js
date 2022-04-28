import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
function HeaderVideo({handler}) {
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
      <div className={active ? "header itemContent active" : "itemContent"}>
        <div className="closeBtn" onClick={handleClick}>X</div>
        <div className="thumb player-wrapper" >
          <ReactPlayer 
            className='react-player'
            url='https://vimeo.com/500283225' 
            width= "100%"
            height= "100%"
            controls={true}
            volume={0.4}
          />
        </div>

      </div>
    </div>
  )
}

export default HeaderVideo
