import React from 'react'

function Intro() {
  return (
    <section id="intro">
      <div className="about_intro">
        <div className="content">
          <div className="left_word">
            <div className="title">
              即時運算的寫實環境，在拍攝現場呈現
            </div>
            <p>虛擬製片 (Virtual production) 是一項全球嶄新的影視技術；取代傳統綠幕，虛擬製片用大型 LED 屏幕結合遊戲引擎 Unreal Engine，在拍攝現場呈現極具沉浸感的虛擬場景。包含導演、演員、3D 藝術家等所有參與影像製作的工作人員，均可在拍攝當下確認視覺效果，共同協作調整，而無需等到後期製作。</p>
          </div>
          <div className="right_img">
            <img src={process.env.PUBLIC_URL+'images/intro/intro01.png'} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro