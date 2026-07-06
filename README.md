# AI Interview Prep

An AI-powered interview preparation platform that generates personalized practice questions, evaluates answers, and helps candidates track their progress.

## ✨ Features

* 🔐 JWT Authentication & Authorization
* 🤖 AI-Powered Interview Preparation
* 📄 Resume Upload & PDF Parsing
* 🎯 Job Description Analysis
* 💡 Technical & Behavioral Interview Questions
* 📊 Match Score & Skill Gap Analysis
* 🗺️ Personalized Preparation Roadmap
* 📥 Resume PDF Download
* 📚 Interview History Dashboard
* ⚡ Google Gemini AI Integration

## 🛠️ Tech Stack

- **Frontend:** React, Vite, React Router, Axios, SCSS
- **Backend:** Node.js, Express.js, JWT, bcrypt.js, Multer
- **Database:** MongoDB Atlas, Mongoose
- **AI:** Google Gemini AI, pdf-parse
- **Deployment:** Render

## 🏗️ Architecture

```
Client (React + Vite)
        │
        ▼
Express API Server
   ├── JWT Auth Middleware
   ├── Multer (Resume Upload)
   ├── pdf-parse (Resume Parsing)
   └── Google Gemini AI (Question Gen, Analysis)
        │
        ▼
MongoDB Atlas (via Mongoose)
```