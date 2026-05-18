import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import logo from '../assets/images/Thundar Bulls.png';

export default function HeroSection() {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      animate(logoRef.current, {
        y: 15,
        rotate: 3,
        alternate: true,
        loop: true,
        ease: 'inOutSine',
        duration: 2500
      });
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-storm-black">
      {/* Background Video/Image Mockup */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-storm-black via-storm-black/80 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1518605368461-1e12c1ce9686?q=80&w=2070&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
      </div>

      {/* Lightning Flash Overlay */}
      <div className="absolute inset-0 bg-white z-0 animate-lightning mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col md:flex-row items-center justify-between mt-4">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col max-w-2xl"
        >
          <span className="font-barlow text-thunder-gold text-lg tracking-[0.3em] font-medium mb-4 uppercase">
            EST. 2024 — NEVER TAMED
          </span>
          
          <h1 className="flex flex-col text-6xl md:text-8xl lg:text-9xl font-oswald font-extrabold leading-none">
            <span className="text-lightning-white text-glow-white">STRIKE FEAR.</span>
            <span className="text-thunder-gold text-glow-gold mt-2">PLAY THUNDER.</span>
          </h1>
          
          <p className="font-barlow text-ash-grey text-lg md:text-xl mt-6 max-w-lg tracking-wide">
            Welcome to the official home of the Thunder Bulls. Experience the raw power, unmatched passion, and relentless drive of the city's most electrifying football club.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/squad" className="bg-thunder-gold text-storm-black font-oswald font-bold px-8 py-4 text-xl tracking-widest uppercase hover:bg-yellow-500 hover:box-glow-gold transition-all duration-300 text-center flex items-center justify-center">
              VIEW SQUAD
            </Link>
            <Link to="/matches" className="bg-transparent border-2 border-lightning-white text-lightning-white font-oswald font-bold px-8 py-4 text-xl tracking-widest uppercase hover:bg-lightning-white hover:text-storm-black transition-all duration-300 text-center flex items-center justify-center">
              NEXT MATCH
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Logo Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex justify-center items-center relative -mt-56"
        >
          {/* Animated Gold Glow */}
          <div className="absolute inset-0 bg-thunder-gold rounded-full blur-[100px] opacity-20 animate-gold-pulse"></div>
          
          {/* Large Shield/Crest Mockup */}
          <div ref={logoRef} className="relative w-[400px] h-[400px] flex items-center justify-center z-10 drop-shadow-[0_0_50px_rgba(255,193,7,0.3)]">
             <img src={logo} alt="Thunder Bulls Crest" className="w-full h-full object-contain" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
