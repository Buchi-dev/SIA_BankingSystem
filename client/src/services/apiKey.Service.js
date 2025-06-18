// Service for interacting with the API Key Management API using Axios
import axios from 'axios';

const API_BASE_URL = 'http://192.168.88.247:4003/api/apikeys';

export async function getAllApiKeys() {
    const response = await axios.get(API_BASE_URL);
    return response.data;
}

export async function getApiKeyById(id) {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
}

export async function createApiKey(apiKeyData) {
    const response = await axios.post(API_BASE_URL, apiKeyData);
    return response.data;
}

export async function updateApiKey(id, apiKeyData) {
    const response = await axios.put(`${API_BASE_URL}/${id}`, apiKeyData);
    return response.data;
}

export async function deleteApiKey(id) {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
}

