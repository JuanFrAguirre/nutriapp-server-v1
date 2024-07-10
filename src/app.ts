import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import sequelize from './database';
import mainRouter from './routes/main.routes';

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);

app.listen(PORT, async () => {
  sequelize;
  console.log(`--\n\nServer listening on PORT ${PORT}\n\n--`);
});
