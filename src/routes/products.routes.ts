import { Router } from 'express';
import {
  addProduct,
  bulkAddProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProducts,
} from '../controllers/products.controller';
const router = Router();

router
  .get('/', getProducts)
  .get('/:id', getProduct)
  .post('/', addProduct)
  .post('/bulk', bulkAddProduct)
  .put('/:id', editProduct)
  .delete('/:id', deleteProduct);

export default router;
