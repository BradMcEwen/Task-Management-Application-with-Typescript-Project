import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Task } from '../types';

interface TaskFormProps {
  onSubmit: (task: Task) => void;
  initialTask?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTask }) => {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [dueDate, setDueDate] = useState(initialTask ? initialTask.dueDate.toISOString().split('T')[0] : '');
  const [details, setDetails] = useState(initialTask?.details || '');
  const [status, setStatus] = useState(initialTask?.status || 'Not Started');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDueDate(initialTask.dueDate.toISOString().split('T')[0]);
      setDetails(initialTask.details);
      setStatus(initialTask.status);
    }
  }, [initialTask]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!title || !dueDate) {
        throw new Error('Title and due date are required');
      }
      const newTask: Task = {
        id: initialTask?.id || Date.now().toString(),
        title,
        dateCreated: initialTask?.dateCreated || new Date(),
        dueDate: new Date(dueDate),
        details,
        status,
      };
      onSubmit(newTask);
      if (!initialTask) {
        setTitle('');
        setDueDate('');
        setDetails('');
        setStatus('Not Started');
      }
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
      </div>
      <div>
        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Details</label>
        <textarea
          value={details}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDetails(e.target.value)}
          placeholder="Details"
        />
      </div>
      <div>
        <label>Status</label>
        <select value={status} onChange={(e: ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit">{initialTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
