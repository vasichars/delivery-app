import Product from '../models/product.js';
import { convertProductsCurrency } from '../services/fixer.js';

class ProductController {

  async getProducts(req, res) {
    const currency = req.query.currency;
    let products = await Product.find();
    if (currency && currency !== 'EUR') {
      products = await convertProductsCurrency(products, currency);
    }
    res.json({ data: products });
  }

}

export default new ProductController();
