import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types';
import TaskForm from './TaskForm';

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const task = state.tasks.find(task => task.id === id);

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleEditTask = (updatedTask: Task) => {
    dispatch({ type: 'EDIT_TASK', payload: updatedTask });
    setIsEditing(false);
  };

  const handleDeleteTask = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
    navigate('/');
  };

  return (
    <div className="container task-details">
      {isEditing ? (
        <TaskForm onSubmit={handleEditTask} initialTask={task} />
      ) : (
        <>
          <h1>{task.title}</h1>
          <p>Date Created: {task.dateCreated.toDateString()}</p>
          <p>Due Date: {task.dueDate.toDateString()}</p>
          <p>Details: {task.details}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit Task</button>
          <button onClick={handleDeleteTask}>Delete Task</button>
        </>
      )}
    </div>
  );
};

export default TaskDetails;
