import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import AccountPage from './pages/AccountPage';
import PaymentPage from './pages/PaymentPage';
import BillingPage from './pages/BillingPage';
import ApiKeyPage from './pages/ApiKeyPage';
import NotificationsPage from './pages/NotificationsPage';
import './App.css';

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1890ff',
                },
            }}
        >
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="accounts" element={<AccountPage />} />
                        <Route path="payments" element={<PaymentPage />} />
                        <Route path="billing" element={<BillingPage />} />
                        <Route path="apikeys" element={<ApiKeyPage />} />
                        <Route path="notifications" element={<NotificationsPage />} />
                    </Route>
                </Routes>
            </Router>
        </ConfigProvider>
    );
}

export default App;
