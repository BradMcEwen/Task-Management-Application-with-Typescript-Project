// import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const Auth: React.FC = () => {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const toggleAuthMode = () => setIsRegistering(!isRegistering);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     if (isRegistering && password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       if (isRegistering) {
//         const newUser = { id: Date.now().toString(), username: email.split('@')[0], email, password };
//         dispatch({ type: 'REGISTER_USER', payload: newUser });
//       } else {
//         const user = { id: 'existingUserId', email };
//         dispatch({ type: 'LOGIN_USER', payload: user });
//       }
//       navigate('/');
//     } catch (err) {
//       setError('Authentication failed');
//     }
//   };

//   return (
//     <div>
//       <h1>{isRegistering ? 'Register' : 'Login'}</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
//           required
//         />
//         {isRegistering && (
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
//             required
//           />
//         )}
//         <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <button onClick={toggleAuthMode}>
//         {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
//       </button>
//     </div>
//   );
// };

// export default Auth;
