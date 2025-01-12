import express from 'express';
import  usersRouter  from "./users.router.js";
import  authsRouter  from "./auth.router.js";
import  boardsRouter  from "./boards.router.js";
import  tasksRouter  from "./tasks.router.js";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/auth", authsRouter);
app.use("/boards", boardsRouter);
app.use("/boards/:boardId/tasks", tasksRouter); 

export default app;