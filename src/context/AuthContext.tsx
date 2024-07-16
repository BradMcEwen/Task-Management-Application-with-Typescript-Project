import React, { createContext, useReducer, ReactNode } from 'react';
import { User } from '../types';

interface AuthState {
  currentUser: User | null;
  users: User[];
}

const initialState: AuthState = {
  currentUser: null,
  users: [],
};

type AuthAction =
  | { type: 'REGISTER_USER'; payload: User }
  | { type: 'LOGIN_USER'; payload: User }
  | { type: 'LOGOUT_USER' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'LOGIN_USER':
      return { ...state, currentUser: action.payload };
    case 'LOGOUT_USER':
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export const AuthContext = createContext<{ state: AuthState; dispatch: React.Dispatch<AuthAction> }>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
