
* React (Frontend)
* Node.js with ES Modules (Backend)
* PostgreSQL (Database)
* Role-Based Access (Student, Admin, Trainer, Course Coordinator)
* `node-pg-migrate` with ES Module setup

---

## ✅ `README.md` – KISE Portal

```md
# 🎓 KISE School Portal

A full-stack student management system for KISE that allows students, trainers, course coordinators, and admins to interact with the platform based on their roles.

---

## 🛠 Tech Stack

| Area       | Tech                     |
|------------|--------------------------|
| Frontend   | React, React Router DOM  |
| Backend    | Node.js (ES Modules), Express |
| Database   | PostgreSQL               |
| Auth       | JWT, Bcrypt              |
| Migrations | node-pg-migrate (ESM setup) |
| ORM        | Custom SQL using pg      |

---

## 📁 Project Structure

```

kise-portal/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── migrations/
│   ├── config/
│   ├── .env
│   ├── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js or similar
│
└── README.md

````

---

## ⚙️ Backend Setup

### 1. Clone the repo

```bash
git clone https://github.com/Gidayi-dev/kise-portal.git
cd kise-portal/backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file:

```env
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/kise_portal
JWT_SECRET=your_jwt_secret
```

### 4. Database Setup

Ensure PostgreSQL is running and create the DB:

```sql
CREATE DATABASE kise_portal;
```

### 5. Run Migrations (with ES Modules fix)

> node-pg-migrate doesn't support ESM directly, so use this in `package.json`:

```json
"type": "module",
"scripts": {
  "migrate": "node --loader ts-node/esm node_modules/node-pg-migrate/bin/node-pg-migrate up"
}
```

Or rename your migration files to `.cjs`.

Then run:

```bash
npm run migrate
```

### 6. Start the backend server

```bash
npm run dev
```

> Uses `nodemon` and `"type": "module"`

---

## 🚀 Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## 👤 Roles

| User Type | Roles       | Description                          |
| --------- | ----------- | ------------------------------------ |
| Student   | -           | Can view grades, fees, resources     |
| Employee  | admin       | Controls account access, payments    |
| Employee  | coordinator | Manages groups, assigns trainers     |
| Employee  | trainer     | Uploads notes, assignments, coverage |

---

## 🔐 API Routes Overview

| Method | Route              | Access      | Description                 |
| ------ | ------------------ | ----------- | --------------------------- |
| POST   | /api/auth/register | Public      | Register user (student/emp) |
| POST   | /api/auth/login    | Public      | Login user                  |
| GET    | /api/admin/...     | Admin       | Admin-specific routes       |
| GET    | /api/trainer/...   | Trainer     | Trainer-specific routes     |
| GET    | /api/cc/...        | Coordinator | Coordinator-specific routes |

---

## 🧪 Testing API

Use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test:

* POST `/api/auth/register`
* POST `/api/auth/login`
* Include JWT token in `Authorization: Bearer <token>`

---

## ✅ To Do

* [x] Auth (Register/Login)
* [x] Role-Based Access Middleware
* [x] Basic DB Schema
* [ ] Admin panel: Disable students
* [ ] Trainer: Upload lessons, notes
* [ ] Coordinator: Assign courses/groups
* [ ] Student: Fee balance, academic progress

---

## 👥 Team Contribution

If working in a team:

```bash
git checkout -b feature/<your-name>-<feature-name>
```

When done:

```bash
git add .
git commit -m "feat: Add trainer upload logic"
git push origin feature/<your-name>-<feature-name>
```

---

## 🧠 Tips

* Use `req.user` from middleware to check roles
* Keep each route/controller clean and modular
* Document API endpoints as you go

---

**Built with ❤️ by \[Millyannah & Team]**

```


