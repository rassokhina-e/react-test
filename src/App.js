import React, { useMemo, useState } from 'react';
import { Users } from './components/index';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  // TODO: move users to the members page.
  // const [isLoading, setLoader] = useState(false);
  // const [users, setUsers] = useState([]);
  // const [errMesage, setErrorMessage] = useState('');

  // const getUsers = useMemo(async () => {
  //   try {
  //     setLoader(true)
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     console.log('response', response)
  //     setLoader(false)
  //     if (response) {
  //       const result = await response.json();
  //       setUsers(result);
  //       console.log('result', result, users)
  //     } else {
  //       setErrorMessage('No users.');
  //     }
  //   } catch (error) {
  //     setLoader(false)
  //     setErrorMessage('Error getting users.');
  //   }
  // }, [users]);

  // React.useEffect(() => {
  //   getUsers();
  // }, [getUsers, users]);

  return (
    <>
      <HomePage />
      {/* <Users users={users} error={errMesage} isLoading={isLoading} /> */}
    </>
  );
}

export default App;
