import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SystemFeatures } from "@/components/SystemFeatures";
import { Dashboard } from "@/components/Dashboard";
import { ASHAInterface } from "@/components/ASHAInterface";
import { CommunityFeatures } from "@/components/CommunityFeatures";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SystemFeatures />
      <Dashboard />
      <ASHAInterface />
      <CommunityFeatures />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Ministry of Health & Family Welfare
            </h3>
            <p className="text-muted-foreground mb-4">
              In collaboration with Ministry of Jal Shakti & State Health Departments
            </p>
            <p className="text-sm text-muted-foreground">
              Smart India Hackathon 2024 - Healthcare Innovation for Northeast India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
