import { Spin, Table } from 'antd';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect } from 'react';
import { resetUserStoreAction } from 'store/pages/UsersPage/actions';
import { fetchUsersAsync } from 'store/pages/UsersPage/async-actions';
import { getUsersData } from 'store/pages/UsersPage/selectors';

const USERS_LIMIT = 20;

const UsersPage = () => {
  const dispatch = useAppDispatch();
  const { loading, usersTableColumns, mappedUsersData } = useAppSelector(getUsersData);

  useEffect(() => {
    dispatch(fetchUsersAsync({ _page: 1, _limit: USERS_LIMIT }));
    return () => {
      dispatch(resetUserStoreAction());
    };
  }, []);

  return (
    <Table
      columns={usersTableColumns}
      dataSource={mappedUsersData}
      loading={loading}
      pagination={{
        defaultPageSize: 5,
      }}
    />
  );
};

export default UsersPage;
