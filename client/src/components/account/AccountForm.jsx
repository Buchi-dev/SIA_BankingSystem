import React from 'react';
import { Form, Input, Button, Select, Card, message } from 'antd';
import { createAccount } from '../../services/accountManagement.Service';

const { Option } = Select;

const AccountForm = ({ onSuccess }) => {
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        try {
            const response = await createAccount(values);
            message.success('Account created successfully!');
            form.resetFields();
            if (onSuccess) onSuccess(response);
        } catch (err) {
            message.error('Failed to create account: ' + err.message);
        }
    };

    return (
        <Card title="Create New Account" style={{ marginBottom: 24 }}>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                    accountType: 'savings',
                }}
            >
                <Form.Item
                    name="accountName"
                    label="Account Name"
                    rules={[{ required: true, message: 'Please enter account name' }]}
                >
                    <Input placeholder="Enter account name" />
                </Form.Item>

                <Form.Item
                    name="initialBalance"
                    label="Initial Balance"
                    rules={[
                        { required: true, message: 'Please enter initial balance' },
                        { type: 'number', min: 0, message: 'Balance must be positive' }
                    ]}
                >
                    <Input type="number" prefix="$" placeholder="0.00" />
                </Form.Item>

                <Form.Item
                    name="accountType"
                    label="Account Type"
                    rules={[{ required: true, message: 'Please select account type' }]}
                >
                    <Select>
                        <Option value="savings">Savings</Option>
                        <Option value="checking">Checking</Option>
                        <Option value="business">Business</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create Account
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default AccountForm;
