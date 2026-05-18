
const Match = require('../models/Match');
exports.getMatches = async (req, res) => { try { const matches = await Match.find().sort({date: 1}); res.json(matches); } catch(err) { res.status(500).json({message: err.message}); } };
exports.getMatchById = async (req, res) => { try { const match = await Match.findById(req.params.id); res.json(match); } catch(err) { res.status(500).json({message: err.message}); } };
