import React, { useState, useEffect } from 'react';
import { Card, List, Skeleton, Tag, Typography, message } from 'antd';
import { getAllAccounts } from '../../services/accountManagement.Service';

const { Title } = Typography;

const AccountList = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const data = await getAllAccounts();
                setAccounts(data);
                setLoading(false);
            } catch (err) {
                message.error('Failed to fetch accounts: ' + err.message);
                setLoading(false);
            }
        };

        fetchAccounts();
    }, []);

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'active':
                return 'success';
            case 'inactive':
                return 'default';
            case 'blocked':
                return 'error';
            default:
                return 'processing';
        }
    };

    return (
        <Card>
            <Title level={2}>Account List</Title>
            <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
                dataSource={accounts}
                loading={loading}
                renderItem={(account) => (
                    <List.Item>
                        <Card size="small" title={account.accountName}>
                            <Skeleton loading={loading} active>
                                <p><strong>Balance:</strong> ${account.balance?.toFixed(2)}</p>
                                <p><strong>Account No:</strong> {account.accountNumber}</p>
                                <p>
                                    <strong>Status:</strong>{' '}
                                    <Tag color={getStatusColor(account.status)}>
                                        {account.status}
                                    </Tag>
                                </p>
                            </Skeleton>
                        </Card>
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default AccountList;
