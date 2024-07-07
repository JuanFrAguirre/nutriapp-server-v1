import { Router } from 'express';
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProducts,
  ping,
} from '../controllers/main.controller';
const router = Router();

router
  .get('/', ping)
  .get('/products', getProducts)
  .get('/products/:id', getProduct)
  .post('/products', addProduct)
  .put('/products/:id', editProduct)
  .delete('/products/:id', deleteProduct);

export default router;
