import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ProfileTwoTone,
  VideoCameraOutlined
} from '@ant-design/icons';
import './home.css'
import List from './List';
import Modals from './Modal';
import Detail from './Detail';

const Home = () => {
    const { Header, Sider, Content } = Layout;

    const [collapsed, setCollapsed] = useState(false)
    const [menu, setMenu] = useState(1)


    const toggle = () => {
        setCollapsed(!collapsed)
      };

    return ( 
         <Layout className="body-op">
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <h1 align="center" style={{color:'white', fontSize:20, marginTop:19}}>ALKEMY</h1>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={() => setMenu(1)}  icon={<ProfileTwoTone />}>
              POSTS
            </Menu.Item>
            <Menu.Item key="2"  onClick={() => setMenu(2)} icon={<VideoCameraOutlined />}>
              DETALLE
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="header" style={{padding:'0px 15px', color:'white', fontSize:20}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '0px 0px',
              padding: 0,
              minHeight: 280,
            }}
          >
            {menu === 1 && <List />}
            {menu === 1 && <Modals />}
            {menu === 2 && <Detail />}
          </Content>
        </Layout>
      </Layout>
     );
}
 
export default Home;