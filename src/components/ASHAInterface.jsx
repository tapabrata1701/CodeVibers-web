import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Smartphone, 
  Users, 
  Droplets, 
  AlertCircle, 
  Plus,
  CheckCircle,
  MapPin,
  Camera,
  Mic
} from "lucide-react";

const recentReports = [
  {
    id: 1,
    type: "Symptom Report",
    patient: "Village: Khonoma",
    symptoms: "Diarrhea, Fever",
    status: "submitted",
    time: "1 hour ago"
  },
  {
    id: 2,
    type: "Water Quality",
    location: "Community Well #3",
    issue: "Unusual color/odor",
    status: "pending",
    time: "3 hours ago"
  },
  {
    id: 3,
    type: "Health Education",
    activity: "Hygiene Session",
    participants: "25 families",
    status: "completed",
    time: "1 day ago"
  }
];

const quickActions = [
  {
    icon: AlertCircle,
    title: "Report Symptoms",
    description: "Log patient symptoms and basic health data",
    color: "destructive"
  },
  {
    icon: Droplets,
    title: "Water Quality Issue",
    description: "Report contamination or quality concerns",
    color: "secondary"
  },
  {
    icon: Users,
    title: "Health Education",
    description: "Record community awareness activities",
    color: "accent"
  },
  {
    icon: MapPin,
    title: "GPS Location",
    description: "Mark location for reports and visits",
    color: "primary"
  }
];

const todaysTasks = [
  { task: "Visit 5 households for follow-up", completed: true },
  { task: "Conduct water testing at Community Well", completed: false },
  { task: "Submit weekly health report", completed: false },
  { task: "Health education session at school", completed: true }
];

export const ASHAInterface = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            ASHA Worker Mobile Interface
          </h2>
          <p className="text-xl text-muted-foreground">
            Field-ready mobile application for community health workers
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Common tasks for field workers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  className="w-full justify-start h-auto p-4 group hover:border-primary/50"
                >
                  <div className="flex items-start space-x-3">
                    <action.icon className={`w-5 h-5 mt-0.5 text-${action.color} group-hover:scale-110 transition-transform`} />
                    <div className="text-left">
                      <div className="font-medium">{action.title}</div>
                      <div className="text-xs text-muted-foreground">{action.description}</div>
                    </div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="w-5 h-5 mr-2 text-secondary" />
                Recent Reports
              </CardTitle>
              <CardDescription>
                Your latest field submissions and updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg bg-card">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{report.type}</Badge>
                      <Badge 
                        variant={report.status === 'completed' ? 'default' : 
                               report.status === 'submitted' ? 'secondary' : 'outline'}
                        className={report.status === 'completed' ? 'bg-accent' : ''}
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <div className="font-medium mb-1">
                      {report.patient || report.location || report.activity}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {report.symptoms || report.issue || report.participants}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {report.time}
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Today's Tasks & Features */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                Today's Tasks
              </CardTitle>
              <CardDescription>
                Daily assignments and progress tracking
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {todaysTasks.map((task, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    task.completed ? 'bg-accent border-accent' : 'border-muted-foreground'
                  }`}>
                    {task.completed && <CheckCircle className="w-3 h-3 text-white" />}
                  </div>
                  <span className={`flex-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {task.task}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="w-5 h-5 mr-2 text-primary" />
                Mobile Features
              </CardTitle>
              <CardDescription>
                Optimized for field conditions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <Camera className="w-5 h-5 text-secondary" />
                <div>
                  <div className="font-medium">Photo Documentation</div>
                  <div className="text-sm text-muted-foreground">Capture evidence and conditions</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <Mic className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-medium">Voice Recording</div>
                  <div className="text-sm text-muted-foreground">Local language support</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">GPS Tracking</div>
                  <div className="text-sm text-muted-foreground">Automatic location tagging</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};