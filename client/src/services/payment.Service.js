// Service for interacting with the Payment API using Axios
import axios from 'axios';

const API_BASE_URL = 'http://192.168.88.247:4002/api/payments';

export async function getAllPayments() {
    const response = await axios.get(API_BASE_URL);
    return response.data;
}

export async function getPaymentById(id) {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
}

export async function createPayment(paymentData) {
    const response = await axios.post(API_BASE_URL, paymentData);
    return response.data;
}

export async function updatePayment(id, paymentData) {
    const response = await axios.put(`${API_BASE_URL}/${id}`, paymentData);
    return response.data;
}

export async function deletePayment(id) {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
}

