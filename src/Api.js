// src/api.js
import axios from 'axios';

const apiUrl = 'https://your-api-url.com'; // Replace with your Flask API URL

export const getOperationCode = async () => {
  try {
    const response = await axios.get(`${apiUrl}/bfhl`);
    return response.data.operation_code;
  } catch (error) {
    console.error('Error fetching operation code:', error);
    throw error;
  }
};

export const postUserData = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/bfhl`, { data });
    return response.data;
  } catch (error) {
    console.error('Error posting user data:', error);
    throw error;
  }
};
