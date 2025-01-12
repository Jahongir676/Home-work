import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { useRouter,taskRouter} from './routers/index.js'

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());

app.use('/users', useRouter);
app.use('/tasks', taskRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => console.log('Server running on port 3000'));
