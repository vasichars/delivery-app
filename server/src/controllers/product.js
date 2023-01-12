import Product from '../models/product.js';
import { convertProductsCurrency } from '../services/fixer.js';

export const getProducts = async (req, res) => {
  const currency = req.query.currency;

  let products = await Product.find();

  if (currency && currency.toLowerCase() !== 'eur') {
    products = await convertProductsCurrency(products, currency);
  }

  res.json({ data: products });
};
