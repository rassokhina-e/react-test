import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserApi from './api/users';
import { HomePage } from './pages/HomePage/index';
import { UsersPage } from './pages/UsersPage/index';
import './App.css';

function App() {
  const [isLoading, setLoader] = useState(false);
  const [users, setUsers] = useState([]);
  const [errMesage, setErrorMessage] = useState('');

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = React.useMemo(() => {
    return users.filter((user) => user.id > 1)
  }, [users])

  React.useCallback(() => onClick, [])

  const onClick = () => {
    console.log('clicked')
  }

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
    <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<HomePage onClick={onClick} />} />
                <Route path="/users" element={<UsersPage users={filteredUsers} error={errMesage} isLoading={isLoading} />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
