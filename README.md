# todo-api

## Overview 📌

This is a simple API for managing todos using Node.js and Express.

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
- Servor in order to test the api from the html file: https://github.com/lukejacksonn/servor
  (This step is not required, since you can test the endpoints using tools like Postman or some extension for vscode like [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client))

```bash
npx servor gh:lukejacksonn/perflink --browse --editor --reload
```

### Setup 🚀

- Run the server

```bash
# Clone repo
git clone git@github.com:alexsantosquispe/todo-api.git
cd todo-api

# Install dependencies
npm install

# Run development server
npm run dev

or

# Run development server in watch mode
npm run watch

# The server should run on port 3000
```

- Test in the browser

```bash
# After start the server and install Servor
# run
npx servor ./web
```

Open the `http://localhost:8080`
