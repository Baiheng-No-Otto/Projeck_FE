// Authentication API endpoints
export const AUTH_ENDPOINTS = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
};

// Products API endpoints
export const PRODUCTS_ENDPOINTS = {
  GET_ALL: '/products',
  GET_BY_ID: (id: string) => `/products/${id}`,
  CREATE: '/products',
  UPDATE: (id: string) => `/products/${id}`,
  DELETE: (id: string) => `/products/${id}`,
};

// Orders API endpoints
export const ORDERS_ENDPOINTS = {
  GET_ALL: '/orders',
  GET_BY_ID: (id: string) => `/orders/${id}`,
  CREATE: '/orders',
  UPDATE: (id: string) => `/orders/${id}`,
  DELETE: (id: string) => `/orders/${id}`,
};

// API Base URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';
