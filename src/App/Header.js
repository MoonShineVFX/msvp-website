import React from 'react'
import { useTranslation } from 'react-i18next';
function Header({handler}) {
  const { t, i18n } = useTranslation();
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
        <p>{t('header_desc')}</p>
        <button type='button' className="header_playbtn" onClick={()=>handleClick()}>{t('play_video')}</button>
      </div>
    </div>
  )
}

export default Header
