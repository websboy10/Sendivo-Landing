import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 md:px-8 py-4 flex items-center justify-between border border-white/20">
          {/* Logo */}
          <Link to="/" className="font-serif-display text-lg md:text-xl tracking-wider transition-colors text-white hover:text-amber-500">
            SENDIVO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`transition-colors relative group ${
              location.pathname === "/" 
                ? "nav-active" 
                : "text-white/90 hover:text-white"
            }`}>
              Hjem
              <span className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${
                location.pathname === "/" 
                  ? "nav-active-line" 
                  : "w-0 bg-amber-500 group-hover:w-full"
              }`}></span>
            </Link>
            <Link to="/om-os" className={`transition-colors relative group ${
              location.pathname === "/om-os" 
                ? "nav-active" 
                  : "text-white/90 hover:text-white"
            }`}>
              Om os
              <span className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${
                location.pathname === "/om-os" 
                  ? "nav-active-line" 
                  : "w-0 bg-amber-500 group-hover:w-full"
              }`}></span>
            </Link>
            <Link to="/kontakt">
              <button className={`sendivo-button ${
                location.pathname === "/kontakt" 
                  ? "nav-active-button" 
                  : ""
              }`}>
                <span className="tracking-wide">Kontakt</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
            <div className="flex flex-col p-4 gap-4">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className={`text-white py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === "/" ? "bg-amber-500/20 text-amber-500" : "hover:bg-white/10"
                }`}
              >
                Hjem
              </Link>
              <Link 
                to="/om-os" 
                onClick={() => setIsOpen(false)}
                className={`text-white py-2 px-4 rounded-lg transition-colors ${
                  location.pathname === "/om-os" ? "bg-amber-500/20 text-amber-500" : "hover:bg-white/10"
                }`}
              >
                Om os
              </Link>
              <Link 
                to="/kontakt" 
                onClick={() => setIsOpen(false)}
                className="sendivo-button w-full text-center"
              >
                <span className="tracking-wide">Kontakt</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
