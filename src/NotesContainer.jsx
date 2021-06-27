import React, { useState } from "react";
import NotesItem from "./NotesItem.jsx";

function NotesContainer() {
  const [fiels , setfiels] = useState({
    tittle : '',
    note : '',
  })
  const [data , setData] = useState([]);

  const setting = () => {
    setfiels({
      tittle : document.getElementById('tittleO').value,
      note : document.getElementById('notesInput').value,
    });
  }

  const updateData = () => {

    setData((oldData) => {
      return [...oldData ,fiels];
    });
    document.getElementById('tittleO').value = '';
    document.getElementById('notesInput').value = '';
    console.log(data);
    setToggle(false);
  }

  const del = (id) => {
    console.log(id);
    setData((oldData) => {
      return oldData.filter((currItem , idx , values) => {
        return idx !== id;
      })
    })
  }

  const [toggle , setToggle] = useState(false);
  const ToggleFunctionTrue = () => {
    setToggle(true);
  }

  return (
    <>
      <div id = 'notesMain'>
        <div id = 'mainConatiner'>
          {
            toggle ? <input 
              type = 'text'
              placeholder = 'Tittle'
              className = 'input'
              id = 'tittleO'
              autoComplete = 'off'
              onChange = {setting}> 
            </input> : ''
                      
          }
          <input 
            type = 'text' 
            placeholder = 'write a note' 
            id = 'notesInput' 
            onClick = {ToggleFunctionTrue}
            autoComplete = 'off'
            onChange = {setting}/>
          {
            toggle ? <button 
              id = 'addbtn' 
              onClick = {updateData}>
              ADD NOTE
            </button> : ''
          }          
        </div>
      </div>
      <div id = 'notesItemConatiner'>    
        {
          data.map((currItem , index) =>  {
            return <NotesItem 
              id = {index}
              key = {index}
              tittle = {currItem.tittle}
              note = {currItem.note}
              delete = {del}/>
          })
        }       
      </div>
    </>
  );
}

export default NotesContainer;