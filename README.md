# 🐾 Paw Feeder AI

A production-oriented smart pet feeding system built with **Node.js**, **Express.js**, and **MongoDB**, following modern backend engineering practices.

The project aims to provide a scalable backend for managing pets, feeding schedules, feeding history, and notifications while maintaining clean architecture and production-ready code quality.

> **Project Status:** 🚧 Active Development

---

# Overview

Paw Feeder AI is being developed as a complete backend system for a smart pet feeding application. The project focuses on clean architecture, modular design, REST APIs, and production software engineering practices.

The long-term goal is to evolve it into a complete platform with authentication, pet management, automated feeding schedules, notifications, analytics, and AI-powered features.

---

# Current Features

* Modular Express.js backend
* Health Check API
* Environment Configuration
* Production-ready project structure
* Centralized routing
* Security middleware
* Request logging
* Configuration management

---

# Planned Features

* User Authentication (JWT)
* Role-based Authorization
* Pet Management
* Feeding Scheduler
* Feeding History
* Notification System
* Dashboard API
* MongoDB Integration
* Docker Support
* CI/CD Pipeline
* API Documentation
* Unit & Integration Testing

---

# Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Development

* Nodemon
* dotenv
* Helmet
* Morgan
* Compression
* Cookie Parser

## Tools

* Git
* GitHub
* VS Code

---

# Project Structure

```text
paw-feeder-ai
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend
├── docs
├── data
├── README.md
├── LICENSE
└── .gitignore
```

---

# API

## Health Check

```http
GET /api/health
```

Response

```json
{
  "success": true,
  "message": "Paw Feeder AI API is healthy",
  "version": "1.0.0"
}
```

---

# Getting Started

## Clone Repository

```bash
git clone https://github.com/JatinDhyani01/paw-feeder-ai.git
```

---

## Install Dependencies

```bash
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

## Start Development Server

```bash
npm run dev
```

---

# Development Roadmap

## Phase 1

* [x] Project Structure
* [x] Express Backend
* [x] Health Check API
* [ ] MongoDB Connection
* [ ] Error Handling
* [ ] Logger

## Phase 2

* [ ] Authentication
* [ ] JWT
* [ ] User Management

## Phase 3

* [ ] Pet CRUD
* [ ] Feeding Scheduler
* [ ] Feeding Logs

## Phase 4

* [ ] Notifications
* [ ] Dashboard
* [ ] Analytics

## Phase 5

* [ ] Docker
* [ ] GitHub Actions
* [ ] Deployment
* [ ] Testing

---

# Architecture

```text
Client
   │
   ▼
Express.js API
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
MongoDB
```

---

# Contributing

Contributions, suggestions, and improvements are welcome.

If you'd like to contribute, please open an issue first to discuss the proposed changes.

---

# License

This project is licensed under the MIT License.

---

# Author

**Jatin Dhyani**

GitHub: https://github.com/JatinDhyani01

---

⭐ If you find this project interesting, consider giving it a star.
