import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import { MdOutlineArrowBackIosNew,MdOutlineArrowForwardIos } from "react-icons/md";
function CourseSingjeModal({data,handler,handleChangeArticle}) {
  const {id,name, title,cover, children } = data
  const [active , setActive] = useState(false)
  // 點擊按鈕或背景關閉
  const handleClick= () =>{
    setActive(!active)
    setTimeout(() => {
      handler()
    }, 450);
    // handler()
  }
  const handleArrow = (str, id)=>{
    handleChangeArticle(str, id)
     
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(!active)
    }, 500);
    return () => clearTimeout(timer);
  },[]);
  return (
    <div className=" course_single_modal">
      <div className={active ? "blackbg active" : "blackbg"} onClick={handleClick}></div>
      <div className={active ? "itemContent active" : "itemContent"}>
        <div className="closeBtn" onClick={handleClick}>X</div>
        <div className="btn_group">
          <MdOutlineArrowBackIosNew className='icon' size={24} onClick={()=>{handleArrow('prev' , id)}}/>
          <MdOutlineArrowForwardIos className='icon' size={24} onClick={()=>{handleArrow('next' , id)}}/>
        </div>
        <article>
          <div className="header-title">{title}</div>
          {
            children.map((child,idx)=>{
              const {text , title,image,image1,image2,image3,image4,video1,video2,video3,video4} = child
              return (
                <div className='article-content'>
                  {child.types === 'text' ? <div className='one-text'>{text}</div> :  " "}

                  {child.types === 'one-image' ? <div className='one-image'>
                    {title ? <div className="title">{title}</div> : null}
                    <img src={process.env.PUBLIC_URL +'/images/education/course/'+name+ '/'+image} alt="" /></div> :  " "}

                  {child.types === 'title-text' ? <div className='title-text'>
                    <div className="title">{title}</div>
                    <div className="text">{text}</div>
                  </div> :  " "}

                  {child.types === 'two-image' ? <div className='two-image'>
                    <div>
                    <img src={process.env.PUBLIC_URL +'/images/education/course/'+name + '/'+image1} alt="" />
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL +'/images/education/course/'+name + '/'+image2} alt="" />
                    </div>
                  </div> :  " "}
                  {child.types === 'four-image' ? <div className='four-image'>
                    <div><img src={process.env.PUBLIC_URL +'/images/education/course/'+name + '/'+image1} alt="" /></div>
                    <div><img src={process.env.PUBLIC_URL +'/images/education/course/'+name + '/'+image2} alt="" /></div>
                    <div><img src={process.env.PUBLIC_URL +'/images/education/course/'+name + '/'+image3} alt="" /></div>
                    <div><img src={process.env.PUBLIC_URL +'/images/education/course/'+name + '/'+image4} alt="" /></div>
                  </div> :  " "}
                  {child.types === 'one-videos' ? <div className='one-videos'>
                    <div className="title">{title}</div>
                    <div className="video-container">
                      <div className="video-wrap">
                        <ReactPlayer 
                          className='react-player'
                          url={video1} 
                          width= "100%"
                          height= "100%"
                          controls={true}
                          volume={0.4}
                        />
                      </div>
                    </div>
                  </div> :  " "}
                  {child.types === 'two-videos' ? <div className='two-videos'>
                    <div className="title">{title}</div>
                    <div className="video-container">
                      <div className="video-wrap">
                        <ReactPlayer 
                          className='react-player'
                          url={video1} 
                          width= "100%"
                          height= "100%"
                          controls={true}
                          volume={0.4}
                        />
                      </div>
                      <div className="video-wrap">
                        <ReactPlayer 
                          className='react-player'
                          url={video2} 
                          width= "100%"
                          height= "100%"
                          controls={true}
                          volume={0.4}
                        />
                      </div>
                    </div>
                  </div> :  " "}
                  {child.types === 'four-videos' ? <div className='four-videos'>
                    <div className="title">{title}</div>
                    <div className="video-container">
                      <div className="video-wrap">
                        <ReactPlayer 
                          className='react-player'
                          url={video1} 
                          width= "100%"
                          height= "100%"
                          controls={true}
                          volume={0.4}
                        />
                      </div>
                      <div className="video-wrap">
                        <ReactPlayer 
                          className='react-player'
                          url={video2} 
                          width= "100%"
                          height= "100%"
                          controls={true}
                          volume={0.4}
                        />
                      </div>
                      <div className="video-wrap">
                        <ReactPlayer 
                          className='react-player'
                          url={video3} 
                          width= "100%"
                          height= "100%"
                          controls={true}
                          volume={0.4}
                        />
                      </div>
                      <div className="video-wrap">
                        <ReactPlayer 
                          className='react-player'
                          url={video4} 
                          width= "100%"
                          height= "100%"
                          controls={true}
                          volume={0.4}
                        />
                      </div>
                    </div>
                  </div> :  " "}

                </div>
                
              )
            })     
          }
        </article>
      </div>
    </div>
  )
}

export default CourseSingjeModal