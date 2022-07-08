import React from 'react';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useNavigate } from 'react-router-dom';

export const useSiderConfig = (): { siderConfig: ItemType[] } => {
  const navigate = useNavigate();

  const siderConfig = [
    {
      key: '/users_page',
      icon: <UserOutlined />,
      label: 'Страница пользователей',
      onClick: () => navigate('/users_page'),
    },
    {
      key: '/test_page',
      icon: <VideoCameraOutlined />,
      label: 'Страница 2',
      onClick: () => navigate('/test_page'),
    },
    {
      key: '/third_page',
      icon: <UploadOutlined />,
      label: 'Страница 3',
      onClick: () => navigate('/third_page'),
    },
  ];

  return { siderConfig };
};
