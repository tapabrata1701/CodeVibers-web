import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Phone,
  CheckCircle,
  Bell,
  Users,
  Send
} from "lucide-react";

export function AlertsMonitoring() {
  const alerts = [
    {
      id: 1,
      priority: "high",
      title: "Cholera Outbreak Risk - Dimapur District",
      description: "15 cases of severe diarrhea reported in Chumukedima block. Water sources showing high turbidity.",
      location: "Dimapur, Chumukedima Block",
      timestamp: "2 hours ago",
      status: "active",
      affectedPopulation: 2500,
      responseTeam: "District Health Team Alpha"
    },
    {
      id: 2,
      priority: "medium",
      title: "Water Contamination Alert - Kohima Hills",
      description: "pH levels below normal (5.8) detected in 3 water sources. No disease cases reported yet.",
      location: "Kohima, Hill Area Villages",
      timestamp: "4 hours ago",
      status: "monitoring",
      affectedPopulation: 1200,
      responseTeam: "Local PHED Team"
    },
    {
      id: 3,
      priority: "low",
      title: "Typhoid Cases Increase - Imphal West",
      description: "7 confirmed typhoid cases this week vs 3 last week. Monitoring for outbreak potential.",
      location: "Imphal West, Lamphel Area",
      timestamp: "6 hours ago",
      status: "resolved",
      affectedPopulation: 800,
      responseTeam: "Medical Response Unit"
    },
    {
      id: 4,
      priority: "high",
      title: "Water System Failure - Remote Village",
      description: "Complete water system failure in Longding village. Emergency water supply initiated.",
      location: "Arunachal Pradesh, Longding",
      timestamp: "8 hours ago",
      status: "active",
      affectedPopulation: 450,
      responseTeam: "Emergency Response Team"
    }
  ];

  const getAlertColor = (priority) => {
    switch (priority) {
      case "high": return "health-critical";
      case "medium": return "health-warning";
      case "low": return "health-info";
      default: return "muted";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active": return <AlertTriangle className="h-4 w-4" />;
      case "monitoring": return <Clock className="h-4 w-4" />;
      case "resolved": return <CheckCircle className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Alerts & Monitoring</h2>
          <p className="text-muted-foreground">
            Real-time disease outbreak alerts and response coordination
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Configure Alerts
          </Button>
          <Button size="sm">
            <Send className="h-4 w-4 mr-2" />
            Send Alert
          </Button>
        </div>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Active Alerts</p>
                <p className="text-2xl font-bold text-health-critical">3</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-health-critical" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Monitoring</p>
                <p className="text-2xl font-bold text-health-warning">2</p>
              </div>
              <Clock className="h-8 w-8 text-health-warning" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Resolved Today</p>
                <p className="text-2xl font-bold text-health-safe">5</p>
              </div>
              <CheckCircle className="h-8 w-8 text-health-safe" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Avg Response</p>
                <p className="text-2xl font-bold">1.2h</p>
              </div>
              <Clock className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Alerts */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card
            key={alert.id}
            className={`border-l-4 ${
              alert.priority === "high"
                ? "border-l-health-critical"
                : alert.priority === "medium"
                ? "border-l-health-warning"
                : "border-l-health-info"
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant={
                        alert.priority === "high"
                          ? "destructive"
                          : alert.priority === "medium"
                          ? "outline"
                          : "secondary"
                      }
                    >
                      {alert.priority.toUpperCase()}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      {getStatusIcon(alert.status)}
                      {alert.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {alert.timestamp}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{alert.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {alert.description}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Team
                  </Button>
                  {alert.status === "active" && (
                    <Button size="sm">Respond</Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{alert.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {alert.affectedPopulation.toLocaleString()} people affected
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  <span>{alert.responseTeam}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alert Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Alert Configuration</CardTitle>
          <CardDescription>
            Configure automatic alert thresholds and notification settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Disease Outbreak Thresholds</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Diarrhea cases per day</span>
                  <Badge variant="outline">≥ 10</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cholera suspected cases</span>
                  <Badge variant="outline">≥ 3</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Typhoid confirmed cases</span>
                  <Badge variant="outline">≥ 5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Water-borne disease cluster</span>
                  <Badge variant="outline">≥ 7</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Water Quality Thresholds</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">pH Level (Critical)</span>
                  <Badge variant="destructive">&lt; 6.0 or &gt; 8.5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Turbidity (High)</span>
                  <Badge variant="outline">&gt; 5 NTU</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">E.coli Detection</span>
                  <Badge variant="destructive">Present</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Chlorine Residual</span>
                  <Badge variant="outline">&lt; 0.2 mg/L</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
