import React, { FC } from 'react';
import style from '../UsersPage.module.scss';

interface IUserCard {
  key: string;
  name: string;
  email: string;
}
const UserCard: FC<IUserCard> = ({ key, name, email }) => {
  return (
    <div key={key} className={style.user_card}>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
