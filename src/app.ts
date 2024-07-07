import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mainRouter from './routes/main.routes';
import sequelize from './database';
import Product from './database/models/Product';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);

app.listen(PORT, async () => {
  sequelize;
  Product;
  console.log(`--\n\nServer listening on PORT ${PORT}\n\n--`);
});
