import React from 'react'

function Header() {
  return (
    <div id="header">
      <div className="vimeo-wrapper">
        <iframe src="https://player.vimeo.com/video/500283225?background=1&autoplay=1&loop=1&byline=0&title=0"
                frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="caption">
        <p>不需綠幕也不需後期製作，在攝影棚內即時拍出寫實場景</p>
        <div className="title">虛擬製片 VIRTUAL PRODUCTION</div>
        <button type='button' className="header_playbtn">播放影片</button>
      </div>
    </div>
  )
}

export default Header
