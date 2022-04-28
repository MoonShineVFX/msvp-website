import React from 'react'

function Header({handler}) {
  // 點擊作品
  const handleClick= () =>{
    handler()
  }
  return (
    <div id="header">
      <div className="vimeo-wrapper">
        <iframe src="https://player.vimeo.com/video/500283225?background=1&autoplay=1&loop=1&byline=0&title=0"
                frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="caption">

        <div className="title">VIRTUAL PRODUCTION</div>
        <p>全台灣第一座大型 LED 攝影棚，提供虛擬製片 (Virtual Production) 多樣整合技術，如攝影機定位系統與 XR 延展技術並優化 Virtual Production 製程，從內容製作到串聯投播，提供最完整服務。</p>
        <button type='button' className="header_playbtn" onClick={()=>handleClick()}>播放影片</button>
      </div>
    </div>
  )
}

export default Header
