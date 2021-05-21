import React from 'react'

function Chapter1() {
  return (
    <section id="chapter1">
      <div className="flex-content">
        <div className="left" data-aos="fade-right">
          <div className="title" >即時運算的寫實環境，在拍攝現場呈現</div>
          <p>
            虛擬製片 (Virtual production) 是一項全球嶄新的影視技術；取代傳統綠幕，虛擬製片用大型 LED 屏幕結合遊戲引擎 Unreal Engine，在拍攝現場呈現極具沉浸感的虛擬場景。包含導演、演員、3D 藝術家等所有參與影像製作的工作人員，均可在拍攝當下確認視覺效果，共同協作調整，而無需等到後期製作。
          </p>
        </div>
        <div className="right"></div>
      </div>
      <div className="flex-content marginTop50">
        <div className="fleximg" data-aos="fade-right"><img src={process.env.PUBLIC_URL + '/images/pic/pic01.jpg'}  alt="" /></div>
        <div className="fleximg posY" data-aos="fade-left"><img src={process.env.PUBLIC_URL + '/images/pic/pic02.jpg'} alt="" /></div>
      </div>

      <div className="flex-content marginTop100">
        <div className="left">
          
        </div>
        <div className="right" data-aos="fade-left">
          <div className="title" >夢想動畫的虛擬製片</div>
          <p>
          夢想動畫是台灣率先引進虛擬製片技術的影像公司之一，並且已將此技術應用在多個商業專案，包含大型發表會、廣告與演唱會製作。夢想動畫完整的虛擬製片包含：
          </p>
          <ul>
            <li>虛擬場景製作與架設</li>
            <li>實體攝影機與虛擬攝影機連動</li>
            <li>即時改變虛擬場景的燈光與物件</li>
          </ul>
        </div>
      </div>
      <div className="flex-content marginTop100">
        <div className="fleximg posY" data-aos="fade-right"><img src={process.env.PUBLIC_URL + '/images/pic/pic03.jpg'} alt="" /></div>
        <div className="fleximg" data-aos="fade-left"><img src={process.env.PUBLIC_URL + '/images/pic/pic04.jpg'} alt="" /></div>
      </div>
      
      
    </section>
  )
}

export default Chapter1
