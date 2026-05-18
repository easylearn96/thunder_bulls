const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
  title: String, slug: String, excerpt: String, content: String,
  coverImage: String, category: String, author: String,
  publishedAt: { type: Date, default: Date.now },
  tags: [String], metaTitle: String, metaDescription: String,
  time: String
}, { timestamps: true });
module.exports = mongoose.model('News', newsSchema);