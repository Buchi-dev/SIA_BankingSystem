import React from 'react';
import { Typography, Row, Col, Card, Statistic } from 'antd';
import { DollarOutlined, SwapOutlined, BellOutlined } from '@ant-design/icons';
import AccountList from '../components/account/AccountList';
import NotificationList from '../components/notification/NotificationList';

const { Title } = Typography;

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Title level={2}>Dashboard</Title>
            
            <Row gutter={[16, 24]}>
                {/* Statistics Cards */}
                <Col xs={24} sm={8}>
                    <Card>
                        <Statistic
                            title="Total Balance"
                            value={42567.89}
                            precision={2}
                            prefix={<DollarOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card>
                        <Statistic
                            title="Recent Transactions"
                            value={24}
                            prefix={<SwapOutlined />}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card>
                        <Statistic
                            title="New Notifications"
                            value={5}
                            prefix={<BellOutlined />}
                        />
                    </Card>
                </Col>

                {/* Account List */}
                <Col xs={24} lg={16}>
                    <AccountList />
                </Col>

                {/* Notifications */}
                <Col xs={24} lg={8}>
                    <NotificationList />
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
