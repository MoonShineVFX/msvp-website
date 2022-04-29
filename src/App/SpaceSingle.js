import React,{useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next';
function SpaceSingle({data,handler}) {
  const {title,link,desc,purpose,spec,spacespce,image } = data
  // let finalIntro= intro.replace('\\n', '\n')
  const [active , setActive] = useState(false)
  const { t } = useTranslation();

  // 點擊按鈕或背景關閉
  const handleClick= () =>{
    setActive(!active)
    setTimeout(() => {
      handler()
    }, 450);
    // handler()
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(!active)
    }, 500);
    return () => clearTimeout(timer);
  },[]);
  return (
    <div className="workitem">
      <div className={active ? "blackbg active" : "blackbg"} onClick={handleClick}></div>
      <div className={active ? "itemContent active" : "itemContent"}>
        <div className="closeBtn" onClick={handleClick}>X</div>
        <div className="thumb player-wrapper" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/space/'+ image })`}}>
          
        </div>
        <article>
          <div className="title">{t(`${title}`)}</div>
          <div className="description">{t(`${desc}`)}</div>
          <div className="description">{t(`${purpose}`)}</div>
          <div className="description">{t(`${spec}`)}</div>
          <div className="description">{t(`${spacespce}`)}</div>
        </article>
      </div>
    </div>
  )
}

export default SpaceSingle
