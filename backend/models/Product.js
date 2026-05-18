const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String, slug: String, description: String, price: Number,
  images: [String], category: String, sizes: [String],
  stock: { type: Map, of: Number }, edition: String,
  isFeatured: { type: Boolean, default: false }, badge: String
}, { timestamps: true });
module.exports = mongoose.model('Product', productSchema);