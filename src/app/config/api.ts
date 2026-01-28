import axios from 'axios';

// Замените на адрес вашего Django бекенда
// Например: 'http://localhost:8000/api' или 'https://ваш-домен.com/api'
const API_BASE_URL = 'http://localhost:8000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Типы для API запросов
export interface JobApplicationData {
  jobTitle: string;
  phoneNumber: string;
  message: string;
}

// API методы
export const jobApplicationAPI = {
  // Отправка отклика на вакансию
  submitApplication: (data: JobApplicationData) => {
    return api.post('/job-applications/', data);
  },
};
