'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/core/context/AuthContext';
import { LoadingSpinner, ErrorMessage } from '@/shared/components';
import orderService, { Order } from '@/features/orders/services/orderService';
import { formatDate, formatCurrency } from '@/shared/utils/helpers';
import { useRouter } from 'next/navigation';

export default function OrdersPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !authLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [mounted, authLoading, isAuthenticated, router]);

  useEffect(() => {
    if (!isAuthenticated || !mounted) return;

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await orderService.getAllOrders();
        setOrders(response.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [isAuthenticated, mounted]);

  if (!mounted || authLoading) {
    return <LoadingSpinner message="Loading..." />;
  }

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return <LoadingSpinner message="Loading orders..." />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      {error && <ErrorMessage message={error} />}

      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-600">No orders yet. Start shopping!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                  <p className="text-gray-600 text-sm">{formatDate(order.createdAt)}</p>
                </div>
                <span className={`px-3 py-1 rounded text-sm font-semibold ${
                  order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                  order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                  order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-700 mb-2"><strong>Address:</strong> {order.shippingAddress}</p>
                <p className="text-xl font-bold text-blue-600">{formatCurrency(order.totalPrice)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
