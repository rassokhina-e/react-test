import React from "react";
import UserApi from '../api/users';

export function useFetchUsers() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoader] = React.useState(false);
  const [errMesage, setErrorMessage] = React.useState('');

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

  const filteredUsers = React.useMemo(() => {
    return users.filter((user) => user.id > 0)
  }, [users])

  return { users: filteredUsers, isLoading, errMesage }

}
