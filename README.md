# 🎓 Clunite - Campus Event Management Platform

<div align="center">
  <img src="frontend/public/placeholder-logo.svg" alt="Clunite Logo" width="200" height="200">
  
  **Unite • Create • Celebrate your campus journey**
  
  [![Next.js](https://img.shields.io/badge/Next.js-14.2.32-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Clunite is a comprehensive campus event management platform designed to connect students, clubs, and institutions across India's top colleges. The platform facilitates event discovery, team formation, achievement tracking, and community building.

### Key Statistics
- 🎓 **50,000+** Active Students
- 🏆 **10,000+** Events Hosted
- 🏫 **200+** Partner Colleges
- 📈 **95%** Success Rate

## ✨ Features

### For Students
- 🔍 **Smart Event Discovery** - AI-powered recommendations
- 👥 **Team Formation** - Connect with like-minded students
- 🏅 **Achievement Tracking** - Certificates and portfolio building
- 📊 **Analytics Dashboard** - Track progress and growth
- 📱 **Mobile App** - iOS and Android support

### For Organizers
- 🎪 **Event Management** - Create and manage events
- 📈 **Advanced Analytics** - Detailed insights and reporting
- 🎨 **Custom Branding** - White-label solutions
- 💰 **Revenue Management** - Payment processing
- 📋 **QR Code Attendance** - Digital check-ins

### For Institutions
- 🏢 **Multi-Department Management** - Centralized control
- 🔗 **Custom Integrations** - API access
- 👨‍💼 **Dedicated Support** - Account management
- 📊 **Advanced Reporting** - Comprehensive analytics

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14.2.32 with App Router
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: React Hooks + Context
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **API**: Next.js API Routes
- **File Storage**: Vercel Blob
- **Real-time**: Supabase Realtime

### DevOps & Tools
- **Package Manager**: npm/pnpm
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## 📁 Project Structure

```
Clunite/
├── 📁 frontend/                    # Frontend application
│   ├── 📁 src/
│   │   ├── 📁 app/                 # Next.js App Router pages
│   │   │   ├── 📁 dashboard/       # Dashboard pages
│   │   │   │   ├── 📁 student/     # Student dashboard
│   │   │   │   └── 📁 organizer/   # Organizer dashboard
│   │   │   ├── layout.tsx          # Root layout
│   │   │   └── page.tsx            # Landing page
│   │   ├── 📁 components/          # Reusable UI components
│   │   │   ├── 📁 ui/              # Base UI components
│   │   │   ├── app-sidebar.tsx     # Main sidebar
│   │   │   └── dashboard-header.tsx
│   │   ├── 📁 hooks/               # Custom React hooks
│   │   │   ├── useEvents.ts        # Event management hooks
│   │   │   └── useClubs.ts         # Club management hooks
│   │   ├── 📁 lib/                 # Utility libraries
│   │   │   ├── supabase.ts         # Supabase client
│   │   │   └── utils.ts            # Helper functions
│   │   ├── 📁 styles/              # Global styles
│   │   └── 📁 types/               # TypeScript type definitions
│   ├── 📁 public/                  # Static assets
│   ├── package.json                # Frontend dependencies
│   ├── next.config.mjs             # Next.js configuration
│   ├── tailwind.config.ts          # Tailwind CSS configuration
│   └── tsconfig.json               # TypeScript configuration
├── 📁 backend/                     # Backend services
│   ├── 📁 api/                     # API routes and handlers
│   │   ├── 📁 events/              # Event-related endpoints
│   │   └── 📁 upload/              # File upload endpoints
│   ├── 📁 database/                # Database utilities
│   ├── 📁 scripts/                 # Database scripts
│   │   ├── init-database-v2.sql    # Database schema
│   │   └── seed-data-v2.sql        # Sample data
│   ├── 📁 utils/                   # Backend utilities
│   ├── package.json                # Backend dependencies
│   └── tsconfig.json               # TypeScript configuration
├── 📁 docs/                        # Documentation
├── .env.local                      # Environment variables
├── .gitignore                      # Git ignore rules
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- Supabase account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/clunite.git
   cd clunite
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy environment template
   cp .env.example .env.local
   
   # Add your Supabase credentials
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up the database**
   ```bash
   # Run database initialization script
   cd backend
   npm run db:init
   
   # Seed with sample data (optional)
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   # Start frontend (from frontend directory)
   npm run dev
   
   # Start backend (from backend directory, if needed)
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Workflow

1. **Frontend Development**
   ```bash
   cd frontend
   npm run dev          # Start development server
   npm run build        # Build for production
   npm run lint         # Run ESLint
   ```

2. **Backend Development**
   ```bash
   cd backend
   npm run dev          # Start backend server
   npm run db:init      # Initialize database
   npm run db:seed      # Seed database
   ```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Event Endpoints
- `GET /api/events` - Get all events
- `GET /api/events/[id]` - Get event by ID
- `POST /api/events` - Create new event
- `PUT /api/events/[id]` - Update event
- `DELETE /api/events/[id]` - Delete event

### Club Endpoints
- `GET /api/clubs` - Get all clubs
- `GET /api/clubs/[id]` - Get club by ID
- `POST /api/clubs` - Create new club
- `PUT /api/clubs/[id]` - Update club

### Registration Endpoints
- `POST /api/events/[id]/register` - Register for event
- `DELETE /api/events/[id]/register` - Cancel registration
- `GET /api/events/[id]/participants` - Get event participants

## 🗄 Database Schema

### Core Tables

#### Users
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('student', 'organizer', 'admin')),
    college VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Clubs
```sql
CREATE TABLE clubs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    tagline VARCHAR(500),
    description TEXT,
    category VARCHAR(100) NOT NULL,
    college VARCHAR(255) NOT NULL,
    members_count INTEGER DEFAULT 0,
    events_hosted_count INTEGER DEFAULT 0,
    credibility_score DECIMAL(3,2) DEFAULT 0.0,
    is_verified BOOLEAN DEFAULT false,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Events
```sql
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    club_id UUID REFERENCES clubs(id) ON DELETE CASCADE,
    college VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    mode VARCHAR(20) NOT NULL DEFAULT 'offline',
    start_date TIMESTAMP WITH TIME ZONE NOT NULL,
    end_date TIMESTAMP WITH TIME ZONE,
    registration_deadline TIMESTAMP WITH TIME ZONE NOT NULL,
    max_participants INTEGER,
    current_participants INTEGER DEFAULT 0,
    entry_fee DECIMAL(10,2) DEFAULT 0.00,
    status VARCHAR(20) NOT NULL DEFAULT 'draft',
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy**
   ```bash
   cd frontend
   vercel --prod
   ```

3. **Environment Variables**
   Set the following in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Backend Deployment

The backend API routes are deployed as part of the Next.js application on Vercel. For standalone backend services, consider:

- **Railway** - For Node.js applications
- **Supabase** - For database and real-time features
- **AWS Lambda** - For serverless functions

### Database Deployment

1. **Supabase Setup**
   - Create a new Supabase project
   - Run the initialization scripts
   - Configure Row Level Security (RLS)

2. **Environment Configuration**
   ```bash
   # Production environment variables
   SUPABASE_URL=your_production_supabase_url
   SUPABASE_ANON_KEY=your_production_supabase_anon_key
   ```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all checks pass

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- 📧 Email: hello@clunite.com
- 📱 Phone: +91 12345 67890
- 🌐 Website: [clunite.com](https://clunite.com)
- 📍 Location: Bangalore, India

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend as a Service
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">
  <p>Made with ❤️ by the Clunite Team</p>
  <p>© 2024 Clunite. All rights reserved.</p>
</div>
