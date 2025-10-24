import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { HeadingObserver } from "@/components/HeadingObserver";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/om-os" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/privatlivspolitik" element={<LegalPage />} />
        <Route path="/vilkår-og-betingelser" element={<LegalPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <HeadingObserver />
      {location.pathname === "/" && <ScrollIndicator />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
