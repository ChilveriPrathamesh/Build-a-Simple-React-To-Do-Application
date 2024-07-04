// src/components/TaskInput/index.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';
import './index.css'

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setTask(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className='task-input-container'>
      <form className='task-input-form' onSubmit={handleSubmit} >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        className='input-field'
      />
      <button className='add-btn' type="submit" >Add Task</button>
    </form>
    </div>
    
  );
};

export default TaskInput;
