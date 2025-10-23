import { Mail, Target, BarChart3, Clock, Star, Users } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Professionel nyhedsbrevsdrift",
    description: "Vi planlægger, designer og sender jeres nyhedsbreve — så I altid fremstår engagerede og organiserede.",
  },
  {
    icon: Target,
    title: "Målrettet annoncering",
    description: "Vi forbinder klubber med relevante virksomheder, så jeres kommunikation også skaber økonomisk værdi.",
  },
  {
    icon: BarChart3,
    title: "Rapportering og indsigt",
    description: "Få enkel indsigt i, hvordan jeres kommunikation performer — uden teknisk besvær.",
  },
  {
    icon: Clock,
    title: "Flere medlemmer, mindre administration",
    description: "Vi automatiserer kommunikationen, så I kan fokusere på sporten og fællesskabet.",
  },
  {
    icon: Star,
    title: "Stærkere klubbranding",
    description: "Hver udsendelse styrker klubbens identitet og viser professionalisme udadtil.",
  },
  {
    icon: Users,
    title: "Partnerskaber med værdi",
    description: "Vi hjælper jer med at skabe varige relationer mellem klub, medlemmer og sponsorer.",
  }
];

export function Features() {
  return (
    <section className="bg-[#0a1f2e] py-16 md:py-20 lg:py-28" data-index="2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-[1px] eyebrow-line" />
            <span className="text-eyebrow">
              DERFOR SENDIVO
            </span>
            <div className="w-16 h-[1px] eyebrow-line" />
          </div>
          <h2 className="font-serif-display text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] mb-4 md:mb-6">
            Derfor vælger klubber Sendivo.
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-4">
            Vi kombinerer professionel kommunikation med fællesskab og smarte løsninger, der sparer tid og skaber værdi.
          </p>
        </div>

        {/* Features Grid - 3x2 layout */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border hover:transform hover:-translate-y-1 hover:bg-white/[0.07]">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 md:mb-6">
                  <Icon className="feature-icon w-6 h-6 md:w-7 md:h-7 text-amber-500" />
                </div>
                <h3 className="font-serif-display text-white text-xl md:text-2xl mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
