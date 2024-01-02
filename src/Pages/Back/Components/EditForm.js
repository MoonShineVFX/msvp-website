import React, { useEffect } from 'react'
import { constSelector, useRecoilState, useRecoilValue } from 'recoil';
import { formDisplayState, workState,formStatusState } from '../atoms/fromTypes'
import { useForm,Controller } from 'react-hook-form';


function EditForm({categoryData,handleCreateWork , handleEditWork}) {
  const {control,register, handleSubmit, reset, formState: { errors }} = useForm(
    {defaultValues: { title: "", intro: "",sort_num:"",youtube_id:"" ,year_of_work:"",video_url:"",vimeo_id:"", youtube_id:"",is_social_link:false}});
  const onSubmit = (data) => {
    console.log(data)
    if(data.method === 'ADD'){
      handleCreateWork(data)
      
    } else if (data.method === 'EDIT'){
      console.log('EDITTT')
      handleEditWork(work.uid,data)
    }
    
  };
  const [showModal, setShowModal] = useRecoilState(formDisplayState);
  const work = useRecoilValue(workState);
  const formStatus = useRecoilValue(formStatusState);
  const handleClose = () => {
    setShowModal(false);
  };
  useEffect(()=>{
    formStatus === 'EDIT' ? reset(work && work) : reset()
  },[])
  return (
    <div className={'w-full h-screen fixed top-0 left-0 z-20 overflow-hidden'}>
      <div className=' opacity-30 absolute inset-0 bg-black ' onClick={handleClose}></div>
      <div className=' relative w-4/5 bg-white mx-auto my-20 p-5 overflow-auto'>
        <div className='text-xl text-center font-bold'>{formStatus === 'ADD' ? '新增作品' : '編輯作品'}</div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className='flex gap-4'>
            <div className='main w-1/2'>
              <div className="mb-3">
                <label htmlFor="exampleURL0" className="form-label inline-block mb-2 text-gray-700">作品名稱</label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  id="exampleURL0"
                  placeholder="作品名稱"
                  {...register('title')}
                />
              </div>
              <div className="relative mb-3">
                <label htmlFor="exampleURL0" className="form-label inline-block mb-2 text-gray-700">作品分類</label>
                <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " id="category" {...register("category")}>
                  {categoryData.map((item,index)=>{
                    return(
                      <option key={item.id} value={item.id}>{item.name} - {item.name_cht}</option>
                    )
                  })}
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="exampleURL0" className="form-label inline-block mb-2 text-gray-700">作品排序(輸入1-999)</label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  placeholder="排序"
                  {...register('sort_num')}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleURL0" className="form-label inline-block mb-2 text-gray-700">影片位置(接貼上youtube or vimeo 網址)</label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  placeholder="影片位置"
                  {...register('video_url')}
                />
              </div>

              <div className='flex flex-col mb-3 '>
                <Controller
                  name="is_social_link"
                  control={control}
                  defaultValue={work && work.is_social_link}
                  render={({ field }) => (
                    <div className="flex mb-2 ">
                      <label className="inline-flex relative items-center mr-5 cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                        />
                        <div
                          className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 ${
                            field.value
                              ? 'peer-checked:after:translate-x-full peer-checked:bg-green-600'
                              : ''
                          } peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
                        ></div>
                        <span className="ml-2 text-sm font-medium ">
                          以社群超連結另開視窗(fb,ig)
                        </span>
                      </label>
                    </div>
                  )}
                />
                <Controller
                  name="social_link"
                  control={control}
                  defaultValue={work && work.social_link}
                  rules={{ required: false }}
                  render={({ field }) => (
                    <input {...field} 
                      type="text" placeholder="輸入連結" 
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    />
                  )}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleURL0" className="form-label inline-block mb-2 text-gray-700">
                  前台顯示 
                  </label>
                
                  <div className="flex items-center mb-4">
                      <input  id="default-radio-1" type="radio" value="1" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" {...register("display")}/>
                      <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">顯示作品</label>
                  </div>
                  <div className="flex items-center">
                      <input  id="default-radio-2" type="radio" value="0" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  {...register("display")}/>
                      <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">不顯示此作品</label>
                  </div>
              </div>

              
            </div>
            <div className='left w-1/2'>
              <div className="mb-3">
                <label htmlFor="exampleURL0" className="form-label inline-block mb-2 text-gray-700">作品介紹</label>
                <textarea
                  rows="6"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                  placeholder="作品介紹"
                  {...register('intro')}
                ></textarea>
              </div>
              {
                formStatus === 'EDIT' && 
                <div className="mb-3 ">
                  <div className='mb-3'>
                    <h1 className='mb-2'>設定作品縮圖</h1>

                    <input type="file" className="custom form-control border p-2" id="file" name="photo" {...register('file')} />
                  </div>

                  <img src={work ? work.imgpath :　"1"} className="img-fluid"  alt={work && work.imgpath} />
                
                </div>
              }
            </div>
          </div>
          
         
          
          <div>
            {
              formStatus === 'EDIT' ? 
              <button type="submit" className="py-2 px-4 bg-black text-white  rounded-md" >
                儲存編輯<input type="hidden" value="EDIT"  {...register('method')}/></button>
              :
              <button type="submit" className="py-2 px-4 bg-black text-white  rounded-md" >
                新增作品<input type="hidden" value="ADD"  {...register('method')}/></button>
            }
            <div className='text-xs inline-block ml-3' >縮圖請建立作品後再上傳</div>
          </div>
        
        </form>
      </div>
    </div>
  )
}

export default EditForm