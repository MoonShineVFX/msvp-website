import React,{useState,useEffect} from 'react'
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../../atoms/modalAtom';
// import categoryData from './category.json'
import { LoadingAnim } from '../../Helper/HtmlComponents';
//Helper
import { getCategory,getAllStudentWorks} from '../../Helper/getfunction'
function EduPortfolio({workData,handler}) {
  const {works} = workData
  const [data, setData] = useState(works);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(()=>{
    getAllStudentWorks((res)=>{
      setData(res)
      // setFilteredWorkData(res)
    })


  },[])
  return (
    <div className='edu_Portfolio'>
      <h1>Student Gallery</h1>
      <div className="edu_Portfolio_list">
        <ul>
          {data ? 
            data.map((item,index)=>{
            return(
              <li 
                key={index}
                className='edu_Portfolio_item'
                data-aos="zoom-out-up"
                data-aos-delay={index+'00'}
                onClick={() => {
                  setShowModal(true);
                  setCurrentMovie(item);
                }}
              >
                <div className="item_bg" style={{backgroundImage: `url(${item.imgpath})`}}>
                </div>
                <div className='title'> {item.title}</div>
              </li>
            )
          }):""}
        </ul>
      </div>
    </div>
  )
}

export default EduPortfolio