import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import { CreateTask } from './CreateTask';

const TaskDashboard: React.FC = () => {
  const { state } = useContext(TaskContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h1>Task Dashboard</h1>
          <ul className="list-group">
            {state.tasks.map(task => (
              <li key={task.id} className="list-group-item taskcard">
                <div className="task-header">
                  <h5>
                    <Link to={`/task/${task.id}`}>{task.title}</Link>
                  </h5>
                </div>
                <div>
                  <p>Due Date: {task.dueDate.toDateString()}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <CreateTask />
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;
