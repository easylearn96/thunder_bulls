import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ label, target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 border-l border-bull-crimson/30 first:border-none md:first:border-none">
      <span className="font-oswald font-extrabold text-5xl md:text-7xl text-thunder-gold drop-shadow-[0_0_15px_rgba(255,193,7,0.4)]">
        {count}{suffix}
      </span>
      <span className="font-barlow text-lightning-white uppercase tracking-widest text-lg mt-2">
        {label}
      </span>
    </div>
  );
};

export default function StatsCounter() {
  const stats = [
    { label: "Wins This Season", target: 14 },
    { label: "Goals Scored", target: 42 },
    { label: "Clean Sheets", target: 8 },
    { label: "Squad Size", target: 26 }
  ];

  return (
    <section className="w-full bg-storm-black border-y border-ash-grey/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
        >
          {stats.map((stat, index) => (
            <StatItem key={index} label={stat.label} target={stat.target} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
