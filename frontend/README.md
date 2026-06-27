# NOC Copilot - Frontend

> React Frontend for the Air-Gapped predicative NOC Copilot (ISRO BHAHRTIYA ANTARIKSH HACKATHON-2026)

> Provides real-time network visibility, AI-driver predictive alert and a natural-language copilot interface-all running with zero outbound dependency.

## Table of Contents
-[Overview](#overview)
-[Tech Stack](#tech-stack)
-[Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Pages & Routes](#pages--routes)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Mock Data](#mock-data)
- [Styling & Design Tokens](#styling--design-tokens)
- [Scripts](#scripts)
- [Contributing](#contributing)

## Overview
This is the frontend layer of the MPLS NOC Copilot system.


## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18.x | UI framework |
| Vite | 5.x | Build tool and dev server |
| Tailwind CSS | 4.x | Utility-first styling |
| React Router DOM | 6.x | Client-side routing |
| Recharts | 2.x | Network performance charts |
| Lucide React | 0.x | Icon system |
| JetBrains Mono | font | Monospace data/metrics display |
| Inter | font | UI body text |

---

## Project Structure

frontend/
├── public/              # Static assets served directly
├── src/
│   ├── assets/          # Images, fonts, static files
│   ├── components/      # Reusable React components
│   │   ├── dashboard/   # Dashboard-specific components
│   │   ├── landing/     # Marketing landing page components
│   │   └── layout/      # Reusable layout components (Sidebar, etc.)
│   ├── constants/       # System constants and mock data
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Main page components
│   ├── services/        # API services and data fetchers
│   ├── styles/          # Global styles and design tokens
│   └── utils/           # Utility functions
├── index.html
├── package.json
├── vite.config.js
└── README.md


## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 9 or higher

### Installation

Clone the repository
```bash
git clone <repository-url>

cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```


##  License 
This project is developed for educational purposes and the Bhartiya Antariksh Hackathon.