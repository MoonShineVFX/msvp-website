import React from 'react'

function LatestCourse() {
  return (
    <div className='edu_latestCourse'>
      <h1>Learn Unreal Engine</h1>

      <div className="latestCourse_list">
        <ul>

            <li 
              className="latestCourse_item"
              style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/education/course/c01.jpg'})`}}
            >
              <div className="latestCourse_info">
                <div className="title">2020 Unreal Engine Internship</div>
              </div>
            </li >

            <li  
              className="latestCourse_item"
              style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/education/course/c01.jpg'})`}}
            >
              <div className="latestCourse_info">
                <div className="title">2021 Unreal Engine Internship</div>
              </div>
            </li >

            <li  
              className="latestCourse_item"
              style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/education/course/c01.jpg'})`}}
            >
              <div className="latestCourse_info">
                <div className="title">2021 CG ARK Unreal Engine Training</div>
              </div>
            </li >

            <li  
              className="latestCourse_item"
              style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/education/course/c01.jpg'})`}}
            >
              <div className="latestCourse_info">
                <div className="title">2022 Unreal Engine & Virtual Production Training</div>
              </div>
            </li >

        </ul>
      </div>
    </div>
  )
}

export default LatestCourse