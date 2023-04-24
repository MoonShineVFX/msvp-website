import React from 'react'
import { FaPlus,FaMinus } from "react-icons/fa";
function AccordionItem(props) {
  const contentClass = `transition-all max-h-0 overflow-hidden ${
    props.isActive ? "max-h-full" : "max-h-0"
  }`;
  return (
    <div className=''>
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/20"
        onClick={() => props.onItemClick(props.index)}
      >
        <h2 className="text-xl font-medium">{props.title}</h2>
        {
          props.isActive ?  <FaMinus color="#77E1F3" />: <FaPlus color="#77E1F3"/>
        }
      </div>
      <div className={contentClass}>
        <div className="p-0  overflow-x-auto md:p-4 ">
         
          <table class="styled-table table-auto border-collapse  mx-auto">
              <thead className='bg-[#3A3E4C]'>
                  <tr>
                      <th className='p-2 px-8 md:p-10 border border-black text-white/0'>Name</th>
                      <th className='p-2 px-14 md:p-10 border border-black'>Preferences</th>
                      <th className='p-2 px-16 md:p-10 border border-black'>Why</th>
                      <th className='p-2 px-8 md:p-10 border border-black'>Notes</th>
                  </tr>
              </thead>
              <tbody>
              {props.content.map((item,index)=>{
                return(
                  <tr className='bg-[#1F2538]'>
                    <td className='whitespace-pre-wrap p-2 md:p-10  order border-black font-bold bg-[#3A3E4C]'>{item.header}</td>
                    <td className='whitespace-pre-wrap p-2 md:p-4  border border-black text-sm text-white/80'>{item.preferences}</td>
                    <td className='whitespace-pre-wrap p-2 md:p-4  border border-black text-sm text-white/80'>{item.why}</td>
                    <td className='whitespace-pre-wrap p-2 md:p-4  border border-black text-sm text-white/80'>{item.notes}</td>
                  </tr>
                )
              })}
                  
                
              </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AccordionItem