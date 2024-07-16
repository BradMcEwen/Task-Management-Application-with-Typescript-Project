export interface Task {
    id: string;
    title: string;
    dateCreated: Date;
    dueDate: Date;
    details: string;
    status: 'started' | 'in progress' | 'finished';
  }
  
  export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
  }
  