import React from 'react'
import ReactPlayer from 'react-player'
function Technology() {
  return (
    <section id="technology">
      <h1>技術規格</h1>
      <div className="technology_content">
        <div className="technology_list">
          <ul>
            <li>追蹤技術</li>
            <li>追蹤技術</li>
            <li>追蹤技術</li>
            <li>追蹤技術</li>
            <li>追蹤技術</li>
            <li>追蹤技術</li>
            <li>追蹤技術</li>
            <li>追蹤技術</li>
            <li>追蹤技術</li>
          </ul>
        </div>
        <div className="technology_view">
          <div className='player-wrapper'>
            <ReactPlayer 
              url="https://vimeo.com/524168527"
              controls 
              width='100%'
              height='100%'
              className='react-player'
            />
          </div>
          <div className="caption">
            <div className="title">追蹤技術</div>
            <div className="desc">是一項全球嶄新的影視技術；取代傳統綠幕，虛擬製片用大型 LED 屏幕結合遊戲引擎 Unreal Engine，在拍攝現場呈現極具沉浸感的虛擬場景。</div>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Technology