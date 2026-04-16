# 🧺 Mini Laundry Order Management System (AI-First)

🚀 Built using an AI-first development approach leveraging ChatGPT

## 📌 Overview

This project is a **Mini Laundry Order Management System** designed to help a dry cleaning store manage daily operations efficiently.

It allows:

* Creating customer orders
* Tracking order status
* Calculating billing automatically
* Viewing dashboard analytics

The system is built with a focus on **speed, simplicity, and AI-assisted development**.


## 🛠️ Tech Stack

### Frontend

* React (Vite)
* CSS (Custom styling)

### Backend

* Node.js
* Express.js

### Storage

* In-memory (for fast development)

## ✨ Features

### 🧾 Create Order

* Add customer name & phone
* Add multiple garments (Shirt, Pants, Saree)
* Set quantity per item
* Auto price calculation
* Generates:

  * Total bill
  * Unique Order ID


### 🔄 Order Status Management

Orders follow lifecycle:
RECEIVED → PROCESSING → READY → DELIVERED

* One-click status update
* Button disabled when delivered

### 📋 View Orders

* Display all orders in table
* Shows:

  * Customer details
  * Items & quantity
  * Total amount
  * Current status

#### Filters:

* Search by name or phone
* Filter by status


### 📊 Dashboard

Displays:

* Total Orders
* Total Revenue
* Orders grouped by status


## ⚙️ Setup Instructions

### 🔹 Clone Repository

git clone https://github.com/yarlagaddaraja/mini-laundry-system.git
cd laundary-system

### 🔹 Backend Setup

cd backend
npm install
npm start


Backend runs on:
http://localhost:5000


### 🔹 Frontend Setup

cd frontend
npm install
npm run dev


Frontend runs on:
http://localhost:5173

---

## 🔌 API Endpoints

| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| POST   | /orders     | Create order        |
| GET    | /orders     | Get all orders      |
| PATCH  | /orders/:id | Update order status |
| GET    | /dashboard  | Dashboard analytics |


## 📸 Demo

### UI Screens

* Dashboard
* Order Creation Form
* Orders List with Status Updates
<img width="1920" height="1080" alt="{963979EA-2B8D-491F-B890-EDCE1CBCB249}" src="https://github.com/user-attachments/assets/f5020a63-c6f2-4c31-b409-fe32df3cec15" />

<img width="1920" height="1080" alt="{7C781F22-0FC1-419E-B249-8AA0B549C78C}" src="https://github.com/user-attachments/assets/bca2e253-500c-4bea-a904-dfa5ddc9f92a" />
<img width="1920" height="1080" alt="{BD945284-1252-452B-BE52-3C0B9930BD62}" src="https://github.com/user-attachments/assets/127b493c-3985-4f18-bcc8-db0ebe8368ae" />



## 🤖 AI Usage Report

### 🔹 Tools Used

* ChatGPT (primary)
* GitHub Copilot (optional)


### 🔹 How AI Was Used

* Generated project structure
* Built React components
* Created backend APIs
* Assisted in debugging issues
* Improved UI design


### 🔹 Sample Prompts

* “Generate MERN folder structure for laundry system”
* “Build dynamic order form in React with pricing”
* “Create Express API for order management”
* “Fix React state update issue after API call”
* “Improve UI to look like modern dashboard”


### 🔹 Where AI Helped

* Rapid development of frontend & backend
* Logic implementation for billing & status
* Debugging and fixing errors
* UI/UX improvements


### 🔹 Where AI Was Incorrect

* Orders not refreshing automatically
* Missing npm start script
* Minor routing issues
* UI layout not responsive


### 🔹 Improvements Made Manually

* Fixed state management using lifting state
* Corrected API integration
* Enhanced UI with responsive layout
* Added filtering & search logic
* Improved overall user experience


## ⚖️ Trade-offs

* Used in-memory storage instead of database
* No authentication implemented
* No deployment (local environment)

## 🚀 Future Improvements

* Add MongoDB / SQL database
* Implement authentication system
* Add order history & analytics
* Include estimated delivery date
* Deploy using Vercel / Render


## 🎯 Conclusion

This project demonstrates:

* Full-stack development skills
* Effective use of AI tools
* Problem-solving and debugging ability
* Clean and functional system design


## 📌 Final Note

This project was built using an **AI-first approach** focusing on:

👉 Speed
👉 Iteration
👉 Practical problem-solving

⭐ If you found this useful, feel free to star the repo!
