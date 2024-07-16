# Task Management Application

## Overview

This project is a Task Management Application built using React, TypeScript, and Auth0 for authentication. The application allows users to create, edit, and delete tasks. It includes a task dashboard for viewing all tasks, and detailed views for individual tasks. The project leverages Bootstrap for styling and context API for state management.

## Features

- User Authentication using Auth0
- Task Dashboard for viewing tasks
- Task creation, editing, and deletion
- Task details view
- Task status management
- Error handling and validation
- Responsive design using Bootstrap


## Usage

1. Register or log in using Auth0.
2. Create new tasks using the "Create New Task" form on the dashboard.
3. View task details by clicking on a task title in the dashboard.
4. Edit or delete tasks from the task details page.

## Components

### AuthGuard
A higher-order component that wraps around other components to enforce authentication. Redirects unauthenticated users to the login page.

### CreateTask
A component for creating new tasks. It uses `TaskForm` for the task creation form and dispatches an `ADD_TASK` action to the context.

### TaskDashboard
Displays a list of tasks with links to their details. Also includes the `CreateTask` component.

### HomePage
A simple homepage that redirects authenticated users to the dashboard.

### Login
A button that triggers the Auth0 login process.

### Logout
A button that logs out the user from Auth0.

### NavBar
A responsive navigation bar that includes links to the home and dashboard pages, and a login/logout button.

### TaskDetails
Displays detailed information about a task and includes options to edit or delete the task.

### TaskForm
A form component used for both creating and editing tasks.

## Context

### TaskContext
Provides state management for tasks using React's Context API and `useReducer`. It includes actions for adding, editing, and deleting tasks.
