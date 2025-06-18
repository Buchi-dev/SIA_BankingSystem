import React from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    DashboardOutlined,
    BankOutlined,
    SwapOutlined,
    FileTextOutlined,
    KeyOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const items = [
        {
            key: '/',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
        },
        {
            key: '/accounts',
            icon: <BankOutlined />,
            label: 'Accounts',
        },
        {
            key: '/payments',
            icon: <SwapOutlined />,
            label: 'Payments',
        },
        {
            key: '/billing',
            icon: <FileTextOutlined />,
            label: 'Billing',
        },
        {
            key: '/apikeys',
            icon: <KeyOutlined />,
            label: 'API Keys',
        },
    ];

    return (
        <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
            onClick={({ key }) => navigate(key)}
        />
    );
};

export default Sidebar;
