import React, { useState } from 'react';
import AccountList from '../components/account/AccountList';
import AccountForm from '../components/account/AccountForm';

const AccountPage = () => {
    const [showForm, setShowForm] = useState(false);

    const handleSuccess = () => {
        setShowForm(false);
        // You might want to refresh the account list here
    };

    return (
        <div className="account-page">
            <div className="page-header">
                <h1>Accounts</h1>
                <button onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Close Form' : 'Create New Account'}
                </button>
            </div>
            
            {showForm && (
                <div className="form-container">
                    <AccountForm onSuccess={handleSuccess} />
                </div>
            )}
            
            <AccountList />
        </div>
    );
};

export default AccountPage;
