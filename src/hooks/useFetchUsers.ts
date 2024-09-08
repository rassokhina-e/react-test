import React from "react";
import UserApi from '../api/users';

type User = {
  email: string,
  id: number,
  name: string,
  phone: number,
  username: string,
  website: string
}

type UsersReturnType = {
  users: User[],
  isLoading: boolean,
  errMesage: string
}

export function useFetchUsers(): UsersReturnType {
  const [users, setUsers] = React.useState<User[]>([]);
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
