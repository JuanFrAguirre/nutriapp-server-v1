import { Request, Response } from 'express';
import models from '../database/models';
import { getNutriValue } from '../utils/getNutritionalValue';

const { Dish, Product } = models;

export const getDishes = async (req: Request, res: Response) => {
  try {
    const dishes = await Dish.findAll({ include: Product });
    return res.json(dishes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

export const getDish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findByPk(id, {
      include: { model: Product, as: 'products' },
    });
    if (!dish) return res.json(404);
    return res.json(dish);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

export const addDish = async (req: Request, res: Response) => {
  try {
    const { title, products } = req.body;
    const newDish = await Dish.create({
      title,
      calories: getNutriValue(products, 'calories'),
      proteins: getNutriValue(products, 'proteins'),
      fats: getNutriValue(products, 'fats'),
      carbohydrates: getNutriValue(products, 'carbohydrates'),
    });
    products.forEach(async (product: any) => {
      await newDish.addProduct(product);
    });
    return res.json(newDish);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

export const editDish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findByPk(id, {
      include: { model: Product, as: 'products' },
    });
    if (!dish) return res.json(404);

    await Dish.update(req.body, { where: { id } });

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

export const deleteDish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Dish.destroy({ where: { id } });
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
