import React from 'react';
import { IUsers } from './interfaces';
import UsersPageComponent from './components/UsersPageComponent';

const UsersPage = () => {
  const [userData, setUserData] = React.useState<IUsers[] | null>(null);

  React.useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setUserData(json));
    }, 1500);
  }, []);

  return <UsersPageComponent userData={userData} />;
};

export default UsersPage;
