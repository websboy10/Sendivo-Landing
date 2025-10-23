import { Navigation } from "@/components/Navigation";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useState } from "react";

export function ContactPage() {
  const { isSubmitting, submitStatus, errorMessage, submitClubForm, submitBusinessForm, resetStatus } = useFormSubmission();
  const [clubFormData, setClubFormData] = useState({
    club_name: '',
    contact_person: '',
    email: '',
    phone: '',
    message: ''
  });
  const [businessFormData, setBusinessFormData] = useState({
    company_name: '',
    contact_person: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleClubSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitClubForm(clubFormData);
    if (result.success) {
      setClubFormData({ club_name: '', contact_person: '', email: '', phone: '', message: '' });
    }
  };

  const handleBusinessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitBusinessForm(businessFormData);
    if (result.success) {
      setBusinessFormData({ company_name: '', contact_person: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="top" className="bg-[#0a1f2e] pt-24 md:pt-32 pb-4 md:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-6 md:mb-8">
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="w-12 md:w-16 h-[1px] eyebrow-line" />
              <span className="text-eyebrow text-xs md:text-sm">
                KONTAKT
              </span>
              <div className="w-12 md:w-16 h-[1px] eyebrow-line" />
            </div>
            <h1 className="font-serif-display text-white text-3xl sm:text-4xl md:text-5xl leading-[1.2] mb-6 md:mb-8 px-4">
              Lad os høre fra jer
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-4">
              Uanset om I er en virksomhed der ønsker at nå aktive danskere, eller en sportsklub der vil forbedre jeres kommunikation – vi er her for at hjælpe.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="bg-[#0a1f2e] py-4 md:py-6 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Club Contact Form - Now on the left */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <div className="mb-6 md:mb-8">
                <h2 className="font-serif-display text-white text-xl md:text-2xl mb-3 md:mb-4">For Klubber</h2>
                <p className="text-gray-400 text-sm md:text-base">
                  Vil I forbedre jeres kommunikation med medlemmerne? 
                  Vi hjælper jer med professionelle nyhedsbreve.
                </p>
              </div>
              
              <form onSubmit={handleClubSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm mb-2">Klubnavn *</label>
                  <input 
                    type="text" 
                    value={clubFormData.club_name}
                    onChange={(e) => setClubFormData({...clubFormData, club_name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E3B343]/50 transition-colors"
                    placeholder="Indtast klubnavn"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Kontaktperson *</label>
                  <input 
                    type="text" 
                    value={clubFormData.contact_person}
                    onChange={(e) => setClubFormData({...clubFormData, contact_person: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E3B343]/50 transition-colors"
                    placeholder="Fulde navn"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Email *</label>
                  <input 
                    type="email" 
                    value={clubFormData.email}
                    onChange={(e) => setClubFormData({...clubFormData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E3B343]/50 transition-colors"
                    placeholder="kontakt@klub.dk"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    value={clubFormData.phone}
                    onChange={(e) => setClubFormData({...clubFormData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E3B343]/50 transition-colors"
                    placeholder="+45 12 34 56 78"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Besked *</label>
                  <textarea 
                    rows={4}
                    value={clubFormData.message}
                    onChange={(e) => setClubFormData({...clubFormData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E3B343]/50 transition-colors resize-none"
                    placeholder="Fortæl os om jeres klub og kommunikationsbehov..."
                    required
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="text-green-400 text-sm text-center">
                    Tak for din henvendelse! Vi vender tilbage til dig snart.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-400 text-sm text-center">
                    {errorMessage}
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="sendivo-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="tracking-wide">
                    {isSubmitting ? 'Sender...' : 'Kontakt os'}
                  </span>
                </button>
              </form>
            </div>

            {/* Business Contact Form - Now on the right */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="mb-8">
                <h2 className="font-serif-display text-white text-2xl mb-4">For Virksomheder</h2>
                <p className="text-gray-400">
                  Ønsker I at nå aktive danskere gennem vores sportsklub-netværk? 
                  Udfyld formularen, så vender vi tilbage til jer.
                </p>
              </div>
              
              <form onSubmit={handleBusinessSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm mb-2">Firmanavn *</label>
                  <input 
                    type="text" 
                    value={businessFormData.company_name}
                    onChange={(e) => setBusinessFormData({...businessFormData, company_name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E3B343]/50 transition-colors"
                    placeholder="Indtast firmanavn"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Kontaktperson *</label>
                  <input 
                    type="text" 
                    value={businessFormData.contact_person}
                    onChange={(e) => setBusinessFormData({...businessFormData, contact_person: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E3B343]/50 transition-colors"
                    placeholder="Fulde navn"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Email *</label>
                  <input 
                    type="email" 
                    value={businessFormData.email}
                    onChange={(e) => setBusinessFormData({...businessFormData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E3B343]/50 transition-colors"
                    placeholder="kontakt@firma.dk"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    value={businessFormData.phone}
                    onChange={(e) => setBusinessFormData({...businessFormData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E3B343]/50 transition-colors"
                    placeholder="+45 12 34 56 78"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2">Besked *</label>
                  <textarea 
                    rows={4}
                    value={businessFormData.message}
                    onChange={(e) => setBusinessFormData({...businessFormData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E3B343]/50 transition-colors resize-none"
                    placeholder="Fortæl os om jeres behov og målgruppe..."
                    required
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="text-green-400 text-sm text-center">
                    Tak for din henvendelse! Vi vender tilbage til dig snart.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-400 text-sm text-center">
                    {errorMessage}
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="sendivo-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="tracking-wide">
                    {isSubmitting ? 'Sender...' : 'Send forespørgsel'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
