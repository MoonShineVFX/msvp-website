import React from 'react'
import ReactPlayer from 'react-player'
function VideoHeader({videourl}) {
  return (
    <div id="header">
      <div className="vimeo-wrapper">
        {/* <iframe src="https://player.vimeo.com/video/706129402?background=1&autoplay=1&loop=1&byline=0&title=0"
                frameBorder="0" allowFullScreen></iframe> */}
        <ReactPlayer
          url={videourl}
          className='react-player'
          playing
          muted
          loop
          width='100vw'
          height='56.25vw'
          config={{ vimeo: { playerOptions: { background: true }}}}
        />
      </div>

    </div>
  )
}

export default VideoHeader