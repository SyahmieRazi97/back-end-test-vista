# back-end-test-vista

---

This is the backend API for managing companies and services.  
Built with **Node.js**, **TypeScript**, **Express**, **Prisma**, and **MySQL** (Railway DB).

---

## 🚀 Features
- Add new companies
- List all companies with their services
- Add services to a company
- Get service details
- REST API with Prisma ORM

---

## 🛠️ Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/SyahmieRazi97/back-end-test-vista
cd back-end-test-vista
npm install
cp .env.example .env
npx prisma migrate dev --name init
npm run dev