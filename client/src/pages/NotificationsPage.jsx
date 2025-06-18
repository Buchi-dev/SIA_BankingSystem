import React from 'react';
import NotificationList from '../components/notification/NotificationList';

const NotificationsPage = () => {
    return (
        <div className="notifications-page">
            <h1>Notifications</h1>
            <NotificationList />
        </div>
    );
};

export default NotificationsPage;
