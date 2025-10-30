import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Process />
      <Integrations />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
