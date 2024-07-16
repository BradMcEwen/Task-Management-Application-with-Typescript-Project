import React, { useContext } from 'react';
import  TaskForm  from './TaskForm';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types';

export const CreateTask: React.FC = () => {
  const { dispatch } = useContext(TaskContext);

  const addTask = (task: Task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  return (
    <div>
      <h1>Create New Task</h1>
      <TaskForm onSubmit={addTask} />
    </div>
  );
};

export default CreateTask;
