import React from 'react';
import BillingList from '../components/billing/BillingList';

const BillingPage = () => {
    return (
        <div className="billing-page">
            <h1>Billing & Invoices</h1>
            <BillingList />
        </div>
    );
};

export default BillingPage;
