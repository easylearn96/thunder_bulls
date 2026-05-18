import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/Thundar Bulls.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SQUAD', path: '/squad' },
    { name: 'MATCHES', path: '/matches' },
    { name: 'NEWS', path: '/news' },
    { name: 'SHOP', path: '/shop' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-storm-black box-glow-gold'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center group">
                <div className="w-24 h-24 flex items-center justify-center relative group-hover:scale-105 transition-all duration-300">
                  <img src={logo} alt="Thunder Bulls Logo" className="w-full h-full object-contain" />
                </div>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-oswald font-medium text-sm tracking-[2px] uppercase relative group ${
                    location.pathname === link.path ? 'text-thunder-gold' : 'text-lightning-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-thunder-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/shop"
                className="hidden md:flex items-center justify-center bg-thunder-gold text-storm-black font-oswald font-bold px-6 py-2 rounded-md hover:bg-yellow-500 hover:shadow-[0_0_15px_rgba(255,193,7,0.6)] transition-all duration-300 tracking-wider"
              >
                SHOP NOW
              </Link>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-thunder-gold hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black-overlay backdrop-blur-md flex flex-col justify-center items-center h-screen w-full lg:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`font-oswald font-extrabold text-3xl tracking-widest uppercase ${
                      location.pathname === link.path ? 'text-thunder-gold' : 'text-lightning-white'
                    } hover:text-thunder-gold transition-colors`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-8"
              >
                <Link
                  to="/shop"
                  className="bg-thunder-gold text-storm-black font-oswald font-bold px-10 py-4 rounded-md text-xl tracking-wider inline-block box-glow-gold"
                >
                  SHOP NOW
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
