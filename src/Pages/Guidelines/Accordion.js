import React, { useState } from 'react'
import AccordionItem from './AccordionItem';
function Accordion(props) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <div className="divide-y border-t border-b border-white/50 divide-white/50">
      {props.items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onItemClick={onItemClick}
        />
      ))}
    </div>
  )
}

export default Accordion