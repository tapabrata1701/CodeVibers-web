import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { Progress } from "./ui/progress.jsx";
import { 
  AlertTriangle, 
  Droplets, 
  Users, 
  MapPin, 
  TrendingUp, 
  Activity,
  Shield,
  Phone,
  Clock
} from "lucide-react";

const mockAlerts = [
  {
    id: 1,
    type: "High Risk",
    location: "Imphal East District",
    cases: 15,
    severity: "critical",
    time: "2 hours ago"
  },
  {
    id: 2,
    type: "Water Quality",
    location: "Kohima Block",
    issue: "High turbidity detected",
    severity: "warning",
    time: "4 hours ago"
  },
  {
    id: 3,
    type: "Outbreak Trend",
    location: "Aizawl Rural",
    cases: 8,
    severity: "moderate",
    time: "6 hours ago"
  }
];

const waterQualityData = [
  { location: "Imphal East", status: "safe", score: 92 },
  { location: "Kohima", status: "warning", score: 67 },
  { location: "Aizawl", status: "safe", score: 88 },
  { location: "Agartala", status: "safe", score: 94 },
  { location: "Itanagar", status: "warning", score: 71 }
];

export const Dashboard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Health Officials Dashboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time monitoring and early warning system for water-borne disease prevention
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">142</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline w-3 h-3 mr-1" />
                +12% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Water Sources</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">1,247</div>
              <p className="text-xs text-muted-foreground">
                <Shield className="inline w-3 h-3 mr-1" />
                94% safe quality
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ASHA Workers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">2,847</div>
              <p className="text-xs text-muted-foreground">
                <Activity className="inline w-3 h-3 mr-1" />
                98% active today
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-destructive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Risk Areas</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">7</div>
              <p className="text-xs text-muted-foreground">
                <MapPin className="inline w-3 h-3 mr-1" />
                Immediate attention required
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-destructive" />
                Critical Alerts
              </CardTitle>
              <CardDescription>
                Real-time notifications requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge 
                        variant={
                          alert.severity === "critical" ? "destructive" : 
                          alert.severity === "warning" ? "secondary" : 
                          "outline"
                        }
                      >
                        {alert.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {alert.time}
                      </span>
                    </div>
                    <div className="font-medium">{alert.location}</div>
                    <div className="text-sm text-muted-foreground">
                      {alert.cases ? `${alert.cases} cases reported` : alert.issue}
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4 mr-1" />
                    Respond
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Water Quality Monitor */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Droplets className="w-5 h-5 mr-2 text-secondary" />
                Water Quality Status
              </CardTitle>
              <CardDescription>
                Real-time monitoring across major districts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {waterQualityData.map((location, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{location.location}</span>
                    <Badge 
                      variant={location.status === "safe" ? "default" : "secondary"}
                      className={location.status === "safe" ? "bg-water-safe" : "bg-water-warning"}
                    >
                      {location.score}% {location.status}
                    </Badge>
                  </div>
                  <Progress value={location.score} className="h-2" />
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">
                View Detailed Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
