# NetSentinel-AI
AI-powered Network Monitoring Maintenance Platform built for enterprise networks.

---

## Overview
NetSentinel AI as an intelligent network monitoring platform tht combination:

- AI-Powered Network analysis
- Predictive maintenace problem detection and fix
- RAG (Retrival - Augmented Generation)
- Local LLM Using Ollama 
- Vector Search with ChromaDB
- Interactive Dashboard

---

## Features
- Modern Dashboard
- Authentication 
- Prediction Dashboard
- Aleart
- Report Generate
- AI Copilot

---

### Backend (Node.js)
- JWT Authentication
- Role-Based Access Control
- User Management
- Dashboard APIs
- Prediction APIs
- Alerts APIs
- Reports APIs

### AI Backend (FastAPI)
- Ollama Integration
- ChromaDB
- RAG Pipeline
- PDF Knowledge Base
- AI Chat
- Prediction Engine

---

##  Architecture

```
React
      │
      ▼
Node.js (Express)
      │
      ▼
FastAPI
      │
      ▼
Ollama
      │
      ▼
ChromaDB
      │
      ▼
MongoDB
```

---



## 
 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

### AI
- FastAPI
- Ollama
- LangChain
- ChromaDB
- Sentence Transformers

---

##  Project Structure

```text
NetSentinel-AI/
│
├── frontend/
├── backend/
│   ├── backend-node/
│   └── backend-ai/
├── docs/
├── assets/
└── README.md
```

---


##  Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend/backend-node
npm install
npm run dev
```

### AI Backend

```bash
cd backend/backend-ai
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

---

## 📅 Roadmap

- [x] Frontend
- [x] Node Backend
- [ ] AI Backend
- [ ] RAG
- [ ] PDF Upload
- [ ] AI Prediction
- [ ] Deployment

---

## 👨‍💻 Author

Sudhir Kumar Verma

BIT Sindri