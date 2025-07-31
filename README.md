
# create-sb-react-express

> ⚡ Scaffold a modern full-stack monorepo with React + Tailwind (Vite) frontend and Express + PostgreSQL backend — in seconds.

## 📦 Features

- 🧩 Monorepo structure with `npm` workspaces
- ⚛️ Frontend: React + Vite + Tailwind CSS
- 🚀 Backend: Express + PostgreSQL (via `pg`)
- 🐳 Docker-ready backend (`docker-compose.yml` for Postgres)
- 🧪 Test-ready frontend structure
- ⚡ Unified `npm run dev` to start both servers at once
- 🧰 CLI-based scaffolding via `npx`

---
## 🚀 Install

```bash
npm i -g create-sb-react-express
````
## 🚀 Usage

```bash
npx create-sb-react-express my-app
cd my-app
npm install
````

Then:

```bash
npm run dev
```

This runs both frontend (Vite on :5173) and backend (Express on :3000) using `concurrently`.

---

## 📁 Folder Structure

```text
my-app/
├── client/               # React + Tailwind (Vite)
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── context/      # React contexts & tests
│   │   ├── pages/        # Page-level components
│   │   ├── api/          # Fetch helpers
│   │   └── main.jsx
│   └── tailwind.config.js
│
├── server/               # Express + PostgreSQL
│   ├── controllers/      # Route handlers
│   ├── db/               # Postgres pool, queries, seed
│   ├── routes/           # API routes
│   ├── expressInit.js
│   └── docker-compose.yml
│
├── package.json          # Root workspace with scripts
```

---

## 📦 Root `package.json`

The generated project uses `npm workspaces` and unified dev scripts:

```json
{
  "name": "sb-react-express",
  "private": true,
  "workspaces": [
    "client",
    "server"
  ],
  "scripts": {
    "client": "npm run dev --prefix client",
    "server": "npm run dev --prefix server",
    "start": "concurrently \"npm run client\" \"npm run server\"",
    "dev": "concurrently \"npm run client\" \"npm run server\""
  },
  "devDependencies": {
    "concurrently": "^8.2.0",
    "nodemon": "^3.0.1"
  }
}
```

---

## 🛠️ Development Setup

### 1. Start Postgres via Docker

```bash
cd server
docker-compose up -d
```

### 2. Run DB Seed Script (first time only)

To populate the PostgreSQL database with initial data:

```bash
cd server
node db/populatedb.js
```

> ⚠️ Make sure the database service is up and reachable before running this script.

---
### 3. Rename .env.example to .env

In server and client there is .env.example files

```bash
cd client && mv .env.example .env && cd ..
cd server && mv .env.example .env && cd ..
```

---
### 4. Start both apps

From root:

```bash
npm run dev
```

---


## 📃 License

MIT

---

## 🙌 Author

Made by [Mohammad Dahamshi](https://github.com/mdahamshi)

### 🌐 Website

Made with ❤️ by [SaraWebs](https://sarawebs.com)
