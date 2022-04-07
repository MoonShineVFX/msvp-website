import React from 'react'

function Header() {
  return (
    <div id="header">
      <div className="vimeo-wrapper">
        <iframe src="https://player.vimeo.com/video/500283225?background=1&autoplay=1&loop=1&byline=0&title=0"
                frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="logo">
        <a href="https://www.moonshine.tw/" target="_blank"><img src={process.env.PUBLIC_URL + '/images/2022/svg-08.svg'} alt="" /></a>

      </div>
      <div className="caption">
        <div className="subtitle">影視製作的未來</div>
        <div className="title">虛擬製片 VIRTUAL PRODUCTION</div>
        <p>不需綠幕也不需後期製作，在攝影棚內即時拍出寫實場景</p>
      </div>
    </div>
  )
}

export default Header
