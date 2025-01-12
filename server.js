import express from 'express';
import {userRouter, productRouter, comentsRouter, adminRouter, ordersRouter} from './routes/index.js'
import runMigrations from './migrations.js';
const app = express();
const port = 3000;

app.use(express.json());
runMigrations();

app.use('/products',productRouter);
app.use('/comments',comentsRouter);
app.use('/admin',adminRouter);
app.use('/orders',ordersRouter);
app.use('/users',userRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});