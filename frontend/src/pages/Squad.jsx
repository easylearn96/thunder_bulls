import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';

export default function Squad() {
  const [filter, setFilter] = useState('ALL');
  
  const squad = [
    { id: 1, name: "ALEX HUNTER", position: "GOALKEEPER", number: "1", nationality: "GB", apps: 120, goals: 0, assists: 2, img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "DAVID SILVA", position: "DEFENDER", number: "4", nationality: "ES", apps: 85, goals: 5, assists: 12, img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "CARLOS MENDES", position: "DEFENDER", number: "5", nationality: "BR", apps: 42, goals: 2, assists: 3, img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, name: "MARCUS WEBB", position: "MIDFIELDER", number: "10", nationality: "GB", apps: 156, goals: 34, assists: 45, img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, name: "LEO BLANC", position: "MIDFIELDER", number: "8", nationality: "FR", apps: 67, goals: 12, assists: 28, img: "https://images.unsplash.com/photo-1551280857-2b9ebf241519?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, name: "LIAM CROSS", position: "FORWARD", number: "9", nationality: "US", apps: 92, goals: 68, assists: 15, img: "https://images.unsplash.com/photo-1431324155629-1a6d0a11f47f?q=80&w=1000&auto=format&fit=crop" },
    { id: 7, name: "SANTIAGO RUIZ", position: "FORWARD", number: "11", nationality: "AR", apps: 34, goals: 22, assists: 8, img: "https://images.unsplash.com/photo-1518605368461-1e12c1ce9686?q=80&w=1000&auto=format&fit=crop" },
    { id: 8, name: "JOHN DAVIS", position: "GOALKEEPER", number: "13", nationality: "GB", apps: 14, goals: 0, assists: 0, img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop" }
  ];

  const filters = ['ALL', 'GOALKEEPER', 'DEFENDER', 'MIDFIELDER', 'FORWARD'];
  
  const filteredSquad = filter === 'ALL' 
    ? squad 
    : squad.filter(player => player.position === filter);

  return (
    <>
      <SEOMeta 
        title="Squad" 
        description="Meet the official Thunder Bulls FC squad. Player profiles, stats, and more." 
        url="https://thunderbulls.com/squad" 
      />
      
      <div className="bg-storm-black min-h-screen pt-24 pb-24">
        
        {/* Page Hero */}
        <div className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden border-b border-ash-grey/20">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-storm-black/80 z-10"></div>
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-thunder-gold/20 via-transparent to-transparent z-10 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 bg-white z-0 animate-lightning mix-blend-overlay opacity-10"></div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 font-oswald font-extrabold text-7xl md:text-9xl text-lightning-white tracking-widest uppercase text-glow-white"
          >
            THE SQUAD
          </motion.h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`font-oswald font-bold px-6 py-2 tracking-widest uppercase transition-all duration-300 ${
                    filter === f 
                      ? 'bg-thunder-gold text-storm-black box-glow-gold rounded-md' 
                      : 'bg-black-card text-ash-grey hover:text-lightning-white border border-ash-grey/20 rounded-md hover:border-thunder-gold/50'
                  }`}
                >
                  {f}{f !== 'ALL' ? 'S' : ''}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="SEARCH PLAYER..." 
                className="w-full bg-black-card border border-ash-grey/30 text-lightning-white px-4 py-3 font-barlow tracking-widest focus:outline-none focus:border-thunder-gold rounded-md transition-colors placeholder:text-ash-grey"
              />
            </div>
          </div>

          {/* Player Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredSquad.map((player) => (
                <motion.div
                  key={player.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-black-card rounded-xl overflow-hidden border border-ash-grey/20 hover:border-thunder-gold/50 hover:box-glow-gold transition-all duration-300 cursor-pointer flex flex-col h-[450px]"
                >
                  {/* Photo Area */}
                  <div className="relative h-[65%] overflow-hidden bg-black-soft flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black-card to-transparent z-10"></div>
                    <img 
                      src={player.img} 
                      alt={player.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-80"
                    />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-oswald text-[150px] text-thunder-gold opacity-[0.03] font-bold z-0 pointer-events-none group-hover:opacity-10 transition-opacity">
                      {player.number}
                    </span>
                  </div>

                  {/* Info Area */}
                  <div className="relative flex-1 p-6 flex flex-col bg-black-card z-20 -mt-6 rounded-t-2xl border-t border-ash-grey/20 group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-oswald text-2xl font-bold text-lightning-white tracking-widest uppercase">
                        {player.name}
                      </h3>
                      <span className="font-oswald text-thunder-gold font-bold text-xl">{player.number}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-barlow text-bull-crimson tracking-widest font-bold uppercase text-sm">{player.position}</span>
                      <span className="text-ash-grey text-xs">|</span>
                      <span className="font-barlow text-ash-grey tracking-widest uppercase text-sm">{player.nationality}</span>
                    </div>

                    {/* Stats Strip */}
                    <div className="mt-auto grid grid-cols-3 gap-2 pt-4 border-t border-ash-grey/10">
                      <div className="flex flex-col items-center">
                        <span className="font-oswald text-thunder-gold text-lg">{player.apps}</span>
                        <span className="font-barlow text-ash-grey text-[10px] tracking-widest uppercase">APPS</span>
                      </div>
                      <div className="flex flex-col items-center border-l border-r border-ash-grey/10">
                        <span className="font-oswald text-thunder-gold text-lg">{player.goals}</span>
                        <span className="font-barlow text-ash-grey text-[10px] tracking-widest uppercase">GOALS</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-oswald text-thunder-gold text-lg">{player.assists}</span>
                        <span className="font-barlow text-ash-grey text-[10px] tracking-widest uppercase">ASSISTS</span>
                      </div>
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
