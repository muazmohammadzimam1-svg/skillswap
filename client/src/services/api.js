import axios from 'axios'

const defaultApiBase = typeof window !== 'undefined' ? `${window.location.origin}/api` : '/api'
export const API_BASE = import.meta.env.VITE_API_BASE || defaultApiBase
export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || API_BASE.replace(/\/api$/, '')

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
})

// attach token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api
