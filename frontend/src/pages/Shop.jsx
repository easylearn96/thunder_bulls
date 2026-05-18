import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';

export default function Shop() {
  const [filter, setFilter] = useState('ALL');
  const [products, setProducts] = useState([]);

  const fallbackProducts = [
    { _id: 1, name: "2024 HOME KIT - AUTHENTIC", price: 119.99, category: "KITS", badge: "NEW", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1035&auto=format&fit=crop" },
    { _id: 2, name: "2024 AWAY KIT", price: 89.99, category: "KITS", badge: "", img: "https://images.unsplash.com/photo-1589312521122-1d54b4be2ebc?q=80&w=1170&auto=format&fit=crop" },
    { _id: 3, name: "THUNDER TRAINING TOP", price: 54.99, category: "TRAINING WEAR", badge: "", img: "https://images.unsplash.com/photo-1518605368461-1e12c1ce9686?q=80&w=1000&auto=format&fit=crop" },
    { _id: 4, name: "LIMITED EDITION THIRD KIT", price: 129.99, category: "LIMITED EDITION", badge: "LIMITED", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1160&auto=format&fit=crop" },
  ];

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const formatted = data.map(p => ({
            _id: p._id, name: p.name, price: p.price, category: p.category, badge: p.badge, img: p.images[0]
          }));
          setProducts(formatted);
        } else {
          setProducts(fallbackProducts);
        }
      })
      .catch(() => setProducts(fallbackProducts));
  }, []);

  const filters = ['ALL', 'KITS', 'TRAINING WEAR', 'ACCESSORIES', 'LIMITED EDITION'];

  const filteredProducts = filter === 'ALL' ? products : products.filter(p => p.category === filter);

  return (
    <>
      <SEOMeta title="Official Store" description="Buy official Thunder Bulls FC kits, training wear, and accessories." url="https://thunderbulls.com/shop" />
      
      <div className="bg-storm-black min-h-screen pt-24 pb-24">
        {/* Banner */}
        <div className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden border-b border-ash-grey/20">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-storm-black/70 z-10"></div>
             <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50" alt="Shop Background" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-20 font-oswald font-extrabold text-5xl md:text-7xl text-lightning-white tracking-widest uppercase text-glow-white text-center px-4"
          >
            OFFICIAL THUNDER BULLS STORE
          </motion.h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filter */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-black-card p-6 rounded-xl border border-ash-grey/20 sticky top-32">
              <h4 className="font-oswald text-xl text-lightning-white tracking-widest mb-6 border-b border-ash-grey/20 pb-2">CATEGORIES</h4>
              <ul className="space-y-3 font-barlow text-lg tracking-wide uppercase">
                {filters.map(f => (
                  <li key={f}>
                    <button 
                      onClick={() => setFilter(f)}
                      className={`transition-colors w-full text-left ${filter === f ? 'text-thunder-gold font-bold' : 'text-ash-grey hover:text-lightning-white'}`}
                    >
                      {f}
                    </button>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-oswald text-xl text-lightning-white tracking-widest mb-6 border-b border-ash-grey/20 pb-2 mt-10">SORT BY</h4>
              <select className="w-full bg-black-soft border border-ash-grey/30 text-lightning-white px-4 py-3 font-barlow tracking-widest focus:outline-none focus:border-thunder-gold rounded-md transition-colors uppercase">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product._id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-black-card rounded-xl overflow-hidden border border-ash-grey/20 hover:border-thunder-gold/50 hover:box-glow-gold transition-all duration-300 flex flex-col relative h-[450px]"
                  >
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="font-oswald text-sm font-bold bg-thunder-gold text-storm-black px-3 py-1 rounded box-glow-gold tracking-widest">
                          {product.badge}
                        </span>
                      </div>
                    )}
                    
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-black-soft flex items-center justify-center p-4">
                      <img 
                        src={product.img} 
                        alt={product.name}
                        className="w-full h-full object-cover mix-blend-lighten group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="p-6 flex flex-col flex-1 border-t border-ash-grey/20 relative z-10 bg-black-card">
                      <h3 className="font-oswald text-xl font-bold text-lightning-white uppercase tracking-widest mb-1 group-hover:text-thunder-gold transition-colors">
                        {product.name}
                      </h3>
                      <p className="font-oswald text-thunder-gold text-lg tracking-wider mb-4 font-medium">
                        ${product.price.toFixed(2)}
                      </p>
                      
                      <div className="mt-auto overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                        <button className="w-full bg-thunder-gold text-storm-black font-oswald font-bold py-3 uppercase tracking-widest hover:bg-yellow-500 rounded translate-y-full group-hover:translate-y-0 transition-transform duration-300 box-glow-gold">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </>
  );
}