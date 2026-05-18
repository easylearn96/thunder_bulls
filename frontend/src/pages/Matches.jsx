import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';

export default function Matches() {
  const [activeTab, setActiveTab] = useState('UPCOMING');
  const [matches, setMatches] = useState([]);
  
  const fallbackMatches = [
    { _id: 1, type: 'UPCOMING', date: 'MAY 22, 2024 - 20:00', home: 'THUNDER BULLS', away: 'CITY UNITED', competition: 'PREMIER LEAGUE', venue: 'THUNDER ARENA', status: 'upcoming' },
    { _id: 2, type: 'UPCOMING', date: 'MAY 29, 2024 - 15:00', home: 'ROYAL BLUES', away: 'THUNDER BULLS', competition: 'PREMIER LEAGUE', venue: 'KINGS STADIUM', status: 'upcoming' },
    { _id: 3, type: 'RESULTS', date: 'MAY 15, 2024 - 20:00', home: 'THUNDER BULLS', away: 'EAST RIVALS', competition: 'PREMIER LEAGUE', venue: 'THUNDER ARENA', homeScore: 3, awayScore: 0, status: 'win' },
  ];

  useEffect(() => {
    fetch('/api/matches')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const formatted = data.map(m => {
            const dt = new Date(m.date);
            const dateStr = dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase();
            const timeStr = dt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
            
            let statusStr = m.status;
            let type = m.status === 'upcoming' ? 'UPCOMING' : 'RESULTS';
            if (m.status === 'completed') {
              if (m.homeTeam === 'THUNDER BULLS' && m.score.home > m.score.away) statusStr = 'win';
              else if (m.awayTeam === 'THUNDER BULLS' && m.score.away > m.score.home) statusStr = 'win';
              else if (m.score.home === m.score.away) statusStr = 'draw';
              else statusStr = 'loss';
            }

            return {
              _id: m._id, type, date: `${dateStr} - ${timeStr}`,
              home: m.homeTeam, away: m.awayTeam, competition: m.competition, venue: m.venue,
              homeScore: m.score.home, awayScore: m.score.away, status: statusStr
            };
          });
          setMatches(formatted);
        } else {
          setMatches(fallbackMatches);
        }
      })
      .catch(() => setMatches(fallbackMatches));
  }, []);

  const getBorderColor = (status) => {
    if (status === 'win') return 'border-l-green-500';
    if (status === 'loss') return 'border-l-bull-crimson';
    if (status === 'draw') return 'border-l-ash-grey';
    return 'border-l-thunder-gold';
  };

  const filteredMatches = activeTab === 'ALL FIXTURES' 
    ? matches 
    : matches.filter(m => m.type === activeTab);

  return (
    <>
      <SEOMeta title="Matches & Fixtures" description="Upcoming fixtures and latest results for Thunder Bulls FC." url="https://thunderbulls.com/matches" />
      
      <div className="bg-storm-black min-h-screen pt-24 pb-24">
        {/* Page Hero */}
        <div className="relative w-full h-[30vh] flex items-center justify-center overflow-hidden border-b border-ash-grey/20">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-storm-black/80 z-10"></div>
             <img src="https://images.unsplash.com/photo-1518605368461-1e12c1ce9686?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 grayscale" alt="Stadium" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-20 font-oswald font-extrabold text-6xl md:text-8xl text-lightning-white tracking-widest uppercase text-glow-white"
          >
            MATCHES
          </motion.h1>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          {/* Tabs */}
          <div className="flex justify-center border-b border-ash-grey/20 mb-10">
            {['UPCOMING', 'RESULTS', 'ALL FIXTURES'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-oswald font-bold px-8 py-4 tracking-widest uppercase transition-all duration-300 relative ${
                  activeTab === tab ? 'text-thunder-gold' : 'text-ash-grey hover:text-lightning-white'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="matchTabIndicator" className="absolute bottom-0 left-0 w-full h-1 bg-thunder-gold" />
                )}
              </button>
            ))}
          </div>

          {/* Match List */}
          <motion.div layout className="flex flex-col gap-4">
            <AnimatePresence>
              {filteredMatches.map((match, index) => (
                <motion.div
                  key={match._id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`bg-black-card border border-ash-grey/20 hover:border-thunder-gold/40 hover:box-glow-gold transition-all duration-300 flex flex-col md:flex-row justify-between items-center p-6 border-l-4 ${getBorderColor(match.status)}`}
                >
                  <div className="flex flex-col mb-4 md:mb-0 text-center md:text-left">
                    <span className="font-barlow text-ash-grey tracking-widest text-sm uppercase mb-2">{match.date} | {match.competition}</span>
                    <div className="flex items-center justify-center md:justify-start gap-4 font-oswald text-2xl text-lightning-white">
                      <span className={match.homeScore > match.awayScore ? 'text-thunder-gold' : ''}>{match.home}</span>
                      
                      {match.type === 'RESULTS' || match.status !== 'upcoming' ? (
                        <div className="bg-black-soft px-4 py-1 border border-ash-grey/20 flex gap-3 text-3xl font-bold">
                          <span className={match.homeScore > match.awayScore ? 'text-thunder-gold' : 'text-lightning-white'}>{match.homeScore}</span>
                          <span className="text-ash-grey">-</span>
                          <span className={match.awayScore > match.homeScore ? 'text-thunder-gold' : 'text-lightning-white'}>{match.awayScore}</span>
                        </div>
                      ) : (
                        <span className="text-bull-crimson text-lg">VS</span>
                      )}
                      
                      <span className={match.awayScore > match.homeScore ? 'text-thunder-gold' : ''}>{match.away}</span>
                    </div>
                    <span className="font-barlow text-ash-grey tracking-widest text-sm uppercase mt-2">{match.venue}</span>
                  </div>
                  
                  <div>
                    <button className="bg-transparent border border-thunder-gold text-thunder-gold font-oswald font-bold px-6 py-2 tracking-widest uppercase hover:bg-thunder-gold hover:text-storm-black transition-colors w-full md:w-auto">
                      {match.type === 'RESULTS' ? 'MATCH REPORT' : 'MATCH INFO'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredMatches.length === 0 && (
              <div className="text-center py-20 font-oswald text-2xl text-ash-grey tracking-widest">
                NO MATCHES FOUND.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}