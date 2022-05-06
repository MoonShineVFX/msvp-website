import React from 'react'
import ReactPlayer from 'react-player'
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
        {/* <iframe src="https://player.vimeo.com/video/706129402?background=1&autoplay=1&loop=1&byline=0&title=0"
                frameBorder="0" allowFullScreen></iframe> */}
        <ReactPlayer
          url='https://vimeo.com/706129402'
          className='react-player'
          playing
          muted
          loop
          width='100vw'
          height='56.25vw'
          config={{ vimeo: { playerOptions: { background: true }}}}
        />
      </div>
      <div className="caption">

        <div className="title">{t('header_title')}</div>
        <p>{t('header_desc')}</p>
        <button type='button' className="header_playbtn" onClick={()=>handleClick()}>{t('play_video')}</button>
      </div>
    </div>
  )
}

export default Header
