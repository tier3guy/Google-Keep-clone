import React, { useState } from 'react';

const AccordionItem = (props) => {

  let [icon,setIcon] = useState(false);
  const toggleAnswer = () => {
    setIcon(!icon);
  }

  return( 
    <>
      <div id = 'accordItem'>
        <div id = 'question-section'>
          <button 
            id = 'toggle' 
            onClick = {toggleAnswer}>
            <i className = {icon ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
          <h3 id = 'quest'>{props.quest}</h3>
        </div>
        <p id = 'answ'>{icon? props.ans : ''}</p>
      </div>
    </>
  );
}

export default AccordionItem;