import React from 'react'
import {Link} from "react-scroll";
function Navbar({navData}) {
  const {navbar} = navData
  return (
    <div id="navbar">
      <div className="logo">
        <img src={process.env.PUBLIC_URL+'/images/2022/MSXR_White_H.png'} alt="" />
      </div>
      <div className="navlist">
        <ul>
          { navbar?
            navbar.map((item,index)=>{
              return(
                <li key={index}>
                  <Link 
                    activeClass="active"
                    to={item.type}
                    offset={-100}
                    smooth={true} 
                    spy={true}
                    
                  >
                    {item.chtName}
                  </Link>
                </li>
              )
            }): ""
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar