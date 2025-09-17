import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Droplets, 
  TrendingUp, 
  Users, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  Activity,
  Thermometer
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Alert Banner */}
      <div className="bg-health-warning/10 border border-health-warning/20 rounded-lg p-4 flex items-center gap-3">
        <AlertTriangle className="h-5 w-5 text-health-warning" />
        <div className="flex-1">
          <h3 className="font-semibold text-health-warning">Moderate Risk Alert - Dimapur District</h3>
          <p className="text-sm text-muted-foreground">Increased diarrhea cases (15 reported) + water turbidity above normal. Monitoring closely.</p>
        </div>
        <Badge variant="outline" className="border-health-warning text-health-warning">
          <Clock className="h-3 w-3 mr-1" />
          2h ago
        </Badge>
      </div>

      {/* Main Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disease Cases Today</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-health-critical">+12%</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Water Quality Score</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2/10</div>
            <Progress value={82} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-health-safe">+2%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Monitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              ASHA workers, volunteers & doctors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2h</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-health-safe">-15%</span> avg response time
            </p>
          </CardContent>
        </Card>
      </div>

      {/* District Status & Water Quality */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              District Health Status
            </CardTitle>
            <CardDescription>
              Real-time disease monitoring across NE districts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { district: "Kohima", cases: 5, status: "safe", trend: "stable" },
              { district: "Dimapur", cases: 15, status: "warning", trend: "increasing" },
              { district: "Imphal West", cases: 3, status: "safe", trend: "decreasing" },
              { district: "Guwahati", cases: 8, status: "moderate", trend: "stable" },
              { district: "Aizawl", cases: 2, status: "safe", trend: "stable" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  {item.status === "safe" && <CheckCircle className="h-4 w-4 text-health-safe" />}
                  {item.status === "warning" && <AlertTriangle className="h-4 w-4 text-health-warning" />}
                  {item.status === "moderate" && <Clock className="h-4 w-4 text-health-info" />}
                  <div>
                    <div className="font-medium">{item.district}</div>
                    <div className="text-sm text-muted-foreground">{item.cases} cases reported</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={item.status === "safe" ? "secondary" : item.status === "warning" ? "destructive" : "outline"}
                  >
                    {item.status}
                  </Badge>
                  <TrendingUp className={`h-3 w-3 ${
                    item.trend === "increasing" ? "text-health-critical" : 
                    item.trend === "decreasing" ? "text-health-safe" : "text-muted-foreground"
                  }`} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="h-5 w-5" />
              Water Quality Monitoring
            </CardTitle>
            <CardDescription>
              Latest readings from IoT sensors & manual testing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { location: "Dimapur Central", ph: 7.2, turbidity: "High", status: "contaminated", lastUpdate: "30 min ago" },
              { location: "Kohima Hills", ph: 6.8, turbidity: "Low", status: "clean", lastUpdate: "1h ago" },
              { location: "Imphal River", ph: 7.5, turbidity: "Medium", status: "moderate", lastUpdate: "45 min ago" },
              { location: "Guwahati East", ph: 7.0, turbidity: "Low", status: "clean", lastUpdate: "2h ago" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    item.status === "clean" ? "bg-water-clean" :
                    item.status === "contaminated" ? "bg-water-contaminated" :
                    "bg-water-moderate"
                  }`} />
                  <div>
                    <div className="font-medium">{item.location}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-4">
                      <span>pH: {item.ph}</span>
                      <span>Turbidity: {item.turbidity}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={
                      item.status === "clean" ? "secondary" : 
                      item.status === "contaminated" ? "destructive" : 
                      "outline"
                    }
                  >
                    {item.status}
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">{item.lastUpdate}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}