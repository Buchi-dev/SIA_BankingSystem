import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, List, Card, Tag, Skeleton, message } from 'antd';
import PaymentForm from '../components/payment/PaymentForm';
import { getAllPayments } from '../services/payment.Service';

const { Title } = Typography;

const PaymentPage = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPayments();
    }, []);

    const fetchPayments = async () => {
        try {
            const data = await getAllPayments();
            setPayments(data);
            setLoading(false);
        } catch (err) {
            message.error('Failed to fetch payments: ' + err.message);
            setLoading(false);
        }
    };

    const handlePaymentSuccess = () => {
        fetchPayments();
        message.success('Payment processed successfully!');
    };

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'completed':
                return 'success';
            case 'pending':
                return 'processing';
            case 'failed':
                return 'error';
            default:
                return 'default';
        }
    };

    return (
        <div className="payment-page">
            <Title level={2}>Payments</Title>
            
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={10}>
                    <PaymentForm onSuccess={handlePaymentSuccess} />
                </Col>
                
                <Col xs={24} lg={14}>
                    <Card title="Payment History">
                        <List
                            loading={loading}
                            itemLayout="horizontal"
                            dataSource={payments}
                            renderItem={(payment) => (
                                <List.Item>
                                    <Skeleton loading={loading} active>
                                        <List.Item.Meta
                                            title={`Payment to ${payment.recipientAccount}`}
                                            description={
                                                <>
                                                    <p>Amount: ${payment.amount?.toFixed(2)}</p>
                                                    <p>Type: {payment.paymentType}</p>
                                                    <p>Date: {new Date(payment.createdAt).toLocaleDateString()}</p>
                                                </>
                                            }
                                        />
                                        <Tag color={getStatusColor(payment.status)}>
                                            {payment.status}
                                        </Tag>
                                    </Skeleton>
                                </List.Item>
                            )}
                            pagination={{
                                pageSize: 5,
                                size: 'small',
                            }}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default PaymentPage;
