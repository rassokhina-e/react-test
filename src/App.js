import React, { useState } from 'react';
import UserApi from './api/users';
import { HomePage } from './pages/HomePage/index';
import { UsersPage } from './pages/UsersPage/index';
import './App.less';

function App() {
  const [isLoading, setLoader] = useState(false);
  const [users, setUsers] = useState([]);
  const [errMesage, setErrorMessage] = useState('');

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoader(true)
    try {
      const response = await UserApi.getUsers();
      if (response) {
        setUsers(response);
      }
      setLoader(false)
    } catch (error) {
      setErrorMessage('Error getting users.');
      setLoader(false)
    }
  }

  return (
    <>
      <HomePage />
      <UsersPage users={users} error={errMesage} isLoading={isLoading} />
    </>
  );
}

export default App;
