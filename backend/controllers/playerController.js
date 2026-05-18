
const Player = require('../models/Player');
exports.getPlayers = async (req, res) => { try { const players = await Player.find(); res.json(players); } catch(err) { res.status(500).json({message: err.message}); } };
