// src/components/TaskList/index.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (index) => {
    const newTask = prompt('Edit your task:', tasks[index]);
    if (newTask) {
      dispatch(editTask(index, newTask));
    }
  };

  return (
    <div className='task-list-container'>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item-container">
            <div className="task-item">
              <span>{task}</span>
            </div>
            <div className="task-item-buttons">
              <button onClick={() => handleEdit(index)} className="edit-task-button">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button onClick={() => handleDelete(index)} className="delete-task-button">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
