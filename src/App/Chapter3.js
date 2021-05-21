import React from 'react'
import ReactPlayer from 'react-player'
function Chapter3() {
  return (
    <section id="chapter3" data-aos="fade">
      <div className="title">
        夢想動畫虛擬製片案例
      </div>
      <div className="works">
        <div className="listItem">
          <div className='player-wrapper'>
            <ReactPlayer 
              url="https://vimeo.com/524168527"
              controls 
              width='100%'
              height='100%'
              className='react-player'
              />
          </div>
          
        </div>
        <div className="listItem">
          <div className='player-wrapper'>
            <ReactPlayer 
              url="https://vimeo.com/500283225"
              controls 
              width='100%'
              height='100%'
              className='react-player'
              />
          </div>

        </div>

      </div>
      
      
    </section>
  )
}

export default Chapter3
