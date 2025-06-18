// Service for interacting with the Notification API using Axios
import axios from 'axios';

const API_BASE_URL = 'http://192.168.88.247:4005/api/notifications';

export async function getAllNotifications() {
    const response = await axios.get(API_BASE_URL);
    return response.data;
}

export async function getNotificationById(id) {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
}

export async function createNotification(notificationData) {
    const response = await axios.post(API_BASE_URL, notificationData);
    return response.data;
}

export async function updateNotification(id, notificationData) {
    const response = await axios.put(`${API_BASE_URL}/${id}`, notificationData);
    return response.data;
}

export async function deleteNotification(id) {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
}

