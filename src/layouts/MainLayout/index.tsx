import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useSiderConfig } from 'layouts/siderConfig';
import { useLocation } from 'react-router-dom';
import style from './index.module.scss';

const { Sider, Header, Content } = Layout;

interface IProps {
  children: React.ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const { siderConfig } = useSiderConfig();

  const collapseSiderBtn = collapsed ? (
    <MenuUnfoldOutlined className={style.trigger} onClick={() => setCollapsed((prev) => !prev)} />
  ) : (
    <MenuFoldOutlined className={style.trigger} onClick={() => setCollapsed((prev) => !prev)} />
  );

  return (
    <Layout className={style.main_layout}>
      <Sider collapsed={collapsed} width="250px">
        <Menu
          theme="dark"
          mode="inline"
          className={style.layout_sider_menu}
          defaultSelectedKeys={[pathname]}
          items={siderConfig}
        />
      </Sider>
      <Layout className={style.main_sublayout}>
        <Header className={style.layout_header}>{collapseSiderBtn}</Header>
        <Content className={style.layout_content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
