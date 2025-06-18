import React from 'react';
import ApiKeyList from '../components/apikey/ApiKeyList';

const ApiKeyPage = () => {
    return (
        <div className="apikey-page">
            <h1>API Keys</h1>
            <div className="page-content">
                <ApiKeyList />
            </div>
        </div>
    );
};

export default ApiKeyPage;
