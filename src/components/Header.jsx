import { Button } from "@/components/ui/button";
import { Activity, Droplets, Shield, AlertTriangle } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HealthGuard NE</h1>
              <p className="text-sm text-muted-foreground">Smart Health Surveillance System</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">Dashboard</a>
            <a href="#monitoring" className="text-foreground hover:text-primary transition-colors">Water Monitoring</a>
            <a href="#alerts" className="text-foreground hover:text-primary transition-colors">Alerts</a>
            <a href="#reports" className="text-foreground hover:text-primary transition-colors">Reports</a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              ASHA Worker
            </Button>
            <Button variant="default" size="sm">
              Health Official
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};