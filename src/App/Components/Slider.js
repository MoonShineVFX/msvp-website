import React, { useState, useEffect, useRef } from 'react'

function Slider() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const TOTAL_SLIDES = 3 
  const next = () => {
    if ( current >= TOTAL_SLIDES ) return
    else setCurrent(current + 1)
  }
  
  const prev = () => {
    if ( current === 0 ) return
    else setCurrent(current - 1)
  }
  
  const desired = e => {
    setCurrent(Number(e.target.id))
  }
  const dataArray = [
    {
      title:'即時運算的寫實環境0',
      desc:'虛擬製片 (Virtual production) 是一項全球嶄新的影視技術；取代傳統綠幕，虛擬製片用大型 LED 屏幕結合遊戲引擎 Unreal Engine，在拍攝現場呈現極具沉浸感的虛擬場景。包含導演、演員、3D 藝術家等所有參與影像製作的工作人員，均可在拍攝當下確認視覺效果，共同協作調整，而無需等到後期製作。'
    },
    {
      title:'即時運算的寫實環境1',
      desc:'虛擬製片 (Virtual production) 是一項全球嶄新的影視技術；取代傳統綠幕，虛擬製片用大型 LED 屏幕結合遊戲引擎 Unreal Engine，在拍攝現場呈現極具沉浸感的虛擬場景。包含導演、演員、3D 藝術家等所有參與影像製作的工作人員，均可在拍攝當下確認視覺效果，共同協作調整，而無需等到後期製作。'
    },
    {
      title:'即時運算的寫實環境2',
      desc:'虛擬製片 (Virtual production) 是一項全球嶄新的影視技術；取代傳統綠幕，虛擬製片用大型 LED 屏幕結合遊戲引擎 Unreal Engine，在拍攝現場呈現極具沉浸感的虛擬場景。包含導演、演員、3D 藝術家等所有參與影像製作的工作人員，均可在拍攝當下確認視覺效果，共同協作調整，而無需等到後期製作。'
    },
    {
      title:'即時運算的寫實環境3',
      desc:'虛擬製片 (Virtual production) 是一項全球嶄新的影視技術；取代傳統綠幕，虛擬製片用大型 LED 屏幕結合遊戲引擎 Unreal Engine，在拍攝現場呈現極具沉浸感的虛擬場景。包含導演、演員、3D 藝術家等所有參與影像製作的工作人員，均可在拍攝當下確認視覺效果，共同協作調整，而無需等到後期製作。'
    }
  
  ]
  useEffect(() => {
    ref.current.style.transition = 'all 0.2s ease-in-out'
    ref.current.style.transform = `translateX(-${current}00%)`
  }, [current])
  return (
    <div id='slider_wrapper'>
      <div className="about_detail">
        <div className="about_detail_textcontent">
          <div className="title">
            {dataArray[current].title}
          </div>
          <div className="desc">
            {dataArray[current].desc}
          </div>
        </div>
        <div className='about_detail_list'>
          <div className="frame">
            <div className='box-container' ref={ref}>
                  
                <div className='box' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pic/pic03.jpg'})`}}></div>
                <div className='box' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pic/pic03.jpg'})`}}>2</div>
                <div className='box' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pic/pic03.jpg'})`}}></div>
                <div className='box' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/pic/pic03.jpg'})`}}></div>
              </div>
            </div>
          </div>

      </div>
      
      <div className='button-container'>
        <div className='button' onClick={prev}>Left</div>
        <div className='button' onClick={next}>Right</div>
      </div>
      <div className='button-2-container'>
        {[0, 1, 2, 3].map(num => (
          <div
            className={`button-2 ${num === current && 'active'}`}
            onClick={desired}
            id={num}
            key={num}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider