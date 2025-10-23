import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

interface AboutSectionProps {
  reverse?: boolean;
  eyebrow: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function AboutSection({ 
  reverse = false, 
  eyebrow, 
  title, 
  description, 
  imageUrl, 
  imageAlt 
}: AboutSectionProps) {
  return (
    <section className="bg-[#0a1f2e] py-16 md:py-20 lg:py-28" data-index={reverse ? "3" : "1"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-8 ${reverse ? 'md:col-start-1' : ''}`}>
            <div className="flex items-center gap-6">
              <div className="w-16 h-[1px] eyebrow-line" />
              <span className="text-eyebrow">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-serif-display text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2]">
              {title}
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              {description}
            </p>

            <Link 
              to="/kontakt" 
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="sendivo-button group"
            >
              <span className="tracking-wide">{eyebrow === "FOR VIRKSOMHEDER" ? "Bliv partner" : "Kom igang nu"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <div className={`relative ${reverse ? 'md:col-start-2' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <ImageWithFallback
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
