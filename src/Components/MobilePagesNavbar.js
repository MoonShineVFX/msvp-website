import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link ,useLocation  } from "react-router-dom";
function MobilePagesNavbar({data,isToggled,switchToggle}) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  const handleLinkClick = (event) => {
    switchToggle()

  };
  return (
    <div className={isToggled ?  "mobile_navlist active" : "mobile_navlist"}>
        <ul>
          { data?
            data.map((item,index)=>{
              return(
                <li key={index}>
                  <Link 
                    to={item.type}
                    onClick={handleLinkClick}
                  >
                    {t(`${item.chtName}`)}
                  </Link>
                </li>
              )
            }): ""
          }

        </ul>
    </div>
  )
}

export default MobilePagesNavbar