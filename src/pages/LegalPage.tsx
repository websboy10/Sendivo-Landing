import { Navigation } from "@/components/Navigation";
import { useLocation } from "react-router-dom";

export function LegalPage() {
  const location = useLocation();
  const isPrivacy = location.pathname === "/privatlivspolitik";
  const isTerms = location.pathname === "/vilkår-og-betingelser";

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#0a1f2e] pt-32 pb-8">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-[1px] eyebrow-line" />
              <span className="text-eyebrow">
                {isPrivacy ? "PRIVATLIVSPOLITIK" : "VILKÅR & BETINGELSER"}
              </span>
              <div className="w-16 h-[1px] eyebrow-line" />
            </div>
            <h1 className="font-serif-display text-white text-4xl md:text-5xl leading-[1.2] mb-8">
              {isPrivacy ? "Privatlivspolitik" : "Vilkår og betingelser"}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              {isPrivacy 
                ? "Vi beskytter dit privatliv og håndterer dine personlige oplysninger med største omhu."
                : "Læs vores vilkår og betingelser for brug af Sendivo's tjenester."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#0a1f2e] py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="prose prose-invert max-w-none">
            {isPrivacy ? (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <p className="text-gray-500 text-sm">
                    Sidst opdateret: {new Date().toLocaleDateString('da-DK')}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Hos Sendivo tager vi beskyttelsen af dine personoplysninger alvorligt. Denne privatlivspolitik forklarer, 
                    hvordan vi indsamler, bruger og beskytter dine oplysninger, når du bruger vores hjemmeside eller tjenester.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">1. Hvilke oplysninger vi indsamler</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Vi indsamler kun de oplysninger, der er nødvendige for at levere vores tjenester effektivt:
                  </p>
                  <ul className="text-gray-400 leading-relaxed space-y-2 ml-4">
                    <li>• Navn, e-mailadresse og telefonnummer (når du kontakter os eller tilmelder dig vores nyhedsbrev)</li>
                    <li>• Klubbens eller virksomhedens navn og relevante kontaktdata</li>
                    <li>• Teknisk information som IP-adresse, browser-type og besøgstidspunkt (til forbedring af hjemmesiden)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">2. Hvordan vi bruger dine oplysninger</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Vi bruger dine oplysninger til:
                  </p>
                  <ul className="text-gray-400 leading-relaxed space-y-2 ml-4">
                    <li>• At kommunikere med dig og besvare henvendelser</li>
                    <li>• At sende relevante opdateringer og nyhedsbreve (kun med dit samtykke)</li>
                    <li>• At forbedre vores hjemmeside og tjenester</li>
                    <li>• At opfylde lovmæssige forpligtelser</li>
                  </ul>
                  <p className="text-gray-400 leading-relaxed mt-4">
                    Vi deler aldrig dine oplysninger med tredjeparter uden dit samtykke, medmindre det er nødvendigt 
                    for at levere en service (f.eks. e-mailudbyder) eller overholde lovgivningen.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">3. Opbevaring og sikkerhed</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Dine oplysninger opbevares sikkert og kun så længe, det er nødvendigt for det formål, 
                    de blev indsamlet til. Vi bruger moderne sikkerhedsteknologier og adgangskontrol for 
                    at beskytte mod uautoriseret adgang eller misbrug.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">4. GDPR og dine rettigheder</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Som bruger i EU har du rettigheder under GDPR (General Data Protection Regulation), herunder:
                  </p>
                  <ul className="text-gray-400 leading-relaxed space-y-2 ml-4">
                    <li>• Ret til indsigt: Du kan få en kopi af de oplysninger, vi har om dig</li>
                    <li>• Ret til rettelse: Du kan få rettet forkerte oplysninger</li>
                    <li>• Ret til sletning ("retten til at blive glemt")</li>
                    <li>• Ret til begrænsning af behandling</li>
                    <li>• Ret til dataportabilitet</li>
                    <li>• Ret til at trække samtykke tilbage</li>
                  </ul>
                  <p className="text-gray-400 leading-relaxed mt-4">
                    Hvis du ønsker at udøve dine rettigheder, kan du kontakte os på:
                    <br />
                    <a href="mailto:info@sendivo.dk" className="text-[#E3B343] hover:text-[#CFA43A] transition-colors">
                      📧 info@sendivo.dk
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">5. Ændringer i privatlivspolitikken</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Vi kan opdatere denne politik fra tid til anden for at afspejle ændringer i vores praksis 
                    eller lovgivning. Den seneste version vil altid være tilgængelig på vores hjemmeside.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">Kontakt</h2>
                  <div className="text-gray-400 leading-relaxed space-y-2">
                    <p>Sendivo ApS</p>
                    <p>📍 Danmark</p>
                    <p>
                      <a href="mailto:info@sendivo.dk" className="text-[#E3B343] hover:text-[#CFA43A] transition-colors">
                        📧 info@sendivo.dk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <p className="text-gray-500 text-sm">
                    Sidst opdateret: {new Date().toLocaleDateString('da-DK')}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Disse vilkår og betingelser beskriver retningslinjerne for brugen af Sendivo's hjemmeside og tjenester. 
                    Ved at besøge eller bruge vores side accepterer du disse vilkår.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">1. Generelle vilkår</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Ved at bruge Sendivo's platform accepterer du, at du er ansvarlig for at give korrekte oplysninger 
                    og overholde gældende love. Sendivo forbeholder sig retten til at ændre eller afbryde dele af 
                    tjenesten uden forudgående varsel.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">2. Brug af vores hjemmeside</h2>
                  <ul className="text-gray-400 leading-relaxed space-y-2 ml-4">
                    <li>• Du må ikke kopiere, distribuere eller ændre indhold fra vores hjemmeside uden tilladelse.</li>
                    <li>• Du må ikke bruge Sendivo's tjenester til ulovlige formål eller forsøg på at forstyrre driften.</li>
                    <li>• Al brug sker på eget ansvar.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">3. Intellektuelle rettigheder</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Alt indhold på hjemmesiden – herunder logo, tekst, billeder, design og software – tilhører Sendivo 
                    og er beskyttet af ophavsret. Uautoriseret brug kan medføre juridiske konsekvenser.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">4. Ansvarsfraskrivelse</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Sendivo kan ikke garantere, at tjenesten altid vil være fejlfri eller tilgængelig uden afbrydelser. 
                    Vi påtager os ikke ansvar for tab, der opstår som følge af brugen af vores platform eller indhold.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">5. Links til tredjeparter</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Vores hjemmeside kan indeholde links til eksterne sider. Vi er ikke ansvarlige for indholdet eller 
                    sikkerheden på disse sider og anbefaler, at du læser deres egne politikker.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">6. Ændringer i vilkår</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Sendivo kan til enhver tid opdatere disse vilkår. Ændringer træder i kraft, når de offentliggøres 
                    på hjemmesiden.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif-display text-white text-2xl mb-4">7. Kontakt os</h2>
                  <p className="text-gray-400 leading-relaxed">
                    For spørgsmål vedrørende disse vilkår:
                    <br />
                    <a href="mailto:info@sendivo.dk" className="text-[#E3B343] hover:text-[#CFA43A] transition-colors">
                      📧 info@sendivo.dk
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
