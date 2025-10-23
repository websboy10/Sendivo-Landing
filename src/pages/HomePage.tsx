import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AboutSection } from "@/components/AboutSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a1f2e]">
      <Navigation />
      <Hero />
      
      <AboutSection 
        eyebrow="FOR SPORTSKLUBBER"
        title="Gør kommunikationen nemmere for hele klubben."
        description="Vi hjælper jeres klub med at skabe professionel og konsekvent kommunikation, uden at I skal bruge ekstra tid.
Samtidig åbner vi nye muligheder for samarbejde og støtte fra lokale virksomheder."
        imageUrl="/For sportsklubber.jpg"
        imageAlt="For sportsklubber"
      />

      <Features />

      <AboutSection 
        reverse
        eyebrow="FOR VIRKSOMHEDER"
        title="Samarbejd med klubber — og nå ud til engagerede danskere."
        description="Sendivo giver jer adgang til et netværk af sportsklubber, hvor jeres brand bliver en naturlig del af fællesskabet.
Støt lokale klubber og skab synlighed blandt aktive og loyale medlemmer."
        imageUrl="/For virksomheder.jpg"
        imageAlt="For virksomheder"
      />

    </div>
  );
};

export default HomePage;

