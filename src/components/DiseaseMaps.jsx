import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Layers, 
  Filter,
  Download,
  Maximize,
  TrendingUp,
  Users,
  Droplets,
  AlertTriangle
} from "lucide-react";

export function DiseaseMaps() {
  // Mock data for disease hotspots
  const diseaseData = [
    { district: "Dimapur", cases: 15, severity: "high", coordinates: [93.73, 25.91] },
    { district: "Kohima", cases: 5, severity: "low", coordinates: [94.11, 25.67] },
    { district: "Imphal West", cases: 8, severity: "medium", coordinates: [93.95, 24.82] },
    { district: "Guwahati", cases: 12, severity: "medium", coordinates: [91.75, 26.14] },
    { district: "Aizawl", cases: 3, severity: "low", coordinates: [92.72, 23.73] },
    { district: "Shillong", cases: 7, severity: "medium", coordinates: [91.88, 25.57] }
  ];

  const waterQualityData = [
    { location: "Dimapur Central", quality: "poor", status: "contaminated" },
    { location: "Kohima Hills", quality: "good", status: "clean" },
    { location: "Imphal River", quality: "fair", status: "moderate" },
    { location: "Guwahati East", quality: "good", status: "clean" },
    { location: "Aizawl Valley", quality: "good", status: "clean" }
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Disease & Water Quality Maps</h2>
          <p className="text-muted-foreground">
            Geospatial visualization of health data and disease hotspots across Northeast India
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Layers className="h-4 w-4 mr-2" />
            Layers
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Display Area */}
        <div className="lg:col-span-2">
          <Card className="h-[600px]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Northeast India Health Map
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="h-full p-0">
              {/* Mock Map Interface */}
              <div className="relative h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden">
                {/* Map Controls */}
                <div className="absolute top-4 left-4 z-10 space-y-2">
                  <Button variant="outline" size="sm" className="bg-white/90">
                    <TrendingUp className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/90">
                    <Droplets className="h-4 w-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute top-4 right-4 z-10 bg-white/90 rounded-lg p-3 space-y-2 text-xs">
                  <div className="font-semibold">Disease Severity</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-health-critical rounded-full"></div>
                <span>High Risk (&gt;10 cases)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-health-warning rounded-full"></div>
                <span>Medium Risk (5-10 cases)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-health-safe rounded-full"></div>
                <span>Low Risk (&lt;5 cases)</span>
              </div>
                </div>

                {/* Mock Map Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl opacity-20">🗺️</div>
                    <div className="text-lg font-semibold text-muted-foreground">
                      Interactive Disease Mapping
                    </div>
                    <p className="text-sm text-muted-foreground max-w-md">
                      This would display an interactive map showing disease hotspots, water quality data, 
                      and real-time health monitoring across all Northeast Indian states.
                    </p>
                  </div>
                </div>

                {/* Mock Disease Markers */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-health-critical rounded-full animate-pulse flex items-center justify-center text-white text-xs font-bold">
                    15
                  </div>
                  <div className="text-xs text-center mt-1 bg-white/80 rounded px-1">Dimapur</div>
                </div>

                <div className="absolute top-1/2 left-1/3">
                  <div className="w-6 h-6 bg-health-safe rounded-full flex items-center justify-center text-white text-xs font-bold">
                    5
                  </div>
                  <div className="text-xs text-center mt-1 bg-white/80 rounded px-1">Kohima</div>
                </div>

                <div className="absolute bottom-1/3 right-1/3">
                  <div className="w-7 h-7 bg-health-warning rounded-full flex items-center justify-center text-white text-xs font-bold">
                    8
                  </div>
                  <div className="text-xs text-center mt-1 bg-white/80 rounded px-1">Imphal</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Disease Hotspots */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Current Disease Hotspots</CardTitle>
              <CardDescription>Districts with elevated risk levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {diseaseData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded border">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      item.severity === "high" ? "bg-health-critical" :
                      item.severity === "medium" ? "bg-health-warning" :
                      "bg-health-safe"
                    }`} />
                    <div>
                      <div className="font-medium text-sm">{item.district}</div>
                      <div className="text-xs text-muted-foreground">{item.cases} cases</div>
                    </div>
                  </div>
                  <Badge 
                    variant={
                      item.severity === "high" ? "destructive" :
                      item.severity === "medium" ? "outline" :
                      "secondary"
                    }
                    className="text-xs"
                  >
                    {item.severity}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Water Quality Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Water Quality Status</CardTitle>
              <CardDescription>Latest monitoring results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {waterQualityData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded border">
                  <div className="flex items-center gap-3">
                    <Droplets className={`h-4 w-4 ${
                      item.status === "clean" ? "text-water-clean" :
                      item.status === "contaminated" ? "text-water-contaminated" :
                      "text-water-moderate"
                    }`} />
                    <div>
                      <div className="font-medium text-sm">{item.location}</div>
                      <div className="text-xs text-muted-foreground">Quality: {item.quality}</div>
                    </div>
                  </div>
                  <Badge 
                    variant={
                      item.status === "clean" ? "secondary" :
                      item.status === "contaminated" ? "destructive" :
                      "outline"
                    }
                    className="text-xs"
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Map Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Map Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Total Districts</span>
                <span className="font-semibold">8</span>
              </div>
              <div className="flex justify-between">
                <span>High Risk Areas</span>
                <span className="font-semibold text-health-critical">1</span>
              </div>
              <div className="flex justify-between">
                <span>Medium Risk Areas</span>
                <span className="font-semibold text-health-warning">3</span>
              </div>
              <div className="flex justify-between">
                <span>Low Risk Areas</span>
                <span className="font-semibold text-health-safe">4</span>
              </div>
              <div className="flex justify-between">
                <span>Water Sources Monitored</span>
                <span className="font-semibold">47</span>
              </div>
              <div className="flex justify-between">
                <span>Last Updated</span>
                <span className="font-semibold">5 min ago</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Report New Hotspot
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Deploy Response Team
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Download className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}