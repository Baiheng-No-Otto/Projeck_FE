import apiClient from '@/core/api/client';
import { AUTH_ENDPOINTS } from '@/core/api/endpoints';

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
}

class AuthService {
  async register(data: RegisterRequest) {
    const response = await apiClient.post(AUTH_ENDPOINTS.REGISTER, data);
    return response.data;
  }

  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post(AUTH_ENDPOINTS.LOGIN, data);
    return response.data;
  }

  async logout() {
    await apiClient.post(AUTH_ENDPOINTS.LOGOUT);
  }

  async refreshToken() {
    const response = await apiClient.post(AUTH_ENDPOINTS.REFRESH_TOKEN);
    return response.data;
  }
}

export default new AuthService();
