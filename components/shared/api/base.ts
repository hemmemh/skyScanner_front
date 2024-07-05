import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const API_URL = 'https://localhost:3000'

const apiInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });



  apiInstance.interceptors.request.use((config) => {
    const token =localStorage.getItem('access_token') ?? ''
    config.headers.Authorization = token
    return config
  }, (error) => {
    return Promise.reject(error)
  })



export default apiInstance
