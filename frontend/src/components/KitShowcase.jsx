import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const kits = [
  {
    id: 1,
    name: "HOME KIT",
    type: "2024 OFFICIAL",
    color: "STORM BLACK",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1035&auto=format&fit=crop",
    link: "/shop/home-kit"
  },
  {
    id: 2,
    name: "AWAY KIT",
    type: "2024 OFFICIAL",
    color: "LIGHTNING WHITE",
    image: "https://images.unsplash.com/photo-1589312521122-1d54b4be2ebc?q=80&w=1170&auto=format&fit=crop",
    link: "/shop/away-kit"
  },
  {
    id: 3,
    name: "THIRD KIT",
    type: "2024 LIMITED",
    color: "ELECTRIC BLUE",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop",
    link: "/shop/third-kit"
  }
];

export default function KitShowcase() {
  return (
    <section className="bg-storm-black py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-oswald text-5xl md:text-6xl font-extrabold text-lightning-white tracking-wide uppercase inline-block relative">
            2024 OFFICIAL KITS
            <span className="absolute -bottom-4 left-1/4 w-1/2 h-1 bg-thunder-gold"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kits.map((kit, index) => (
            <motion.div 
              key={kit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black-card rounded-xl overflow-hidden group hover:box-glow-gold hover:-translate-y-2 transition-all duration-300 border border-ash-grey/20 hover:border-thunder-gold/50"
            >
              <div className="relative h-80 overflow-hidden bg-black-soft flex items-center justify-center p-6">
                {/* Mockup image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-card to-transparent z-10"></div>
                <img 
                  src={kit.image} 
                  alt={kit.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
              </div>
              
              <div className="p-8 text-center relative z-20 -mt-10 bg-black-card/90 backdrop-blur-sm mx-4 rounded-t-lg border-t border-ash-grey/20">
                <p className="font-barlow text-bull-crimson text-sm tracking-widest font-bold uppercase mb-1">{kit.type}</p>
                <h3 className="font-oswald text-3xl font-bold text-lightning-white tracking-widest mb-2">{kit.name}</h3>
                <p className="font-barlow text-ash-grey tracking-widest mb-6 uppercase text-sm">{kit.color}</p>
                
                <Link 
                  to={kit.link}
                  className="inline-block bg-transparent border-2 border-thunder-gold text-thunder-gold font-oswald font-bold px-8 py-3 w-full hover:bg-thunder-gold hover:text-storm-black transition-colors duration-300 uppercase tracking-widest"
                >
                  SHOP NOW
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
