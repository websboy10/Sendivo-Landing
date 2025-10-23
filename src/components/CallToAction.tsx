import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="bg-[#0a1f2e] py-24 md:py-32 border-t border-white/5" data-index="4">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-[1px] eyebrow-line" />
            <span className="text-eyebrow">
              KONTAKT OS
            </span>
            <div className="w-16 h-[1px] eyebrow-line" />
          </div>
          <h2 className="font-serif-display text-white text-4xl md:text-5xl leading-[1.2] mb-8">
            Klar til at komme i gang?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Lad os tage en uforpligtende snak om, hvordan Sendivo kan hjælpe jeres klub med bedre kommunikation.
          </p>
          
          <Link to="/kontakt">
            <button className="sendivo-button text-lg group">
              <span className="tracking-wide">Kontakt os i dag</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
