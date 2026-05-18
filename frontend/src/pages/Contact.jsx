import React from 'react';
import { motion } from 'framer-motion';
import SEOMeta from '../components/SEOMeta';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <SEOMeta title="Contact Us" description="Get in touch with Thunder Bulls FC for general inquiries, tickets, and media." url="https://thunderbulls.com/contact" />
      
      <div className="bg-storm-black min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Info */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <h1 className="font-oswald font-extrabold text-5xl md:text-7xl text-lightning-white tracking-widest uppercase mb-4">
                GET IN TOUCH
              </h1>
              <div className="w-20 h-1 bg-thunder-gold mb-8 box-glow-gold"></div>
              
              <p className="font-barlow text-ash-grey tracking-wide text-lg mb-12 max-w-md">
                Have a question about tickets, merchandise, or club memberships? 
                Reach out to us and our support team will get back to you shortly.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-black-card border border-ash-grey/20 flex items-center justify-center text-thunder-gold flex-shrink-0">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-xl text-lightning-white tracking-widest uppercase mb-1">THE THUNDER ARENA</h4>
                    <p className="font-barlow text-ash-grey tracking-widest uppercase">124 Championship Blvd<br/>London, UK 10024</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-black-card border border-ash-grey/20 flex items-center justify-center text-thunder-gold flex-shrink-0">
                    <FaPhoneAlt size={18} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-xl text-lightning-white tracking-widest uppercase mb-1">PHONE</h4>
                    <p className="font-barlow text-ash-grey tracking-widest uppercase">+44 20 7946 0958</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-black-card border border-ash-grey/20 flex items-center justify-center text-thunder-gold flex-shrink-0">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-xl text-lightning-white tracking-widest uppercase mb-1">EMAIL</h4>
                    <p className="font-barlow text-ash-grey tracking-widest uppercase">info@thunderbulls.com</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-black-card border border-ash-grey/20 flex items-center justify-center text-lightning-white hover:border-thunder-gold hover:text-thunder-gold transition-all">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-black-card border border-ash-grey/20 flex items-center justify-center text-lightning-white hover:border-thunder-gold hover:text-thunder-gold transition-all">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-black-card border border-ash-grey/20 flex items-center justify-center text-lightning-white hover:border-thunder-gold hover:text-thunder-gold transition-all">
                  <FaTwitter size={20} />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black-card p-8 md:p-10 rounded-2xl border border-ash-grey/20 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-thunder-gold/5 rounded-bl-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-bull-crimson/5 rounded-tr-full blur-2xl"></div>
              
              <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-barlow text-ash-grey tracking-widest uppercase text-sm mb-2">FULL NAME</label>
                  <input type="text" className="w-full bg-black-soft border border-ash-grey/30 text-lightning-white px-4 py-3 font-barlow tracking-widest focus:outline-none focus:border-thunder-gold rounded transition-colors" placeholder="ENTER YOUR NAME" required />
                </div>
                
                <div>
                  <label className="block font-barlow text-ash-grey tracking-widest uppercase text-sm mb-2">EMAIL ADDRESS</label>
                  <input type="email" className="w-full bg-black-soft border border-ash-grey/30 text-lightning-white px-4 py-3 font-barlow tracking-widest focus:outline-none focus:border-thunder-gold rounded transition-colors" placeholder="ENTER YOUR EMAIL" required />
                </div>
                
                <div>
                  <label className="block font-barlow text-ash-grey tracking-widest uppercase text-sm mb-2">SUBJECT</label>
                  <select className="w-full bg-black-soft border border-ash-grey/30 text-lightning-white px-4 py-3 font-barlow tracking-widest focus:outline-none focus:border-thunder-gold rounded transition-colors uppercase">
                    <option>General Inquiry</option>
                    <option>Ticketing</option>
                    <option>Official Store</option>
                    <option>Press & Media</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-barlow text-ash-grey tracking-widest uppercase text-sm mb-2">MESSAGE</label>
                  <textarea rows="5" className="w-full bg-black-soft border border-ash-grey/30 text-lightning-white px-4 py-3 font-barlow tracking-widest focus:outline-none focus:border-thunder-gold rounded transition-colors resize-none" placeholder="HOW CAN WE HELP YOU?" required></textarea>
                </div>
                
                <button type="submit" className="mt-4 bg-thunder-gold text-storm-black font-oswald font-bold py-4 uppercase tracking-widest hover:bg-yellow-500 rounded transition-colors box-glow-gold w-full text-lg">
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}