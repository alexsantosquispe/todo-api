import express, { json } from 'express';

import cors from 'cors';
import { todosRouter } from './src/routes/todos.routes.js';

const app = express();
//MIddleware to handle JSON requests
app.use(json());
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = ['http://localhost:5173'];
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    }
  })
);

app.disable('x-powered-by');
app.use('/todos', todosRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
