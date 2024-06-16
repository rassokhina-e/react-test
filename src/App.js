import { useState, useEffect } from 'react';
import UsersList from './components/users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [errMesage, setErrorMessage] = useState('');

  useEffect(() => {
    async function getUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response) setErrorMessage('Error getting users.') 
      const result = await response.json();
      setUsers(result)
    }
    getUsers()
  }, []);

  return (
    <>
      <h1>Users list</h1>
      {errMesage ? (
        <div>{errMesage}</div>
      ) : (
        <UsersList usersArr={users} />
      )}
    </>
  );
}

export default App;
