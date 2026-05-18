const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Match = require('./models/Match');
const News = require('./models/News');
const Product = require('./models/Product');
const Player = require('./models/Player');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/thunderbulls')
  .then(() => console.log('MongoDB Connected to Seeder'))
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  });

const players = [
  { name: "ALEX HUNTER", position: "Goalkeeper", jerseyNumber: 1, nationality: "GB", stats: { appearances: 120, goals: 0, assists: 2 }, photo: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1000&auto=format&fit=crop" },
  { name: "DAVID SILVA", position: "Defender", jerseyNumber: 4, nationality: "ES", stats: { appearances: 85, goals: 5, assists: 12 }, photo: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop" },
  { name: "MARCUS WEBB", position: "Midfielder", jerseyNumber: 10, nationality: "GB", stats: { appearances: 156, goals: 34, assists: 45 }, photo: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000&auto=format&fit=crop" },
  { name: "LIAM CROSS", position: "Forward", jerseyNumber: 9, nationality: "US", stats: { appearances: 92, goals: 68, assists: 15 }, photo: "https://images.unsplash.com/photo-1431324155629-1a6d0a11f47f?q=80&w=1000&auto=format&fit=crop" },
];

const matches = [
  { status: 'upcoming', date: new Date('2024-05-22T20:00:00Z'), homeTeam: 'THUNDER BULLS', awayTeam: 'CITY UNITED', competition: 'PREMIER LEAGUE', venue: 'THUNDER ARENA' },
  { status: 'upcoming', date: new Date('2024-05-29T15:00:00Z'), homeTeam: 'ROYAL BLUES', awayTeam: 'THUNDER BULLS', competition: 'PREMIER LEAGUE', venue: 'KINGS STADIUM' },
  { status: 'completed', date: new Date('2024-05-15T20:00:00Z'), homeTeam: 'THUNDER BULLS', awayTeam: 'EAST RIVALS', competition: 'PREMIER LEAGUE', venue: 'THUNDER ARENA', score: { home: 3, away: 0 } },
];

const newsArticles = [
  { category: "MATCH REPORT", title: "THUNDER BULLS DOMINATE RIVALS 3-0 IN DERBY", slug: "derby-win", excerpt: "A masterclass performance from the midfield secures a crucial 3 points at home.", publishedAt: new Date('2024-05-15'), author: "CLUB MEDIA", time: "4 MIN READ", coverImage: "https://images.unsplash.com/photo-1431324155629-1a6d0a11f47f?q=80&w=1000&auto=format&fit=crop" },
  { category: "TRANSFER", title: "MIDFIELD MAESTRO SIGNS 4-YEAR DEAL", slug: "new-signing", excerpt: "We are delighted to announce the signing of international star Leo Blanc.", publishedAt: new Date('2024-05-08'), author: "CLUB MEDIA", time: "5 MIN READ", coverImage: "https://images.unsplash.com/photo-1551280857-2b9ebf241519?q=80&w=1000&auto=format&fit=crop" },
];

const products = [
  { name: "2024 HOME KIT - AUTHENTIC", slug: "home-kit", price: 119.99, category: "KITS", badge: "NEW", images: ["https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1035&auto=format&fit=crop"] },
  { name: "THUNDER TRAINING TOP", slug: "training-top", price: 54.99, category: "TRAINING WEAR", badge: "", images: ["https://images.unsplash.com/photo-1518605368461-1e12c1ce9686?q=80&w=1000&auto=format&fit=crop"] },
];

const importData = async () => {
  try {
    await Player.deleteMany();
    await Match.deleteMany();
    await News.deleteMany();
    await Product.deleteMany();

    await Player.insertMany(players);
    await Match.insertMany(matches);
    await News.insertMany(newsArticles);
    await Product.insertMany(products);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error('Error with data import', error);
    process.exit(1);
  }
};

importData();
