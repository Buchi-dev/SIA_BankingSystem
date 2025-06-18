import React from 'react';
import { Form, Input, Select, Button, Card, message } from 'antd';
import { createPayment } from '../../services/payment.Service';

const { Option } = Select;
const { TextArea } = Input;

const PaymentForm = ({ onSuccess }) => {
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        try {
            const response = await createPayment(values);
            message.success('Payment processed successfully!');
            form.resetFields();
            if (onSuccess) onSuccess(response);
        } catch (err) {
            message.error('Failed to process payment: ' + err.message);
        }
    };

    return (
        <Card title="Make a Payment" style={{ marginBottom: 24 }}>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                    paymentType: 'transfer'
                }}
            >
                <Form.Item
                    name="amount"
                    label="Amount"
                    rules={[
                        { required: true, message: 'Please enter amount' },
                        { type: 'number', min: 0.01, message: 'Amount must be greater than 0' }
                    ]}
                >
                    <Input type="number" prefix="$" placeholder="0.00" />
                </Form.Item>

                <Form.Item
                    name="recipientAccount"
                    label="Recipient Account"
                    rules={[{ required: true, message: 'Please enter recipient account' }]}
                >
                    <Input placeholder="Enter recipient account number" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: 'Please enter payment description' }]}
                >
                    <TextArea rows={4} placeholder="Enter payment description" />
                </Form.Item>

                <Form.Item
                    name="paymentType"
                    label="Payment Type"
                    rules={[{ required: true, message: 'Please select payment type' }]}
                >
                    <Select>
                        <Option value="transfer">Transfer</Option>
                        <Option value="bill_payment">Bill Payment</Option>
                        <Option value="withdrawal">Withdrawal</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Process Payment
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default PaymentForm;
