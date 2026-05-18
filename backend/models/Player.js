const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  jerseyNumber: { type: Number, required: true, unique: true },
  position: { type: String, enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'], required: true },
  nationality: { type: String },
  age: { type: Number },
  height: { type: String },
  photo: { type: String },
  stats: {
    appearances: { type: Number, default: 0 },
    goals: { type: Number, default: 0 },
    assists: { type: Number, default: 0 },
    yellowCards: { type: Number, default: 0 },
    redCards: { type: Number, default: 0 },
  },
  bio: { type: String },
  isCaptain: { type: Boolean, default: false },
  socialLinks: { instagram: String, twitter: String },
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);
