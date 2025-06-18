import React from 'react';
import { Layout, Menu, Button, Space, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { BellOutlined, UserOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <Layout.Header style={{ background: '#fff', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo">
                <Link to="/" style={{ color: '#1890ff', fontSize: '1.5em', fontWeight: 'bold' }}>
                    Banking System
                </Link>
            </div>
            <Space size="large">
                <Link to="/notifications">
                    <Badge count={5}>
                        <Button icon={<BellOutlined />} type="text" />
                    </Badge>
                </Link>
                <Space>
                    <UserOutlined />
                    <span>Welcome, User</span>
                    <Button type="primary" danger>Logout</Button>
                </Space>
            </Space>
        </Layout.Header>
    );
};

export default Navbar;
