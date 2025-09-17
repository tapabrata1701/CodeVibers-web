import { Bell, Shield, Users, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {/* Top Section - Ministry Info */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8" />
              <div>
                <h1 className="text-xl lg:text-2xl font-bold">Smart Health Surveillance System</h1>
                <p className="text-sm opacity-90">Ministry of Development of North Eastern Region</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSelector className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <Button variant="secondary" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-health-critical text-white text-xs">
                3
              </Badge>
            </Button>
          </div>
        </div>

        {/* Bottom Section - Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
            <Users className="h-6 w-6" />
            <div>
              <div className="text-sm opacity-75">Active Monitors</div>
              <div className="text-lg font-semibold">1,247</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
            <AlertTriangle className="h-6 w-6" />
            <div>
              <div className="text-sm opacity-75">Active Alerts</div>
              <div className="text-lg font-semibold">12</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
            <Shield className="h-6 w-6" />
            <div>
              <div className="text-sm opacity-75">Health Score</div>
              <div className="text-lg font-semibold">87%</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
            <Bell className="h-6 w-6" />
            <div>
              <div className="text-sm opacity-75">Water Quality</div>
              <div className="text-lg font-semibold">Good</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}