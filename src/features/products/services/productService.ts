import apiClient from '@/core/api/client';
import { PRODUCTS_ENDPOINTS } from '@/core/api/endpoints';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image?: string;
}

export interface UpdateProductRequest extends Partial<CreateProductRequest> {}

class ProductService {
  async getAllProducts(params?: any) {
    const response = await apiClient.get(PRODUCTS_ENDPOINTS.GET_ALL, { params });
    return response.data;
  }

  async getProductById(id: string) {
    const response = await apiClient.get(PRODUCTS_ENDPOINTS.GET_BY_ID(id));
    return response.data;
  }

  async createProduct(data: CreateProductRequest) {
    const response = await apiClient.post(PRODUCTS_ENDPOINTS.CREATE, data);
    return response.data;
  }

  async updateProduct(id: string, data: UpdateProductRequest) {
    const response = await apiClient.put(PRODUCTS_ENDPOINTS.UPDATE(id), data);
    return response.data;
  }

  async deleteProduct(id: string) {
    const response = await apiClient.delete(PRODUCTS_ENDPOINTS.DELETE(id));
    return response.data;
  }

  async searchProducts(query: string) {
    return this.getAllProducts({ search: query });
  }
}

export default new ProductService();
