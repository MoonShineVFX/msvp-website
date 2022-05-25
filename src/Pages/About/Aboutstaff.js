import React from 'react'

function Aboutstaff({data}) {
  return (
    <section id="About_staff">
      <div className="unitHeader">
        <h1> Our Team</h1>
      </div>
      <div className="about_department_list">
        <ul>
          <li>Animation Team</li>
          <li>Managment Team</li>
          <li>Tech Team</li>
          <li>Art Team</li>
        </ul>
      </div>
      <div className="aboutstaff_list">
        {
          data?
          data.map((item)=>{
            return(
              <div 
                className="aboutstaff_item"
                style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/aboutstaff/'+ item.image})`}}
              >
                <div className="person_info">
                  <div className="name">{item.name}</div>
                  <div className="bar"></div>
                  <div className="name_subtext">{item.name_subtext}</div>
                </div>
              

              </div>
            )
          }) : <div>Loading...</div>
        }

      </div>

    </section>
  )
}

export default Aboutstaff