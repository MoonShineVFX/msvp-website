import React from 'react'

function EduChart() {
  return (
    <section className='chartlist'>
      <ul>
        <li data-aos="fade-up">
          <div className="chartlist_item">
            <img src={process.env.PUBLIC_URL +'/images/education/icon01.svg'} alt="" className='imgicon' />
            <div className='title'>紮實技能培養</div>
            <div className='number'>30+</div>
            <div className='sub_text'>師資團隊</div>
          </div>
        </li>
        <li data-aos="fade-up">
          <div className="chartlist_item">
            <img src={process.env.PUBLIC_URL +'/images/education/icon02.svg'} alt="" className='imgicon'/>
            <div className='title'>業界專案實戰</div>
            <div className='number'>1000+</div>
            <div className='sub_text'>學員數</div>
          </div>
        </li>
        <li data-aos="fade-up">
          <div className="chartlist_item">
            <img src={process.env.PUBLIC_URL +'/images/education/icon03.svg'} alt="" className='imgicon'/>
            <div className='title'>產業人才媒合</div>
            <div className='number'>80%</div>
            <div className='sub_text'>就業率</div>
          </div>
        </li>
      </ul>

    </section>
  )
}

export default EduChart