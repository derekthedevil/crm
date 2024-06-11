import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  
  //   UploadOutlined,
  //   UserOutlined,
  //   VideoCameraOutlined,
  } from '@ant-design/icons';
import { FaTag } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;
import './MainLayout.css'
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={280} >
        <div className="demo-logo-vertical" ></div>
        <Menu onClick={()=>{console.log('hello');}}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <FaUserAlt  onClick={()=>{console.log('hello')}}  />,
              label: 'customer',
             
            },
            {
              key: '2',
              icon: <SiGoogleads />,
              label: 'Leads',
            },
            {
              key: '3',
              icon: <FaTag />,
              label: 'sales',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
         
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;