import { Mail, MapPin } from 'lucide-react';

export function DarkFooter() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0e27] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <span className="text-white">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl text-white">Theia Fiber</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Real-time fiber intelligence and assurance powered by AI. Predict, Detect, Prevent.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Business Cases</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('use-cases')} className="text-gray-400 hover:text-white transition-colors">
                  Data Center
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('use-cases')} className="text-gray-400 hover:text-white transition-colors">
                  Use Cases
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

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
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a href="mailto:info@theiafiber.io" className="text-gray-400 hover:text-white transition-colors">
                  info@theiafiber.io
                </a>
              </div>
              <div className="text-gray-400">
                <a href="https://theiafiber.io" className="hover:text-white transition-colors">
                  theiafiber.io
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400 text-center">
            © 2025 Theia Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
