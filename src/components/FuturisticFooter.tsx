import { motion } from 'motion/react';
import { Mail, MapPin, ArrowUp } from 'lucide-react';

export function FuturisticFooter() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0e27] border-t border-purple-500/20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                    '0 0 30px rgba(236, 72, 153, 0.4)',
                    '0 0 20px rgba(139, 92, 246, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center"
              >
                <span className="text-white">T</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl text-white">Theia Fiber</span>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Real-time fiber intelligence and assurance powered by AI. Predict, Detect, Prevent.
            </p>
          </div>

          {/* Business Cases */}
          <div>
            <h4 className="text-white mb-4">Business Cases</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <motion.button
                  whileHover={{ x: 5, color: '#a855f7' }}
                  onClick={() => scrollToSection('dashboard')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Data Center
                </motion.button>
              </li>
              <li>
                <motion.button
                  whileHover={{ x: 5, color: '#a855f7' }}
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Use Cases
                </motion.button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <motion.a
                  whileHover={{ x: 5, color: '#a855f7' }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors block"
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 5, color: '#a855f7' }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors block"
                >
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 5, color: '#a855f7' }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors block"
                >
                  Terms of Use
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 5, color: '#a855f7' }}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors block"
                >
                  Contact Us
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Theia Inc.</p>
                  <p>5 Brewster Street, Suite #139</p>
                  <p>Glen Cove, NY 11542</p>
                </div>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@theiafiber.io" className="text-gray-400 hover:text-purple-400 transition-colors">
                  info@theiafiber.io
                </a>
              </motion.div>
              <div className="text-gray-400">
                <a href="https://theiafiber.io" className="hover:text-purple-400 transition-colors">
                  theiafiber.io
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Theia Inc. All rights reserved.
          </p>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm shadow-lg shadow-purple-500/30"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
}
