import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  totalPrice: { type: Number },
  status: { type: String, enum: ['pending', 'delivered'], default: 'pending'}
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);