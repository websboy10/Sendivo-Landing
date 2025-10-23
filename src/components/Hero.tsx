import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-index="0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/Padel-hero-bg.jpg"
          alt="Padel player with Bullpadel racket on court"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center pt-24">
        <div className="inline-block mb-6 relative">
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-[1px] eyebrow-line hidden sm:block" />
          <p className="text-eyebrow">
            FREMTIDEN FOR KLUBKOMMUNIKATION
          </p>
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-[1px] eyebrow-line hidden sm:block" />
        </div>
        
        <h1 className="font-serif-display text-white mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.2] px-4">
          Fra klub til fællesskab<br className="hidden sm:block" />
          <span className="sm:inline"> </span>kommunikation der forbinder
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/kontakt" 
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
            className="sendivo-button text-lg"
          >
            <span className="tracking-wide">Kontakt</span>
          </Link>
          
          <Link 
            to="/om-os" 
            className="sendivo-button text-lg"
          >
            <span className="tracking-wide">Om os</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

