import React from 'react';
import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import StatsCounter from '../components/StatsCounter';
import KitShowcase from '../components/KitShowcase';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Thundar Bulls.png';

export default function Home() {
  const squad = [
    { id: 1, name: "LIAM CROSS", position: "STRIKER", number: "9", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "MARCUS WEBB", position: "MIDFIELDER", number: "10", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "DAVID SILVA", position: "DEFENDER", number: "4", img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, name: "ALEX HUNTER", position: "GOALKEEPER", number: "1", img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1000&auto=format&fit=crop" },
  ];

  const news = [
    { id: 1, tag: "MATCH REPORT", title: "THUNDER BULLS DOMINATE RIVALS 3-0 IN DERBY", date: "MAY 15, 2024", img: "https://images.unsplash.com/photo-1431324155629-1a6d0a11f47f?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, tag: "CLUB NEWS", title: "NEW TRAINING GROUND CONSTRUCTION BEGINS", date: "MAY 12, 2024", img: "https://images.unsplash.com/photo-1518605368461-1e12c1ce9686?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, tag: "TRANSFER", title: "MIDFIELD MAESTRO SIGNS 4-YEAR DEAL", date: "MAY 08, 2024", img: "https://images.unsplash.com/photo-1551280857-2b9ebf241519?q=80&w=1000&auto=format&fit=crop" },
  ];

  return (
    <>
      <SEOMeta 
        title="Home" 
        description="Thunder Bulls FC — Official website. Fixtures, squad, news and shop." 
        url="https://thunderbulls.com/" 
      />
      
      <div className="bg-storm-black min-h-screen">
        <HeroSection />
        
        {/* Next Match Banner */}
        <div className="w-full bg-electric-blue border-b-2 border-thunder-gold relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center relative z-10">
            <div className="flex items-center gap-6">
              <span className="font-barlow text-thunder-gold uppercase tracking-widest text-sm font-bold">NEXT MATCH</span>
              <div className="flex items-center gap-4 text-lightning-white font-oswald text-xl sm:text-2xl">
                <span>THUNDER BULLS</span>
                <span className="text-bull-crimson px-2">VS</span>
                <span className="text-ash-grey">CITY UNITED</span>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              <div className="font-barlow text-lightning-white text-sm tracking-widest hidden md:flex gap-4">
                <span>MAY 22, 2024</span>
                <span>|</span>
                <span>20:00 KICKOFF</span>
                <span>|</span>
                <span>THUNDER ARENA</span>
              </div>
              <button className="bg-transparent border border-lightning-white text-lightning-white font-oswald text-sm px-6 py-2 hover:bg-lightning-white hover:text-electric-blue transition-colors uppercase tracking-widest">
                BUY TICKETS
              </button>
            </div>
          </div>
        </div>

        <StatsCounter />

        {/* The Thunder Bulls Squad Highlight */}
        <section className="py-24 section-padding bg-black-soft relative overflow-hidden">
          {/* Subtle logo background */}
          <div className="absolute -right-40 top-20 opacity-5 pointer-events-none transform rotate-12 w-[600px] h-[600px]">
            <img src={logo} alt="TB Logo" className="w-full h-full object-contain" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-between items-end mb-16"
            >
              <h2 className="font-oswald text-5xl md:text-6xl font-extrabold text-lightning-white tracking-wide uppercase inline-block relative">
                THE THUNDER BULLS
                <span className="absolute -bottom-4 left-0 w-1/2 h-1 bg-thunder-gold"></span>
              </h2>
              <Link to="/squad" className="hidden md:block font-barlow text-thunder-gold tracking-widest uppercase hover:text-white transition-colors border-b border-thunder-gold pb-1">
                VIEW FULL SQUAD
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {squad.map((player, index) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-black-card rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-ash-grey/10 hover:border-thunder-gold/40 hover:box-glow-gold h-[400px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-storm-black via-storm-black/20 to-transparent z-10"></div>
                  <img 
                    src={player.img} 
                    alt={player.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                  {/* Large background number */}
                  <span className="absolute top-10 right-4 font-oswald text-9xl text-thunder-gold opacity-10 font-bold z-0">{player.number}</span>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <span className="font-oswald text-thunder-gold text-3xl font-bold mb-1 block">{player.number}</span>
                    <h3 className="font-oswald text-2xl text-lightning-white uppercase tracking-widest">{player.name}</h3>
                    <p className="font-barlow text-ash-grey tracking-widest uppercase text-sm">{player.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 text-center md:hidden">
              <Link to="/squad" className="inline-block font-barlow text-thunder-gold tracking-widest uppercase border-b border-thunder-gold pb-1">
                VIEW FULL SQUAD
              </Link>
            </div>
          </div>
        </section>

        {/* Latest News Highlight */}
        <section className="py-24 section-padding bg-storm-black">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-oswald text-5xl md:text-6xl font-extrabold text-lightning-white tracking-wide uppercase inline-block relative">
                THUNDER BULLS NEWS
                <span className="absolute -bottom-4 left-0 w-1/2 h-1 bg-bull-crimson"></span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Featured Article (Left 60%) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-7 group relative bg-black-card rounded-xl overflow-hidden min-h-[400px] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-storm-black via-storm-black/60 to-transparent z-10"></div>
                <img 
                  src={news[0].img} 
                  alt={news[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <span className="font-barlow text-thunder-gold bg-thunder-gold/10 px-3 py-1 text-sm tracking-widest font-bold uppercase inline-block mb-4 border border-thunder-gold/30 rounded">
                    {news[0].tag}
                  </span>
                  <h3 className="font-oswald text-3xl md:text-4xl text-lightning-white uppercase tracking-wide mb-3 group-hover:text-thunder-gold transition-colors">
                    {news[0].title}
                  </h3>
                  <div className="flex items-center justify-between text-ash-grey font-barlow text-sm tracking-widest uppercase">
                    <span>{news[0].date} | BY CLUB MEDIA</span>
                    <span className="text-thunder-gold flex items-center gap-2 group-hover:translate-x-2 transition-transform">READ MORE &rarr;</span>
                  </div>
                </div>
              </motion.div>

              {/* Smaller Articles (Right 40%) */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                {news.slice(1).map((article, index) => (
                  <motion.div 
                    key={article.id}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-1/3 h-32 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center w-2/3">
                      <span className="font-barlow text-bull-crimson text-xs tracking-widest font-bold uppercase mb-2">
                        {article.tag}
                      </span>
                      <h4 className="font-oswald text-xl text-lightning-white uppercase tracking-wide leading-tight mb-2 group-hover:text-thunder-gold transition-colors">
                        {article.title}
                      </h4>
                      <span className="font-barlow text-ash-grey text-xs tracking-widest uppercase">
                        {article.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
                
                <Link to="/news" className="mt-auto bg-black-soft border border-ash-grey/20 text-lightning-white font-oswald font-bold py-4 text-center tracking-widest uppercase hover:bg-lightning-white hover:text-storm-black transition-colors rounded-md">
                  VIEW ALL NEWS
                </Link>
              </div>
            </div>
          </div>
        </section>

        <KitShowcase />
        
      </div>
    </>
  );
}
