import { Navigation } from "@/components/Navigation";
import { Mail, Phone } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#0a1f2e] pt-32 pb-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-[1px] eyebrow-line" />
              <span className="text-eyebrow">
                OM OS
              </span>
              <div className="w-16 h-[1px] eyebrow-line" />
            </div>
            <h1 className="font-serif-display text-white text-4xl md:text-5xl leading-[1.2] mb-8">
              Mød Sendivo teamet
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              Vi er to partnere med en fælles vision om at styrke sportsklubbernes kommunikation og skabe værdi for alle parter.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#0a1f2e] py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 mb-4">
            {/* Daniel */}
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#E3B343]/30">
                <ImageWithFallback
                  src="/Daniel.JPG"
                  alt="Daniel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif-display text-white text-2xl">Daniel L.</h3>
              <p className="text-eyebrow-subtle text-lg">CEO</p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-eyebrow" />
                  <a href="mailto:Daniel@sendivo.dk" className="hover:text-[#E3B343] transition-colors">
                    Daniel@sendivo.dk
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-eyebrow" />
                  <a href="tel:+4522659202" className="hover:text-[#E3B343] transition-colors">
                    +45 22 65 92 02
                  </a>
                </div>
              </div>
            </div>

            {/* Emir */}
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#E3B343]/30">
                <ImageWithFallback
                  src="/Emir.PNG"
                  alt="Emir"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif-display text-white text-2xl">Emir D.</h3>
              <p className="text-eyebrow-subtle text-lg">CMO</p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4 text-eyebrow" />
                  <a href="mailto:Emir@sendivo.dk" className="hover:text-[#E3B343] transition-colors">
                    Emir@sendivo.dk
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-eyebrow" />
                  <a href="tel:+4531831887" className="hover:text-[#E3B343] transition-colors">
                    +45 31 83 18 87
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#0a1f2e] py-4 md:py-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-serif-display text-white text-3xl md:text-4xl leading-[1.2] mb-8">
            Vores mission
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Sendivo blev grundlagt med en klar vision:
            at styrke forbindelsen mellem sportsklubber og deres medlemmer gennem enkel og professionel kommunikation.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            Vi tror på, at stærk kommunikation skaber stærkere fællesskaber — og at klubber skal have tid til det, der virkelig betyder noget: menneskerne bag sporten.
            Derfor gør vi det nemt for klubber at dele nyheder, skabe engagement og holde kontakten, uden at det kræver ekstra arbejde.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            Med Sendivo får klubber et værktøj, der forbinder medlemmer, frivillige og sponsorer — og samtidig giver virksomheder en naturlig måde at støtte det lokale fællesskab på.
          </p>
        </div>
      </section>

    </div>
  );
}
