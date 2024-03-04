import React,{useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { FaTimes } from "react-icons/fa";
function SpaceSingle({data,handler}) {
  const {title,link,desc,purpose,spec,spacespce,image,space_image1,spacespec,shooting,ledspec,trussspec,mosys,recommendation } = data
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
        <div className="closeBtn" onClick={handleClick}><FaTimes /></div>
        <div className="thumb img_thumb" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/space/'+ image })`}}>
          <div className="title">{t(`${title}`)}</div>
        </div>
        <article>
          <div className="title">{t(`${title}`)}</div>
          <div className="description">{t(`${desc}`)}</div>
          <div className="space_image">
            <img src={ space_image1 } alt="" />
          </div>
          <div className="description">
            <div>{t('spec_desc_title1')}</div>
            <div dangerouslySetInnerHTML={{ __html:t(`${spacespec}`) }}/>
          </div>
          <div className="description">
            <div>{t('spec_desc_title2')}</div>
            <div dangerouslySetInnerHTML={{ __html:t(`${shooting}`) }}/>
          </div>
          <div className="description">
            <div>{t('spec_desc_title3')}</div>
            <div dangerouslySetInnerHTML={{ __html:t(`${ledspec}`) }}/>
          </div>
          <div className="description">
            <div>{t('spec_desc_title4')}</div>
            <div dangerouslySetInnerHTML={{ __html:t(`${trussspec}`) }}/>
          </div>
          {mosys && (
            <div className="description">
              <div>{t('spec_desc_title6')}</div>
              <div dangerouslySetInnerHTML={{ __html:t(`${mosys}`) }}/>
            </div>
          )}
          <div className="description">
            <div>{t('spec_desc_title5')}</div>
            <div dangerouslySetInnerHTML={{ __html:t(`${recommendation}`) }}/>
          </div>
        </article>
      </div>
    </div>
  )
}

export default SpaceSingle
