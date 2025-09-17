import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { 
  Smartphone, 
  FileText, 
  MapPin, 
  Calendar,
  Send,
  CheckCircle,
  AlertTriangle,
  Users
} from "lucide-react";
import { useToast } from "../hooks/use-toast";

export function DataCollection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitReport = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Report Submitted Successfully",
      description: "Your health report has been recorded and will be analyzed by our AI system.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Health Data Collection</h2>
        <p className="text-muted-foreground">
          ASHA workers, volunteers, and medical staff can report health cases and water quality data here.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Submit Health Report
              </CardTitle>
              <CardDescription>
                Report disease cases, symptoms, or water quality issues in your area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReport} className="space-y-6">
                {/* Reporter Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reporter-name">Reporter Name</Label>
                    <Input id="reporter-name" placeholder="Enter your name" required />
                  </div>
                  <div>
                    <Label htmlFor="reporter-role">Role</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asha">ASHA Worker</SelectItem>
                        <SelectItem value="volunteer">Community Volunteer</SelectItem>
                        <SelectItem value="doctor">Medical Doctor</SelectItem>
                        <SelectItem value="nurse">Nurse</SelectItem>
                        <SelectItem value="health-official">Health Official</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Location Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="district">District</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kohima">Kohima</SelectItem>
                        <SelectItem value="dimapur">Dimapur</SelectItem>
                        <SelectItem value="imphal-west">Imphal West</SelectItem>
                        <SelectItem value="guwahati">Guwahati</SelectItem>
                        <SelectItem value="aizawl">Aizawl</SelectItem>
                        <SelectItem value="shillong">Shillong</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="village">Village/Area</Label>
                    <Input id="village" placeholder="Enter village or area name" required />
                  </div>
                </div>

                {/* Report Type */}
                <div>
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="What are you reporting?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="disease-outbreak">Disease Outbreak</SelectItem>
                      <SelectItem value="water-contamination">Water Contamination</SelectItem>
                      <SelectItem value="individual-case">Individual Health Case</SelectItem>
                      <SelectItem value="water-quality-test">Water Quality Test Results</SelectItem>
                      <SelectItem value="community-health">Community Health Update</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Disease/Symptom Information */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="disease-type">Disease/Condition</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diarrhea">Diarrhea</SelectItem>
                          <SelectItem value="cholera">Cholera</SelectItem>
                          <SelectItem value="typhoid">Typhoid</SelectItem>
                          <SelectItem value="hepatitis-a">Hepatitis A</SelectItem>
                          <SelectItem value="dysentery">Dysentery</SelectItem>
                          <SelectItem value="gastroenteritis">Gastroenteritis</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="case-count">Number of Cases</Label>
                      <Input id="case-count" type="number" placeholder="0" min="0" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="symptoms">Symptoms & Additional Details</Label>
                    <Textarea 
                      id="symptoms" 
                      placeholder="Describe symptoms, severity, duration, and any other relevant details..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Water Quality Data */}
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Water Quality Information (Optional)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="ph-level">pH Level</Label>
                      <Input id="ph-level" type="number" step="0.1" placeholder="7.0" />
                    </div>
                    <div>
                      <Label htmlFor="turbidity">Turbidity</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select turbidity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clear">Clear</SelectItem>
                          <SelectItem value="slightly-turbid">Slightly Turbid</SelectItem>
                          <SelectItem value="turbid">Turbid</SelectItem>
                          <SelectItem value="very-turbid">Very Turbid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="water-source">Water Source</Label>
                      <Input id="water-source" placeholder="Well, river, tap, etc." />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Submitting Report...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Health Report
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Today's Submissions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Disease Reports</span>
                <Badge variant="outline">23</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Water Quality Tests</span>
                <Badge variant="outline">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Reporters</span>
                <Badge variant="outline">45</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Recent Reports</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { reporter: "Priya K. (ASHA)", location: "Dimapur", type: "Diarrhea cases", time: "5 min ago", status: "processing" },
                { reporter: "Dr. Singh", location: "Kohima", type: "Water test", time: "15 min ago", status: "verified" },
                { reporter: "Ravi M. (Volunteer)", location: "Imphal", type: "Community update", time: "1h ago", status: "verified" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  {item.status === "verified" ? (
                    <CheckCircle className="h-4 w-4 text-health-safe flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-health-warning flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{item.reporter}</div>
                    <div className="text-muted-foreground truncate">{item.location} - {item.type}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{item.time}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Emergency Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <div className="font-medium">District Health Officer</div>
                <div className="text-muted-foreground">+91-9876-543-210</div>
              </div>
              <div>
                <div className="font-medium">Emergency Helpline</div>
                <div className="text-muted-foreground">108 / 102</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
