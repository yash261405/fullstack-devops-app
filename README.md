# 🚀 Fullstack DevOps Deployed Application

### Docker + AWS EC2 + CI/CD Pipeline (GitHub Actions)

---

## 🧠 Overview

This project demonstrates a production-grade full-stack web application deployed using a complete DevOps pipeline. It includes a React frontend, Node.js backend, MongoDB database, and Nginx reverse proxy, fully containerized using Docker and deployed on AWS EC2 using CI/CD automation.

The goal of this project is to simulate real-world cloud deployment workflows used in modern DevOps environments.

---

## 🏗️ Architecture


GitHub Repository
↓ (push)
GitHub Actions CI/CD Pipeline
↓
Docker Build (Frontend + Backend)
↓
Docker Hub (Image Registry)
↓
AWS EC2 Instance
↓
Docker Compose Deployment
↓
Nginx Reverse Proxy
↓
User Access Application


---

## ⚙️ Tech Stack

### Frontend
- React
- Dockerized React App

### Backend
- Node.js + Express
- REST APIs
- Dockerized Service

### Database
- MongoDB (Docker Container)

### DevOps / Cloud
- AWS EC2 (Deployment Server)
- Docker & Docker Compose
- GitHub Actions (CI/CD Pipeline)
- Docker Hub (Image Registry)
- Nginx (Reverse Proxy)

---

## 🔄 CI/CD Pipeline

Automated workflow using GitHub Actions:

### Steps:
1. Checkout repository code
2. Authenticate with Docker Hub
3. Build frontend Docker image
4. Build backend Docker image
5. Push images to Docker Hub
6. SSH into AWS EC2
7. Pull latest Docker images
8. Restart containers using Docker Compose

---

## 🐳 Docker Setup

### Services
- frontend (React UI)
- backend (Node.js API)
- mongo (Database)
- nginx (Reverse proxy)

---

## ☁️ AWS Deployment (EC2)

- Ubuntu / Amazon Linux EC2 instance
- Docker installed
- Docker Compose configured

### Security Groups:
- Port 80 → Frontend (HTTP)
- Port 5000 → Backend API
- Port 22 → SSH Access

---

## 🔐 GitHub Secrets

- DOCKER_USER
- DOCKER_PASS
- EC2_HOST
- EC2_KEY

---

## 🚨 Key Issues Solved

- Docker login authentication issue (401)
- Platform mismatch (ARM vs AMD64)
- Buildx configuration for CI/CD
- Pipeline failures in GitHub Actions logs

---

## 📦 Run Locally

```bash
git clone <repo-url>
cd project-folder
docker-compose up --build
🌐 Access
Frontend: http://localhost
Backend: http://localhost:5000
