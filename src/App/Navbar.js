import React from 'react'

function Navbar() {
  return (
    <div id="navbar">
      <div className="logo">
        <img src={process.env.PUBLIC_URL+'/images/2022/MSXR_White_H.png'} alt="" />
      </div>
      <div className="navlist">
        <ul>
          <li>
            <a href="#">虛擬製片</a>
          </li>
          <li>
            <a href="#">虛擬製片</a>
          </li>
          <li>
            <a href="#">虛擬製片</a>
          </li>
          <li>
            <a href="#">虛擬製片</a>
          </li>
          <li>
            <a href="#">虛擬製片</a>
          </li>
          <li>
            <a href="#">虛擬製片</a>
          </li>
          <li>
            <a href="#">虛擬製片</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar