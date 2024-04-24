import React from 'react';
import Table from 'react-bootstrap/Table';

function Task(props) {
  return (
    <div className='d-flex justify-content-evenly p-2'>
          <li>{props.task}</li>
          <li><button className="btn btn-secondary" onClick={() => props.onDeleteTask(props.id)}>Delete</button></li>
      </div>
  );
}

export default Task;