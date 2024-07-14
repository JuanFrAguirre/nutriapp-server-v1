import { Router } from 'express';
import {
  addDish,
  deleteDish,
  editDish,
  getDish,
  getDishes,
} from '../controllers/dishes.controller';
const router = Router();

router
  .get('/', getDishes)
  .get('/:id', getDish)
  .post('/', addDish)
  .put('/:id', editDish)
  .delete('/:id', deleteDish);

export default router;
