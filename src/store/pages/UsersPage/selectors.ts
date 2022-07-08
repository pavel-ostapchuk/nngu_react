import { transformUserDataToAntdTable } from 'adapters/transformUserDataToAntdTable';
import { IStore } from '../../i';

export const getUsersData = (state: IStore) => {
  const { loading, usersData } = state.users;
  const { usersTableColumns, mappedUsersData } = transformUserDataToAntdTable(usersData);

  return { loading, usersTableColumns, mappedUsersData };
};
