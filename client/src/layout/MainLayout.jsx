import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ padding: 0, background: '#fff' }}>
                <Navbar />
            </Header>
            <Layout>
                <Sider width={250} theme="light">
                    <Sidebar />
                </Sider>
                <Content style={{ padding: '24px', background: '#f0f2f5' }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
