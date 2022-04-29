import React from 'react'
import {Link} from "react-scroll";
import { useTranslation } from 'react-i18next';
function MobileNabar({navData,isToggled,isScorllEnd}) {
  const {navbar} = navData
  const { t, i18n } = useTranslation();

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
        </ul>
    </div>
  )
}

export default MobileNabar