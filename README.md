# E-Commerce Frontend

A modern, clean-code frontend application for an e-commerce platform built with Next.js, TypeScript, Tailwind CSS, and Axios.

## 🚀 Features

- **User Authentication** - Register and login with JWT token support
- **Products Catalog** - Browse and view all available products
- **Orders Management** - View your order history and status
- **User Dashboard** - Personal dashboard with account information
- **Responsive Design** - Mobile-friendly UI with Tailwind CSS
- **Clean Architecture** - Feature-based folder structure with clear separation of concerns
- **Type Safety** - Full TypeScript support throughout the application
- **API Integration** - Axios HTTP client with automatic JWT injection and error handling

## 📋 Prerequisites

- Node.js 18 or higher
- npm 9 or higher
- Backend API running on `http://localhost:3000/api`

## 🛠️ Installation

1. **Navigate to the project directory:**
```bash
cd Projeck_BE/FE
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
Create a `.env.local` file:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
NEXT_PUBLIC_ENV=development
```

## 🏃 Running the Application

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

### Code Linting
```bash
npm run lint
```

## 📁 Project Structure

```
FE/
├── src/
│   ├── features/                    # Feature modules
│   │   ├── auth/                   # Authentication feature
│   │   │   ├── pages/              # Page components
│   │   │   ├── components/         # Auth components (LoginForm, RegisterForm)
│   │   │   └── services/           # Auth API services
│   │   ├── products/               # Products feature
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   └── services/
│   │   ├── orders/                 # Orders feature
│   │   │   ├── pages/
│   │   │   ├── components/
│   │   │   └── services/
│   │   └── dashboard/              # Dashboard feature
│   │       ├── pages/
│   │       └── components/
│   ├── core/                        # Core infrastructure
│   │   ├── api/
│   │   │   ├── client.ts           # Axios instance with interceptors
│   │   │   └── endpoints.ts        # API endpoint definitions
│   │   └── context/
│   │       └── AuthContext.tsx     # Authentication context provider
│   └── shared/                      # Shared utilities
│       ├── components/             # Reusable UI components
│       │   ├── Navigation.tsx      # Navigation bar
│       │   ├── LoadingSpinner.tsx  # Loading indicator
│       │   ├── ErrorMessage.tsx    # Error display
│       │   └── SuccessMessage.tsx  # Success notification
│       ├── hooks/                  # Custom React hooks
│       │   ├── useAsync.ts         # Async operations hook
│       │   └── useFetch.ts         # Fetch hook
│       ├── utils/                  # Utility functions
│       │   └── helpers.ts          # Helper functions
│       ├── constants/              # Application constants
│       └── styles/                 # Tailwind & CSS
├── app/                            # Next.js App Router
│   ├── page.tsx                   # Home page
│   ├── layout.tsx                 # Root layout
│   ├── auth/
│   │   ├── login/page.tsx         # Login page
│   │   └── register/page.tsx      # Register page
│   ├── dashboard/page.tsx         # Dashboard page
│   ├── products/page.tsx          # Products page
│   └── orders/page.tsx            # Orders page
├── public/                         # Static assets
├── .env.local                      # Environment variables
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── next.config.ts                  # Next.js configuration
└── package.json                    # Project dependencies
```

## 🔐 Authentication Flow

1. **Register** - User creates a new account via `/auth/register`
2. **Login** - User logs in via `/auth/login` and receives JWT token
3. **Token Storage** - Token is stored in `localStorage`
4. **Auto-Injection** - Axios automatically includes token in all API requests
5. **Protected Routes** - Dashboard and Orders pages require authentication
6. **Auto-Redirect** - Unauthorized requests redirect to login page

## 🌐 API Endpoints Integration

The application integrates with the following backend endpoints:

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status
- `DELETE /api/orders/:id` - Cancel order

## 🎨 Styling

The application uses **Tailwind CSS** for styling with the following color scheme:
- **Primary**: Blue (`bg-blue-600`, `text-blue-600`)
- **Secondary**: Gray (`bg-gray-600`, `text-gray-600`)
- **Success**: Green (`bg-green-600`, `text-green-600`)
- **Error**: Red (`bg-red-600`, `text-red-600`)

## 📦 Dependencies

- **next** - React framework
- **react** & **react-dom** - UI library
- **typescript** - Type safety
- **tailwindcss** - Utility-first CSS
- **axios** - HTTP client
- **eslint** - Code linting

## 🔄 State Management

The application uses **React Context API** for state management:
- **AuthContext** - Manages authentication state (user, token, login/logout)
- **useAuth Hook** - Custom hook to access auth state

## 🛣️ Page Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with features overview |
| `/auth/login` | Login | User login form |
| `/auth/register` | Register | User registration form |
| `/dashboard` | Dashboard | User profile and statistics |
| `/products` | Products | Browse all products |
| `/orders` | Orders | View user's orders |

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel** - Recommended for Next.js
- **GitHub Pages** - For static export
- **AWS** - EC2, Lambda, or CloudFront
- **Azure** - App Service or Static Web Apps
- **DigitalOcean** - Droplets or App Platform

### Pre-Deployment Checklist
- [ ] Update `NEXT_PUBLIC_API_BASE_URL` for production API
- [ ] Update environment variables
- [ ] Test all authentication flows
- [ ] Verify all API endpoints are accessible
- [ ] Run build and check for errors
- [ ] Test responsive design on mobile devices

## 🔍 Code Quality

### ESLint Configuration
```bash
npm run lint
```

### TypeScript
Full type safety with `strict` mode enabled in `tsconfig.json`

### Clean Code Principles
- **Separation of Concerns** - Each feature is self-contained
- **DRY (Don't Repeat Yourself)** - Shared utilities and components
- **Single Responsibility** - Each file has one primary purpose
- **SOLID Principles** - Maintainable and scalable code

## 🤝 Contributing

1. Follow the established folder structure
2. Create feature-specific modules in `src/features/`
3. Use TypeScript for type safety
4. Run linting before committing
5. Keep components and services focused and small

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api

# Environment
NEXT_PUBLIC_ENV=development
```

## 🐛 Troubleshooting

### Build Fails
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Check TypeScript errors: `npm run build`

### API Connection Issues
- Ensure backend API is running on the correct port
- Check `NEXT_PUBLIC_API_BASE_URL` in `.env.local`
- Verify CORS is enabled on the backend

### Auth Issues
- Clear `localStorage` in browser DevTools
- Check JWT token validity
- Verify backend is returning correct token format

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Axios Docs](https://axios-http.com/docs/intro)
- [React Hooks Docs](https://react.dev/reference/react)

## 📄 License

This project is part of the E-Commerce CRUD API task.

## 👨‍💻 Author

Created by: Gusti Arsyad

---

**Last Updated**: February 6, 2026  
**Status**: ✅ Production Ready