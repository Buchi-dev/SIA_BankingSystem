import React, { useState, useEffect } from 'react';
import { Table, Card, Tag, Button, Space, message } from 'antd';
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllApiKeys, deleteApiKey } from '../../services/apiKey.Service';

const ApiKeyList = () => {
    const [apiKeys, setApiKeys] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchApiKeys();
    }, []);

    const fetchApiKeys = async () => {
        try {
            const data = await getAllApiKeys();
            setApiKeys(data);
            setLoading(false);
        } catch (err) {
            message.error('Failed to fetch API keys: ' + err.message);
            setLoading(false);
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        message.success('API Key copied to clipboard');
    };

    const handleDelete = async (id) => {
        try {
            await deleteApiKey(id);
            message.success('API Key deleted successfully');
            fetchApiKeys();
        } catch (err) {
            message.error('Failed to delete API key: ' + err.message);
        }
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'API Key',
            dataIndex: 'key',
            key: 'key',
            render: (text) => (
                <Space>
                    <span>{text.substring(0, 8)}...</span>
                    <Button 
                        icon={<CopyOutlined />} 
                        size="small"
                        onClick={() => handleCopy(text)}
                    />
                </Space>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag color={status === 'active' ? 'success' : 'error'}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Created',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (date) => new Date(date).toLocaleDateString(),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(record._id)}
                />
            ),
        },
    ];

    return (
        <Card title="API Keys">
            <Table
                columns={columns}
                dataSource={apiKeys}
                loading={loading}
                rowKey="_id"
            />
        </Card>
    );
};

export default ApiKeyList;
