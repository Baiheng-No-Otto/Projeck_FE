# Project Structure Documentation

## Directory Structure

```
src/
├── features/          # Feature modules (business logic)
│   ├── auth/         # Authentication feature
│   │   ├── pages/    # Auth pages
│   │   ├── components/  # Auth components
│   │   └── services/ # Auth API services
│   ├── products/     # Products feature
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
│   ├── orders/       # Orders feature
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
│   └── dashboard/    # Dashboard feature
│
├── core/             # Core modules (shared infrastructure)
│   ├── api/          # API client and endpoints
│   │   ├── client.ts       # Axios instance with interceptors
│   │   └── endpoints.ts    # API endpoint definitions
│   └── context/      # React contexts
│       └── AuthContext.tsx # Authentication context
│
└── shared/          # Shared utilities and components
    ├── components/  # Reusable UI components
    ├── hooks/       # Custom React hooks
    ├── utils/       # Utility functions
    ├── constants/   # App constants
    └── styles/      # Shared CSS/Tailwind classes
```

## Architecture Patterns

### Clean Code Principles

1. **Separation of Concerns** - Each module has a specific responsibility
2. **DRY (Don't Repeat Yourself)** - Shared code in `shared/` and `core/`
3. **Single Responsibility** - Files should do one thing well
4. **SOLID Principles** - Maintainable and scalable code

### Feature Module Structure

Each feature module follows:
- `pages/` - Page-level components (routing)
- `components/` - Reusable feature components
- `services/` - API calls and business logic
- `index.ts` - Export public APIs

## Key Files

- `src/core/api/client.ts` - Centralized API client with auth interceptors
- `src/core/context/AuthContext.tsx` - Global authentication state
- `src/shared/hooks/useAsync.ts` - Generic async operations hook
- `src/shared/utils/helpers.ts` - Utility functions
- `.env.local` - Environment configuration

## API Integration

The app uses Axios with automatic JWT token injection in requests.
Auth context manages login/logout and token storage.

## Styling

Tailwind CSS is used for styling. Theme colors:
- Primary Blue: `bg-blue-600`, `text-blue-600`
- Secondary Gray: `bg-gray-600`, `text-gray-600`
- Success Green: `bg-green-600`, `text-green-600`
- Error Red: `bg-red-600`, `text-red-600`
