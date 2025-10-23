import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0a1f2e] border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 md:py-32">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-32 items-start justify-items-center mx-auto">
          {/* Brand Section */}
          <div className="text-left">
            <h3 className="font-serif-display text-white text-3xl mb-8">SENDIVO</h3>
            
            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-[#E3B343] hover:text-[#E3B343] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-[#E3B343] hover:text-[#E3B343] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-[#E3B343] hover:text-[#E3B343] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-left">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-6">Navigation</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-[#B7BDC6] hover:text-[#E3B343] transition-colors text-sm leading-relaxed">
                  Hjem
                </Link>
              </li>
              <li>
                <Link to="/om-os" className="text-[#B7BDC6] hover:text-[#E3B343] transition-colors text-sm leading-relaxed">
                  Om os
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-[#B7BDC6] hover:text-[#E3B343] transition-colors text-sm leading-relaxed">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-left">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-6">Kontakt os</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3 text-[#B7BDC6] group">
                <Mail className="w-5 h-5 text-[#E3B343] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#B7BDC6]/60 mb-1">Email</p>
                  <a href="mailto:info@sendivo.dk" className="hover:text-[#E3B343] transition-colors text-sm leading-relaxed">
                    info@sendivo.dk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-[#B7BDC6] group">
                <Phone className="w-5 h-5 text-[#E3B343] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#B7BDC6]/60 mb-1">Telefon</p>
                  <a href="tel:+4531831887" className="hover:text-[#E3B343] transition-colors text-sm leading-relaxed">
                    +45 31 83 18 87
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-[#B7BDC6]">
                <MapPin className="w-5 h-5 text-[#E3B343] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#B7BDC6]/60 mb-1">Lokation</p>
                  <p className="text-sm leading-relaxed">Danmark</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-20 border-t border-white/8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <p className="text-[#B7BDC6] text-sm">
              © {new Date().getFullYear()} Sendivo. Alle rettigheder forbeholdes.
            </p>
            <div className="flex gap-8 text-sm">
              <Link 
                to="/privatlivspolitik" 
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="text-[#B7BDC6] hover:text-[#E3B343] transition-colors"
              >
                Privatlivspolitik
              </Link>
              <Link 
                to="/vilkår-og-betingelser" 
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="text-[#B7BDC6] hover:text-[#E3B343] transition-colors"
              >
                Vilkår & betingelser
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

