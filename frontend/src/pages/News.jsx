import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function News() {
  const [news, setNews] = useState([]);
  
  const fallbackNews = [
    { _id: 1, tag: "MATCH REPORT", title: "THUNDER BULLS DOMINATE RIVALS 3-0 IN DERBY", excerpt: "A masterclass performance from the midfield secures a crucial 3 points at home.", date: "MAY 15, 2024", author: "CLUB MEDIA", time: "4 MIN READ", img: "https://images.unsplash.com/photo-1431324155629-1a6d0a11f47f?q=80&w=1000&auto=format&fit=crop" },
    { _id: 2, tag: "CLUB NEWS", title: "NEW TRAINING GROUND CONSTRUCTION BEGINS", excerpt: "The club has officially broken ground on the state-of-the-art facility.", date: "MAY 12, 2024", author: "CLUB MEDIA", time: "3 MIN READ", img: "https://images.unsplash.com/photo-1518605368461-1e12c1ce9686?q=80&w=1000&auto=format&fit=crop" },
    { _id: 3, tag: "TRANSFER", title: "MIDFIELD MAESTRO SIGNS 4-YEAR DEAL", excerpt: "We are delighted to announce the signing of international star Leo Blanc.", date: "MAY 08, 2024", author: "CLUB MEDIA", time: "5 MIN READ", img: "https://images.unsplash.com/photo-1551280857-2b9ebf241519?q=80&w=1000&auto=format&fit=crop" },
    { _id: 4, tag: "MATCH REPORT", title: "LATE WINNER SECURES AWAY VICTORY", excerpt: "A 94th-minute strike by Liam Cross brings home all three points.", date: "MAY 01, 2024", author: "CLUB MEDIA", time: "4 MIN READ", img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop" },
  ];

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          // Map backend data to frontend format
          const formatted = data.map(n => ({
            _id: n._id, tag: n.category, title: n.title, excerpt: n.excerpt,
            date: new Date(n.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase(),
            author: n.author, time: n.time || "5 MIN READ", img: n.coverImage
          }));
          setNews(formatted);
        } else {
          setNews(fallbackNews);
        }
      })
      .catch(() => setNews(fallbackNews));
  }, []);

  const getTagColor = (tag) => {
    if (tag === 'MATCH REPORT') return 'text-bull-crimson border-bull-crimson/30 bg-bull-crimson/10';
    if (tag === 'TRANSFER') return 'text-thunder-gold border-thunder-gold/30 bg-thunder-gold/10';
    return 'text-electric-blue border-electric-blue/30 bg-electric-blue/10';
  };

  return (
    <>
      <SEOMeta title="Latest News" description="The latest official news, transfer updates, and match reports from Thunder Bulls FC." url="https://thunderbulls.com/news" />
      
      <div className="bg-storm-black min-h-screen pt-24 pb-24">
        {/* Page Hero */}
        <div className="relative w-full h-[30vh] flex items-center justify-center overflow-hidden border-b border-ash-grey/20">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-storm-black/80 z-10"></div>
             <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 grayscale" alt="News Background" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 font-oswald font-extrabold text-6xl md:text-8xl text-lightning-white tracking-widest uppercase text-glow-white"
          >
            LATEST NEWS
          </motion.h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content (3 Columns on Desktop) */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((article, index) => (
                  <motion.div 
                    key={article._id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer bg-black-card rounded-xl overflow-hidden border border-ash-grey/20 hover:border-thunder-gold/50 transition-colors flex flex-col h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4">
                        <span className={`font-barlow text-xs tracking-widest font-bold uppercase px-2 py-1 border rounded ${getTagColor(article.tag)} backdrop-blur-md`}>
                          {article.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-oswald text-2xl font-bold text-lightning-white uppercase tracking-wide mb-3 group-hover:text-thunder-gold transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="font-barlow text-ash-grey tracking-wide text-lg mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-auto">
                        <div className="flex justify-between items-center text-xs tracking-widest uppercase font-barlow text-ash-grey mb-4 border-b border-ash-grey/20 pb-4">
                          <span>{article.date} | {article.author}</span>
                          <span>{article.time}</span>
                        </div>
                        <Link to={`/news/placeholder`} className="font-oswald text-thunder-gold tracking-widest uppercase font-bold relative inline-block group-hover:text-lightning-white transition-colors">
                          READ MORE
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-thunder-gold transition-all duration-300 group-hover:w-full group-hover:bg-lightning-white"></span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-center mt-12">
                <button className="bg-transparent border border-thunder-gold text-thunder-gold font-oswald font-bold px-8 py-4 tracking-widest uppercase hover:bg-thunder-gold hover:text-storm-black transition-all duration-300 rounded-md hover:box-glow-gold">
                  LOAD MORE ARTICLES
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-10">
              
              {/* Search */}
              <div className="bg-black-card p-6 rounded-xl border border-ash-grey/20">
                <h4 className="font-oswald text-xl text-lightning-white tracking-widest mb-4 border-b border-ash-grey/20 pb-2">SEARCH</h4>
                <input 
                  type="text" 
                  placeholder="Search news..." 
                  className="w-full bg-black-soft border border-ash-grey/30 text-lightning-white px-4 py-3 font-barlow tracking-widest focus:outline-none focus:border-thunder-gold rounded-md transition-colors placeholder:text-ash-grey"
                />
              </div>

              {/* Categories */}
              <div className="bg-black-card p-6 rounded-xl border border-ash-grey/20">
                <h4 className="font-oswald text-xl text-lightning-white tracking-widest mb-4 border-b border-ash-grey/20 pb-2">CATEGORIES</h4>
                <ul className="space-y-3 font-barlow text-lg tracking-wide text-ash-grey">
                  <li className="hover:text-thunder-gold cursor-pointer transition-colors flex justify-between"><span>MATCH REPORTS</span> <span>(24)</span></li>
                  <li className="hover:text-thunder-gold cursor-pointer transition-colors flex justify-between"><span>CLUB NEWS</span> <span>(18)</span></li>
                  <li className="hover:text-thunder-gold cursor-pointer transition-colors flex justify-between"><span>TRANSFERS</span> <span>(6)</span></li>
                  <li className="hover:text-thunder-gold cursor-pointer transition-colors flex justify-between"><span>ACADEMY</span> <span>(11)</span></li>
                </ul>
              </div>

              {/* Socials */}
              <div className="bg-black-card p-6 rounded-xl border border-ash-grey/20">
                <h4 className="font-oswald text-xl text-lightning-white tracking-widest mb-4 border-b border-ash-grey/20 pb-2">FOLLOW US</h4>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-black-soft flex items-center justify-center text-lightning-white hover:bg-thunder-gold hover:text-storm-black transition-all duration-300">
                    <FaInstagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black-soft flex items-center justify-center text-lightning-white hover:bg-thunder-gold hover:text-storm-black transition-all duration-300">
                    <FaFacebookF size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black-soft flex items-center justify-center text-lightning-white hover:bg-thunder-gold hover:text-storm-black transition-all duration-300">
                    <FaTwitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-black-soft flex items-center justify-center text-lightning-white hover:bg-bull-crimson transition-all duration-300">
                    <FaYoutube size={18} />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}