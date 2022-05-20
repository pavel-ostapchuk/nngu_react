import React, { FC } from 'react';
import { IUsers } from '../interfaces';
import UserCard from './UserCard';
import style from '../UsersPage.module.scss';

interface IProps {
  userData: IUsers[] | null;
}
const UsersPageComponent: FC<IProps> = ({ userData }) => {
  if (!userData) {
    return (
      <div>
        <p>Список пользователей:</p>
        <p>Загрузка...</p>
      </div>
    );
  }
  return (
    <div>
      <p>Список пользователей:</p>
      <div className={style.user_list}>
        {userData.length ? (
          userData.map((user) => {
            const { id, name, email } = user;
            return <UserCard key={`UserId:${id}`} name={name} email={email} />;
          })
        ) : (
          <div>Список пуст</div>
        )}
      </div>
    </div>
  );
};

export default UsersPageComponent;
