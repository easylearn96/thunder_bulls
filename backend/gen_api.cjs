const fs = require('fs');

const bDir = 'E:/Thunder website/backend';

// 1. Models
fs.writeFileSync(`${bDir}/models/Match.js`, `const mongoose = require('mongoose');
const matchSchema = new mongoose.Schema({
  homeTeam: String, awayTeam: String, homeTeamLogo: String, awayTeamLogo: String,
  date: Date, venue: String, competition: String,
  status: { type: String, enum: ['upcoming', 'completed', 'live'] },
  score: { home: { type: Number, default: 0 }, away: { type: Number, default: 0 } },
  report: String, gallery: [String],
  goalscorers: [{ player: String, minute: Number }]
}, { timestamps: true });
module.exports = mongoose.model('Match', matchSchema);`);

fs.writeFileSync(`${bDir}/models/News.js`, `const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
  title: String, slug: String, excerpt: String, content: String,
  coverImage: String, category: String, author: String,
  publishedAt: { type: Date, default: Date.now },
  tags: [String], metaTitle: String, metaDescription: String,
  time: String
}, { timestamps: true });
module.exports = mongoose.model('News', newsSchema);`);

fs.writeFileSync(`${bDir}/models/Product.js`, `const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String, slug: String, description: String, price: Number,
  images: [String], category: String, sizes: [String],
  stock: { type: Map, of: Number }, edition: String,
  isFeatured: { type: Boolean, default: false }, badge: String
}, { timestamps: true });
module.exports = mongoose.model('Product', productSchema);`);

// 2. Controllers
fs.writeFileSync(`${bDir}/controllers/matchController.js`, `
const Match = require('../models/Match');
exports.getMatches = async (req, res) => { try { const matches = await Match.find().sort({date: 1}); res.json(matches); } catch(err) { res.status(500).json({message: err.message}); } };
exports.getMatchById = async (req, res) => { try { const match = await Match.findById(req.params.id); res.json(match); } catch(err) { res.status(500).json({message: err.message}); } };
`);

fs.writeFileSync(`${bDir}/controllers/newsController.js`, `
const News = require('../models/News');
exports.getNews = async (req, res) => { try { const news = await News.find().sort({publishedAt: -1}); res.json(news); } catch(err) { res.status(500).json({message: err.message}); } };
exports.getNewsBySlug = async (req, res) => { try { const n = await News.findOne({slug: req.params.slug}); res.json(n); } catch(err) { res.status(500).json({message: err.message}); } };
`);

fs.writeFileSync(`${bDir}/controllers/shopController.js`, `
const Product = require('../models/Product');
exports.getProducts = async (req, res) => { try { const prods = await Product.find(); res.json(prods); } catch(err) { res.status(500).json({message: err.message}); } };
exports.getProductById = async (req, res) => { try { const prod = await Product.findById(req.params.id); res.json(prod); } catch(err) { res.status(500).json({message: err.message}); } };
`);

fs.writeFileSync(`${bDir}/controllers/playerController.js`, `
const Player = require('../models/Player');
exports.getPlayers = async (req, res) => { try { const players = await Player.find(); res.json(players); } catch(err) { res.status(500).json({message: err.message}); } };
`);

// 3. Routes
fs.writeFileSync(`${bDir}/routes/matchRoutes.js`, `const express=require('express'); const router=express.Router(); const {getMatches,getMatchById}=require('../controllers/matchController'); router.get('/',getMatches); router.get('/:id',getMatchById); module.exports=router;`);
fs.writeFileSync(`${bDir}/routes/newsRoutes.js`, `const express=require('express'); const router=express.Router(); const {getNews,getNewsBySlug}=require('../controllers/newsController'); router.get('/',getNews); router.get('/:slug',getNewsBySlug); module.exports=router;`);
fs.writeFileSync(`${bDir}/routes/shopRoutes.js`, `const express=require('express'); const router=express.Router(); const {getProducts,getProductById}=require('../controllers/shopController'); router.get('/',getProducts); router.get('/:id',getProductById); module.exports=router;`);
fs.writeFileSync(`${bDir}/routes/playerRoutes.js`, `const express=require('express'); const router=express.Router(); const {getPlayers}=require('../controllers/playerController'); router.get('/',getPlayers); module.exports=router;`);

console.log("Backend API generated.");
