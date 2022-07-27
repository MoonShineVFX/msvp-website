import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
function WorkSingle({data,handler}) {
  // let finalIntro= intro.replace('\\n', '\n')
  const [active , setActive] = useState(false)
  const [showModal, setShowModal] = useRecoilState(modalState);
  const movie = useRecoilValue(movieState);
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
      <div className={active ? "blackbg active" : "blackbg"} 
        onClick={() => {
          setShowModal(false);
        }}></div>
      <div className={active ? "itemContent active" : "itemContent"}>
        <div className="closeBtn" onClick={() => {
          setShowModal(false);
        }}>X</div>
        <div className="thumb player-wrapper" >
          <ReactPlayer 
            className='react-player'
            url={movie.video_url} 
            width= "100%"
            height= "100%"
            controls={true}
            volume={0.4}
          />
        </div>
        <article>
          <div className="title">{movie.title}</div>
          <div className="description">{movie.intro}</div>
        </article>
      </div>
    </div>
  )
}

export default WorkSingle
