import { Request, Response } from 'express';
import Product from '../database/models/Product';

export const ping = async (req: Request, res: Response) => {
  return res.json('hello!');
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.sendStatus(404);

    return res.json(product);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const editProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.sendStatus(404);

    await Product.update(req.body, { where: { id } });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.sendStatus(404);

    await Product.destroy({ where: { id } });

    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
