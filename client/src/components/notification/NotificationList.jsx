import React, { useState, useEffect } from 'react';
import { List, Card, Tag, Button, message, Typography } from 'antd';
import { BellOutlined, CheckOutlined } from '@ant-design/icons';
import { getAllNotifications } from '../../services/notification.Service';

const { Text } = Typography;

const NotificationList = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const data = await getAllNotifications();
            setNotifications(data);
            setLoading(false);
        } catch (err) {
            message.error('Failed to fetch notifications: ' + err.message);
            setLoading(false);
        }
    };

    const getNotificationIcon = (type) => {
        switch (type?.toLowerCase()) {
            case 'alert':
                return { icon: <BellOutlined style={{ color: '#ff4d4f' }} />, color: 'error' };
            case 'info':
                return { icon: <BellOutlined style={{ color: '#1890ff' }} />, color: 'processing' };
            default:
                return { icon: <BellOutlined />, color: 'default' };
        }
    };

    const markAsRead = (id) => {
        // Implement mark as read functionality
        message.success('Marked as read');
    };

    return (
        <Card title="Notifications">
            <List
                itemLayout="horizontal"
                dataSource={notifications}
                loading={loading}
                renderItem={(item) => {
                    const { icon, color } = getNotificationIcon(item.type);
                    return (
                        <List.Item
                            actions={[
                                <Button
                                    key="mark-read"
                                    type="text"
                                    icon={<CheckOutlined />}
                                    onClick={() => markAsRead(item._id)}
                                >
                                    Mark as read
                                </Button>
                            ]}
                        >
                            <List.Item.Meta
                                avatar={icon}
                                title={
                                    <div>
                                        {item.title}{' '}
                                        <Tag color={color}>{item.type}</Tag>
                                    </div>
                                }
                                description={
                                    <>
                                        <Text>{item.message}</Text>
                                        <br />
                                        <Text type="secondary">
                                            {new Date(item.createdAt).toLocaleString()}
                                        </Text>
                                    </>
                                }
                            />
                        </List.Item>
                    );
                }}
                pagination={{
                    pageSize: 5,
                    size: 'small',
                }}
            />
        </Card>
    );
};

export default NotificationList;
