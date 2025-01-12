import express from 'express';
import authsRouter from './routers/main.router.js';
import usersRouter from './routers/main.router.js';
import boardsRouter from './routers/main.router.js';
import tasksRouter from './routers/main.router.js';
import createTables  from './setup.tables.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4000;


const app = express();
app.use(express.json());

app.use("./api/auth", authsRouter);
app.use("./api/users", usersRouter);
app.use(".api/boards", boardsRouter);
app.use("./api/boards/:boardId/tasks", tasksRouter);
app.post(".api/setUp", createTables);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});