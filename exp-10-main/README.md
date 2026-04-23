# 💬 Experiment-10: WebSocket Chat Application

---

## 📌 Overview
A full-stack real-time chat application using WebSocket for continuous communication between client and server.  
Built with **Spring Boot (backend)** and **React (frontend)**.

---

## 🎯 Objectives
- Enable real-time messaging without HTTP polling  
- Support multiple users with instant message broadcasting  
- Build a responsive UI using React  
- Integrate frontend and backend using STOMP protocol  

---

## 🛠️ Tech Stack

### 🔹 Backend
- Java  
- Spring Boot  
- WebSocket  
- STOMP  
- SockJS  
- Maven  

### 🔹 Frontend
- React  
- Vite  
- STOMP.js  
- SockJS  

---

## ✨ Features
- 💬 Real-time text messaging  
- 🖼️ Image sharing support  
- 🎤 Voice message support  
- ⚡ Live UI updates without refresh  
- 🔌 WebSocket endpoint (`/ws`)  
- 🔁 Message routing using `/app` and `/topic`  
- 🔒 Handles connection, disconnection, and errors  

---

## 📁 Project Structure

---

## ⚙️ Working
- Client connects to server via WebSocket  
- Messages are sent using STOMP protocol  
- Server processes and broadcasts messages  
- All connected users receive messages instantly  

---

## 🚀 How to Run

### 🔹 Backend
```bash
cd backend
.\mvnw.cmd spring-boot:run

cd frontend
npm install
npm run dev
