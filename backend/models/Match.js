const mongoose = require('mongoose');
const matchSchema = new mongoose.Schema({
  homeTeam: String, awayTeam: String, homeTeamLogo: String, awayTeamLogo: String,
  date: Date, venue: String, competition: String,
  status: { type: String, enum: ['upcoming', 'completed', 'live'] },
  score: { home: { type: Number, default: 0 }, away: { type: Number, default: 0 } },
  report: String, gallery: [String],
  goalscorers: [{ player: String, minute: Number }]
}, { timestamps: true });
module.exports = mongoose.model('Match', matchSchema);