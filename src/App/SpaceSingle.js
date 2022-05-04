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
      <div className={active ? "itemContent img_itemContent active" : "itemContent img_itemContent"}>
        <div className="closeBtn" onClick={handleClick}>X</div>
        <div className="thumb img_thumb" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/space/'+ image })`}}>
          
        </div>
        <article>
          <div className="title">{t(`${title}`)}</div>
          <div className="description">{t(`${desc}`)}</div>
          <div className="description">
            <div>推薦用途</div>
            <div dangerouslySetInnerHTML={{ __html:t(`${purpose}`) }}/>
          </div>
          <div className="description">
            <div>器材規格</div>
            <div dangerouslySetInnerHTML={{ __html:t(`${spec}`) }}/>
          </div>
          <div className="description">
            <div>場地尺寸</div>
            <div dangerouslySetInnerHTML={{ __html:t(`${spacespce}`) }}/>
          </div>
        </article>
      </div>
    </div>
  )
}

export default SpaceSingle
