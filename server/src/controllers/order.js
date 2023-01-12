
import _ from 'lodash';
import Order from '../models/order.js';
import ApiError from '../errors/ApiError.js';

class OrderController {

  async getOrders(req, res) {
    const orders = await Order.find().populate('items');
    res.json({ data: orders });
  }

  async createOrder(req, res) {
    const order = new Order(req.body);
    await order.populate('items');
    order.totalPrice = order.items.reduce((acc, val) => acc + val.price, 0);
    await order.save();
    res.json({ data: _.pick(order, [ '_id', 'status', 'totalPrice', 'createdAt', 'updatedAt' ]) });
  }

  async updateOrder(req, res) {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) ApiError.badRequest('Invalid data.');
    res.json({ data: order });
  }

  async getPendingOrders(req, res) {
    const orders = await Order.find({ status: 'pending' }).populate('items');
    res.json({ data: orders });
  }
  
}

export default new OrderController();
