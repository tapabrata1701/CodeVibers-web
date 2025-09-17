import { useState } from 'react';
import { Button } from "../components/ui/button";
import { 
  BarChart3, 
  FileText, 
  MapPin, 
  AlertTriangle, 
  Settings, 
  BookOpen,
  Menu,
  X
} from "lucide-react";

export function Navigation({ activeTab, onTabChange }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'data-collection', label: 'Data Collection', icon: FileText },
    { id: 'alerts', label: 'Alerts & Monitoring', icon: AlertTriangle },
    { id: 'maps', label: 'Disease Maps', icon: MapPin },
    { id: 'education', label: 'Health Education', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden bg-white border-b px-4 py-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="ml-2">Menu</span>
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <nav className="hidden lg:block w-64 bg-white border-r h-screen sticky top-0">
        <div className="p-6">
          <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    activeTab === item.id ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => onTabChange(item.id)}
                >
                  <Icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="fixed top-0 left-0 w-64 h-full bg-white z-50 lg:hidden shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Navigation</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        activeTab === item.id ? "bg-primary text-white" : ""
                      }`}
                      onClick={() => {
                        onTabChange(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
