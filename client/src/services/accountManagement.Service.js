// Service for interacting with the Account Management API using Axios
import axios from 'axios';

const API_BASE_URL = 'http://192.168.88.247:4001/api/accounts';

export async function getAllAccounts() {
    const response = await axios.get(API_BASE_URL);
    return response.data;
}

export async function getAccountById(id) {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
}

export async function createAccount(accountData) {
    const response = await axios.post(API_BASE_URL, accountData);
    return response.data;
}

export async function updateAccount(id, accountData) {
    const response = await axios.put(`${API_BASE_URL}/${id}`, accountData);
    return response.data;
}

export async function deleteAccount(id) {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
}

