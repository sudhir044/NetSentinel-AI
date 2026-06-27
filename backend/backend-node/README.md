## NetSentinel AI - Node.js Backend

## Overview
This is the Node.js backend for the NetSentinel AI , an AI-powered Network Monitoring and Predictive Maintenance Platform.

The backend is responsible for :
 # User Authentication 
# Authorization (Role-Based Access Control)
# User Management 
# Dashboard APIs
# Predication APIs 
# Alert Management
# Report Management
# Communication with the FastAPI AI Backend

Tech Stack 
# Node.js
# Express.js
# MongoDB
# Mongoose
# JWT Authentication
# bcryptjs
# Express Validator
# Helmet 
# CORS 
# Morgan

Project Structure
backend-node/
│
├── seeders/ 
├── src/ │ 
    ├── config/  
    ├── constants/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── utils/
    ├── app.js
    └── server.js
├── .env 
├── package.json 
└── README.md


Features
# Authentication
User Registration
User Login
JWT Authentication
Password Hashing

# Authorization
three user roles:
User
Admin
Super Admin

# Dashboard
Dashboard Statistics
System Overview

# Prediction
Prediction API
AI Backend Integration (FastAPI)

# Alerts 
Create Alert
View Alerts

# Reports
Generate Reports
Fetch Reports

# Installation
Clone the repository

git clone <https://github.com/sudhir044/NetSentinel-AI/tree/main>

Move to backend

cd backend/backend-node

Install dependencies

npm install

# Environment Variables
Create a .env file:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

SUPER_ADMIN_EMAIL=admin@example.com
SUPER_ADMIN_PASSWORD=password123
SUPER_ADMIN_FIRST_NAME=Super
SUPER_ADMIN_LAST_NAME=Admin
SUPER_ADMIN_USERNAME=superadmin

# Seed Roles

npm run seed:roles

# Seed Suoer Admin
npm run seed:superadmin

# Start Development Server
npm run dev

Server runs at:

http://localhost:5000

# API Modules
Authentication
Users
Dashboard
Predictions
Alerts
Reports
AI Gateway

# Author 
Sudhir Kumar Verma
BIT Sindri

NetSentinel AI Project
