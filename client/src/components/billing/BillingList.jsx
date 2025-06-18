import React, { useState, useEffect } from 'react';
import { Table, Card, Tag, Button, message } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { getAllBills } from '../../services/billing.Service';

const BillingList = () => {
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBills();
    }, []);

    const fetchBills = async () => {
        try {
            const data = await getAllBills();
            setBills(data);
            setLoading(false);
        } catch (err) {
            message.error('Failed to fetch bills: ' + err.message);
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'paid':
                return 'success';
            case 'pending':
                return 'warning';
            case 'overdue':
                return 'error';
            default:
                return 'default';
        }
    };

    const columns = [
        {
            title: 'Invoice #',
            dataIndex: 'invoiceNumber',
            key: 'invoiceNumber',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (amount) => `$${amount.toFixed(2)}`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag color={getStatusColor(status)}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
            key: 'dueDate',
            render: (date) => new Date(date).toLocaleDateString(),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Button
                    type="link"
                    icon={<DownloadOutlined />}
                    onClick={() => message.info('Downloading invoice...')}
                >
                    Download
                </Button>
            ),
        },
    ];

    return (
        <Card title="Billing History">
            <Table
                columns={columns}
                dataSource={bills}
                loading={loading}
                rowKey="_id"
                pagination={{
                    pageSize: 10,
                    showTotal: (total, range) => 
                        `${range[0]}-${range[1]} of ${total} bills`,
                }}
            />
        </Card>
    );
};

export default BillingList;
