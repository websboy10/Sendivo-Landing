import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 flex items-center justify-between border border-white/20">
          {/* Logo */}
          <Link to="/" className="font-serif-display text-xl tracking-wider transition-colors text-white hover:text-amber-500">
            SENDIVO
          </Link>

          {/* Navigation Links */}
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
        </div>
      </div>
    </nav>
  );
}
