import React from 'react'
import {Link} from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
function Navbar({navData , toggleTrueFalse}) {
  const {navbar} = navData
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  return (
    <div id="navbar" className='site-menu'>
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
                    {t(`${item.chtName}`)}
                  </Link>
                </li>
              )
            }): ""
          }
          <li className={i18n.language === 'zh-TW' ? 'active' : ''}>
            <a onClick={() => changeLanguage("zh-TW")}>中文</a>
          </li>
          <li className={i18n.language === 'en' ? 'active' : ''}>
            <a onClick={() => changeLanguage("en")}>ENG</a>
          </li>
          
        </ul>
      </div>

      <div className="mobileNavBtn" >
        <div className={i18n.language === 'zh-TW' ? 'active' : ''}>
          <a onClick={() => changeLanguage("zh-TW")}>中文</a>
        </div>
        <div className={i18n.language === 'en' ? 'active' : ''}>
          <a onClick={() => changeLanguage("en")}>ENG</a>
        </div>
        <div onClick={toggleTrueFalse}>
          <FaBars/>
        </div>
          
      </div>
    </div>
  )
}

export default Navbar