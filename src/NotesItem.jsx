import React from 'react';

const NotesItem = (props) => {
  return (
    <>
      <div id = 'item'>
        <div id = 'del' onClick = {() => {props.delete(props.id)}}>
          <i class="fas fa-trash-alt"></i>
          <h3>{props.tittle}</h3>
        </div>
        <h4>{props.note}</h4>
      </div>
    </>
  );
}

export default NotesItem;

