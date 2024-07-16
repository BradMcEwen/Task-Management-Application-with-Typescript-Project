import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import { AuthProvider } from './context/AuthContext';
import TaskDashboard from './components/Dashboard';
import TaskDetails from './components/TaskDetails';
import CreateTask from './components/CreateTask';
import NavBar from './components/NavBar';
import AuthGuard from './components/AuthGuard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <div style={{ paddingTop: '60px' }}>
            <Routes>
              <Route path="/" element={<AuthGuard component={TaskDashboard} />} />
              <Route path="/task/:id" element={<AuthGuard component={TaskDetails} />} />
              <Route path="/create-task" element={<AuthGuard component={CreateTask} />} />
              {/* <Route path="/auth" element={<Auth />} /> */}
            </Routes>
          </div>
        </TaskProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
