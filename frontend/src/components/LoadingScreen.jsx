import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/Thundar Bulls.png';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[1000] bg-storm-black flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="w-32 h-32 relative z-10 flex items-center justify-center">
          <img src={logo} alt="Thunder Bulls Loading" className="w-full h-full object-contain" />
        </div>
        
        {/* Pulsing ring */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 border-2 border-thunder-gold rounded-full"
          style={{ padding: '2rem', margin: '-1rem' }}
        ></motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 font-barlow text-ash-grey tracking-[0.3em] uppercase"
      >
        Loading
      </motion.div>
    </div>
  );
}