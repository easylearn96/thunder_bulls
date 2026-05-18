import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';

export default function Gallery() {
  const [filter, setFilter] = useState('ALL');
  
  const filters = ['ALL', 'MATCH PHOTOS', 'TRAINING', 'KIT LAUNCHES'];
  
  const photos = [
    { id: 1, title: 'DERBY VICTORY CELEBRATIONS', date: 'MAY 15, 2024', category: 'MATCH PHOTOS', img: 'https://images.unsplash.com/photo-1518605368461-1e12c1ce9686?q=80&w=1000&auto=format&fit=crop', aspect: 'aspect-square' },
    { id: 2, title: 'NEW HOME KIT REVEAL', date: 'APR 28, 2024', category: 'KIT LAUNCHES', img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1035&auto=format&fit=crop', aspect: 'aspect-[3/4]' },
    { id: 3, title: 'INTENSE TRAINING SESSION', date: 'MAY 10, 2024', category: 'TRAINING', img: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1000&auto=format&fit=crop', aspect: 'aspect-video' },
    { id: 4, title: 'AWAY FANS IN FULL VOICE', date: 'MAY 01, 2024', category: 'MATCH PHOTOS', img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop', aspect: 'aspect-[4/3]' },
    { id: 5, title: 'MANAGER PRE-MATCH PRESSER', date: 'MAY 14, 2024', category: 'TRAINING', img: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop', aspect: 'aspect-square' },
    { id: 6, title: 'LIMITED EDITION THIRD KIT', date: 'APR 15, 2024', category: 'KIT LAUNCHES', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop', aspect: 'aspect-[3/4]' },
  ];

  const filteredPhotos = filter === 'ALL' ? photos : photos.filter(p => p.category === filter);

  return (
    <>
      <SEOMeta title="Gallery" description="Explore the latest match photos, training sessions, and events." url="https://thunderbulls.com/gallery" />
      
      <div className="bg-storm-black min-h-screen pt-24 pb-24">
        {/* Page Hero */}
        <div className="text-center mb-16 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-oswald font-extrabold text-5xl md:text-7xl text-lightning-white tracking-widest uppercase mb-4"
          >
            MEDIA GALLERY
          </motion.h1>
          <div className="w-24 h-1 bg-thunder-gold mx-auto box-glow-gold"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`font-oswald font-bold px-6 py-2 tracking-widest uppercase transition-all duration-300 border ${
                  filter === f 
                    ? 'bg-thunder-gold text-storm-black border-thunder-gold box-glow-gold' 
                    : 'bg-transparent text-ash-grey border-ash-grey/30 hover:border-thunder-gold/50 hover:text-lightning-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid (CSS Columns approach or tailored grid) */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`relative group overflow-hidden rounded-xl bg-black-card cursor-pointer inline-block w-full border border-ash-grey/20 hover:border-thunder-gold/50`}
                >
                  <img src={photo.img} alt={photo.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-storm-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <span className="font-barlow text-thunder-gold font-bold tracking-widest uppercase text-sm mb-2">
                      {photo.category}
                    </span>
                    <h3 className="font-oswald text-2xl text-lightning-white tracking-widest uppercase mb-2">
                      {photo.title}
                    </h3>
                    <span className="font-barlow text-ash-grey tracking-widest uppercase text-xs">
                      {photo.date}
                    </span>
                    
                    {/* View Icon */}
                    <div className="w-12 h-12 rounded-full border border-thunder-gold flex items-center justify-center mt-6 group-hover:scale-110 transition-transform text-thunder-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}