'use client';

import Link from 'next/link';
import React from 'react';
import { useAuth } from '@/core/context/AuthContext';
import { ROUTES } from '@/shared/constants';

export const Navigation: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={ROUTES.HOME} className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">E-Commerce</h1>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href={ROUTES.PRODUCTS} className="text-gray-700 hover:text-blue-600">
              Products
            </Link>

            {isAuthenticated ? (
              <>
                <Link href={ROUTES.ORDERS} className="text-gray-700 hover:text-blue-600">
                  Orders
                </Link>
                <Link href={ROUTES.DASHBOARD} className="text-gray-700 hover:text-blue-600">
                  Dashboard
                </Link>
                <span className="text-gray-600">{user?.name}</span>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href={ROUTES.LOGIN}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Login
                </Link>
                <Link
                  href={ROUTES.REGISTER}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
