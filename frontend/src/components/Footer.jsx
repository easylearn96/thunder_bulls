import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/images/Thundar bull white background footer.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060606] text-ash-grey font-barlow relative pt-16 mt-auto">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-thunder-gold via-bull-crimson to-thunder-gold"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center group">
              <div className="w-48 h-48 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
                <img src={logo} alt="Thunder Bulls Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
            <p className="font-oswald font-medium tracking-wide text-lightning-white uppercase mt-2">
              STRIKE FEAR. PLAY THUNDER.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-black-card flex items-center justify-center text-lightning-white hover:bg-thunder-gold hover:text-storm-black transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black-card flex items-center justify-center text-lightning-white hover:bg-thunder-gold hover:text-storm-black transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black-card flex items-center justify-center text-lightning-white hover:bg-thunder-gold hover:text-storm-black transition-all duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black-card flex items-center justify-center text-lightning-white hover:bg-bull-crimson transition-all duration-300">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-oswald text-xl text-lightning-white tracking-widest mb-6 border-b border-ash-grey/30 pb-2 inline-block">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {['Home', 'Squad', 'Matches', 'News'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-thunder-gold transition-colors text-lg tracking-wide">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Club Info */}
          <div>
            <h4 className="font-oswald text-xl text-lightning-white tracking-widest mb-6 border-b border-ash-grey/30 pb-2 inline-block">
              CLUB INFO
            </h4>
            <ul className="space-y-3">
              {['About', 'Gallery', 'Contact', 'Shop'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="hover:text-thunder-gold transition-colors text-lg tracking-wide">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-oswald text-xl text-lightning-white tracking-widest mb-6 border-b border-ash-grey/30 pb-2 inline-block">
              NEWSLETTER
            </h4>
            <p className="mb-4 tracking-wide">Join the stampede. Get the latest news, ticket info, and shop offers directly to your inbox.</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-black-card border border-ash-grey/30 text-lightning-white px-4 py-3 focus:outline-none focus:border-thunder-gold rounded-md transition-colors w-full"
                required
              />
              <button 
                type="submit"
                className="bg-thunder-gold text-storm-black font-oswald font-bold py-3 px-6 hover:bg-yellow-500 hover:box-glow-gold transition-all duration-300 rounded-md tracking-widest uppercase w-full"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Decorative Divider */}
      <div className="w-full flex justify-center py-6">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-thunder-gold opacity-50">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
        </svg>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-ash-grey/20 bg-[#040404]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm tracking-wide gap-4">
          <p>&copy; {currentYear} Thunder Bulls Football Club. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-lightning-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lightning-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-lightning-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
