import React from 'react'
import { FaBars } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Link ,useLocation  } from "react-router-dom";

function PagesNavbar({data ,toggleTrueFalse}) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <div id="navbar" className='site-menu'>
      <div className="logo">
        <Link
          to={'/'}
        >
          <img src={process.env.PUBLIC_URL+'/images/2022/MSXR_White_H.png'} alt="" />
        </Link>
        
      </div>
      <div className="navlist">
        <ul>
          { data?
            data.map((item,index)=>{
              if(item.type === 'about'){
                return     (
                  <li key='about'>
                    <a 
                      href="https://moonshine.tw/about"
                      target="_blank"
                      className={ pathname.substring(1) === item.type ? 'active' : ''}
                    >
                      {t(`${item.chtName}`)}
                    </a>
                  </li>
                )            

              }
              return(
                <li key={index}>
                  <Link 
                    to={item.type}
                    className={ pathname.substring(1) === item.type ? 'active' : ''}
                  >
                    {t(`${item.chtName}`)}
                  </Link>
                </li>
              )
            }): ""
          }
          <div className='lang_btngroup'>
            <li className={i18n.language === 'zh-TW' ? 'active' : ''}>
              <a onClick={() => changeLanguage("zh-TW")}>中文</a>
            </li>
            <li className='divider'>/</li>
            <li className={i18n.language === 'en' ? 'active' : ''}>
                <a onClick={() => changeLanguage("en")}>ENG</a>
            </li>
          </div>

          
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

export default PagesNavbar