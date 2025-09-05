import Header from "@/components/layout/Header";
import HeroSection from "@/components/hero/HeroSection";
import FeatureCards from "@/components/features/FeatureCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
      </main>
    </div>
  );
};

export default Index;
