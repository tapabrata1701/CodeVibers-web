import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Droplets, Users, Shield, MapPin, Smartphone } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Ministry of Health & Family Welfare</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Smart Health Surveillance for <span className="text-primary">Northeast India</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI-powered early warning system for water-borne diseases. Protecting communities through intelligent monitoring, real-time alerts, and proactive healthcare intervention.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                <Activity className="w-5 h-5 mr-2" />
                View Dashboard
              </Button>
              <Button variant="outline" size="lg">
                <Smartphone className="w-5 h-5 mr-2" />
                Mobile App
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Villages Monitored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Early Detection Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-1 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <img 
                src={heroImage} 
                alt="Healthcare monitoring dashboard"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </Card>
            
            {/* Floating stat cards */}
            <Card className="absolute -top-6 -left-6 p-4 bg-card shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-water-safe/20 rounded-full flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-water-safe" />
                </div>
                <div>
                  <div className="text-sm font-medium">Water Quality</div>
                  <div className="text-xs text-muted-foreground">98% Safe</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-6 -right-6 p-4 bg-card shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Active Monitors</div>
                  <div className="text-xs text-muted-foreground">2,847 ASHA Workers</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};