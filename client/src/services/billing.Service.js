// Service for interacting with the Billing API using Axios
import axios from 'axios';

const API_BASE_URL = 'http://192.168.88.247:4004/api/billing';

export async function getAllBills() {
    const response = await axios.get(API_BASE_URL);
    return response.data;
}

export async function getBillById(id) {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
}

export async function createBill(billData) {
    const response = await axios.post(API_BASE_URL, billData);
    return response.data;
}

export async function updateBill(id, billData) {
    const response = await axios.put(`${API_BASE_URL}/${id}`, billData);
    return response.data;
}

export async function deleteBill(id) {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
}

