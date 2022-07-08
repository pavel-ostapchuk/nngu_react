import { ColumnsType } from 'antd/lib/table';
import { IUsers } from '../interfaces/IUsers';

interface UsersDataType {
  key: string;
  name: string;
  email: string;
  phone?: string;
}

interface UserDataTransformerReturnValue {
  usersTableColumns: ColumnsType<UsersDataType>;
  mappedUsersData: UsersDataType[];
}

export function transformUserDataToAntdTable(usersData: IUsers[]): UserDataTransformerReturnValue {
  const usersTableColumns: ColumnsType<UsersDataType> = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
      width: '33.5%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '33.5%',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      width: '33.5%',
    },
  ];
  const mappedUsersData = usersData.map((user) => {
    const { id, name, email, phone } = user;
    return {
      key: String(id),
      name,
      email,
      phone,
    };
  });

  return { usersTableColumns, mappedUsersData };
}
