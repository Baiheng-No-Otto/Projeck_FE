import apiClient from '@/core/api/client';
import { ORDERS_ENDPOINTS } from '@/core/api/endpoints';

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalPrice: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderRequest {
  items: OrderItem[];
  shippingAddress: string;
}

export interface UpdateOrderRequest {
  status?: string;
  shippingAddress?: string;
}

class OrderService {
  async getAllOrders(params?: any) {
    const response = await apiClient.get(ORDERS_ENDPOINTS.GET_ALL, { params });
    return response.data;
  }

  async getOrderById(id: string) {
    const response = await apiClient.get(ORDERS_ENDPOINTS.GET_BY_ID(id));
    return response.data;
  }

  async createOrder(data: CreateOrderRequest) {
    const response = await apiClient.post(ORDERS_ENDPOINTS.CREATE, data);
    return response.data;
  }

  async updateOrder(id: string, data: UpdateOrderRequest) {
    const response = await apiClient.put(ORDERS_ENDPOINTS.UPDATE(id), data);
    return response.data;
  }

  async deleteOrder(id: string) {
    const response = await apiClient.delete(ORDERS_ENDPOINTS.DELETE(id));
    return response.data;
  }

  async cancelOrder(id: string) {
    return this.updateOrder(id, { status: 'cancelled' });
  }
}

export default new OrderService();
