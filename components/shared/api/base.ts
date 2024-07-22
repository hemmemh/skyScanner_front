import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const API_URL = 'https://localhost:3000'

const apiInstance = axios.create({
    baseURL: 'http://localhost:5100/api/',
  });



  apiInstance.interceptors.request.use((config) => {
    const token =localStorage.getItem('access_token') ?? ''
    config.headers.Authorization = token
    return config
  }, (error) => {
    return Promise.reject(error)
  })


  apiInstance.interceptors.response.use((response)=>{
   return response.data
  })


  



export default apiInstance
