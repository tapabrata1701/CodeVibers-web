import { Button } from "@/components/ui/button";
import { Activity, Droplets, AlertTriangle } from "lucide-react";
import ICON from "@/assets/ICON.svg";

export const Header = () => {
  return (
    <header className="border-b bg-card border-border">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Logo + Title */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12">
  <img src={ICON} alt="Logo" className="w-30 h-30" />
</div>

            <div>
              <h1 className="text-xl font-bold text-foreground">
                NIVRA
              </h1>
              <p className="text-sm text-muted-foreground">
                Smart Health Surveillance System
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="items-center hidden space-x-6 md:flex">
            <a href="#dashboard" className="transition-colors text-foreground hover:text-primary">
              Dashboard
            </a>
            <a href="#monitoring" className="transition-colors text-foreground hover:text-primary">
              Water Monitoring
            </a>
            <a href="#alerts" className="transition-colors text-foreground hover:text-primary">
              Alerts
            </a>
            <a href="#reports" className="transition-colors text-foreground hover:text-primary">
              Reports
            </a>
          </nav>

          {/* Right Buttons */}
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
