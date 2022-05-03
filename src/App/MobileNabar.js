import React from 'react'
import {Link} from "react-scroll";
import { useTranslation } from 'react-i18next';
function MobileNabar({navData,isToggled,isScorllEnd}) {
  const {navbar} = navData
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  // useEffect(()=>{
  
  //     setISScorllEnd(false)
    
  // },[isToggled,isScorllEnd])
  return (
    <div className={isToggled && !isScorllEnd ?  "mobile_navlist active" : "mobile_navlist"}>
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
          <ul className='lang_btnGroup'>
            <li className={i18n.language === 'zh-TW' ? 'active' : ''}>
              <a onClick={() => changeLanguage("zh-TW")}>繁</a>
            </li>
            <li className={i18n.language === 'en' ? 'active' : ''}>
              <a onClick={() => changeLanguage("en")}>ENG</a>
            </li>
          </ul>

        </ul>
    </div>
  )
}

export default MobileNabar