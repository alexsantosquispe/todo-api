# todo-api

## Overview 📌

This is a simple API for managing todos using Node.js, Express and React(Vite).

## Endpoints 📝

- GET /todos
- GET /todos/:id
- POST /todos
- PUT /todos/:id
- DELETE /todos/:id

## 🛠 Getting Started

### Prerequisites ✅

- Node.js `v18+`
- npm or yarn
- You can use [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) or other tools like Postman to test the endpoints

### Setup 🚀

#### Run the server

- Clone the repo

```bash
git clone git@github.com:alexsantosquispe/todo-api.git
cd todo-api/backend
```

- Install dependencies

```bash
npm install
```

- Start the server

```bash
npm run dev
# The server should run on port 3000
```

- Or Run the server in watch mode

```bash
npm run watch
# The server should run on port 3000
```

#### Test in the browser

(Note: In the frontend side only the GET todos and DELETE todos/:id endpoints were integrated, the other one will be integrated on next commits)

- Install dependencies

```bash
cd todo-api/frontend
npm install
```

- Run the project with React

```bash
npm run dev
```

Open the `http://localhost:5173`

### Screenshots

<div style="display:flex; gap: 12px;">
  <img src="./screenshots/todo-api-test.png" alt="Desktop view" />
</div>
