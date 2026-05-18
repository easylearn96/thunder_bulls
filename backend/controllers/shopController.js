
const Product = require('../models/Product');
exports.getProducts = async (req, res) => { try { const prods = await Product.find(); res.json(prods); } catch(err) { res.status(500).json({message: err.message}); } };
exports.getProductById = async (req, res) => { try { const prod = await Product.findById(req.params.id); res.json(prod); } catch(err) { res.status(500).json({message: err.message}); } };
