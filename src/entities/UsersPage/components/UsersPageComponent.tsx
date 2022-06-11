import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { IUsers } from '../../../interfaces/IUsers';
import Pagination from '../../../shared/Pagination';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsers[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  const { search } = useLocation();

  const currentPageNumber = new URLSearchParams(search).get('page');

  const paginatedUserData = usersDataAttr.slice(
    (Number(currentPageNumber) - 1) * 3,
    Number(currentPageNumber) * 3
  );

  return (
    <div>
      <p>Список пользователей:</p>
      <div className={style.user_list}>
        {paginatedUserData.length ? (
          paginatedUserData.map((user) => {
            const { id, name, email } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard id={id} name={name} email={email} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены.</div>
        )}
      </div>
      <Pagination limit={3} itemsAmount={usersDataAttr.length} />
    </div>
  );
};

export default UsersPageComponent;
