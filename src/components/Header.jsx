import { Button } from "@/components/ui/button";
import { Activity, Droplets, Shield, AlertTriangle } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b bg-card border-border">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                HealthGuard NE
              </h1>
              <p className="text-sm text-muted-foreground">
                Smart Health Surveillance System
              </p>
            </div>
          </div>

          <nav className="items-center hidden space-x-6 md:flex">
            <a
              href="#dashboard"
              className="transition-colors text-foreground hover:text-primary">
              Dashboard
            </a>
            <a
              href="#monitoring"
              className="transition-colors text-foreground hover:text-primary">
              Water Monitoring
            </a>
            <a
              href="#alerts"
              className="transition-colors text-foreground hover:text-primary">
              Alerts
            </a>
            <a
              href="#reports"
              className="transition-colors text-foreground hover:text-primary">
              Reports
            </a>
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
