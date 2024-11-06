// src/services/service.js
import axios from 'axios';

// Access the API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fileUpload = async (files) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });

  try {
    const response = await axios.post(`${API_BASE_URL}/api/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response;
  } catch (error) {
    console.error('File upload failed:', error);
    throw error;
  }
};
