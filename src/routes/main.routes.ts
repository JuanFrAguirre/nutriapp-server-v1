import { Router } from 'express';
import {
  addProduct,
  bulkAddProduct,
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
  .post('/products/bulk', bulkAddProduct)
  .put('/products/:id', editProduct)
  .delete('/products/:id', deleteProduct);

export default router;
