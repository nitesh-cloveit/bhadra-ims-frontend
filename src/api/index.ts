import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use((config) => {
  // const token = localStorage.getItem('token');
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZV9pZCI6MSwib3JnYW5pemF0aW9uX2lkIjoxLCJuYW1lIjoiTml0ZXNoIiwiZW1haWwiOiJuaXRlc2hzaW5naDEzNTdAZ21haWwuY29tIiwibW9iaWxlIjoiOTg0MjU4MDEzNCIsInBhc3N3b3JkIjoiJDJiJDEwJG1mSnEyWjJnZW1QSUtpRU9xZWZYeGVzYWJGWDV0MjFILnpJenBwUWV0OXFsTnRlQ2IxRTJXIiwiY3JlYXRlZF9hdCI6IjIwMjQtMTItMDFUMDc6MDc6NTkuMjU5WiIsInVwZGF0ZWRfYXQiOiIyMDI0LTEyLTAxVDA3OjA3OjU5LjI1OVoiLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiY3VzdG9tZXIifSwiaWF0IjoxNzMzMDM2OTgxLCJleHAiOjE3MzM2NDE3ODF9.KIxXgG8Aiss1ng-o41kgNak6Ao_e7pA6sWfsyTB6Y-A";

  config.headers.Authorization = `Bearer ${token}`;
  config.headers['Content-Type'] = 'application/json';
  return config;
});


export { api };