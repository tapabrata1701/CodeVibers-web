import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Languages,
  Users,
  BookOpen,
  Award,
  MessageCircle,
  Volume2,
  Gamepad2,
} from "lucide-react";

const communityStats = [
  { label: "Active Communities", value: "847", color: "primary" },
  { label: "Languages Supported", value: "12", color: "secondary" },
  { label: "Educational Sessions", value: "2,156", color: "accent" },
  { label: "Community Reports", value: "5,284", color: "primary" },
];

const languages = [
  "Assamese",
  "Bengali",
  "Bodo",
  "Hindi",
  "English",
  "Manipuri",
  "Mizo",
  "Nagamese",
  "Nepali",
  "Khasi",
  "Garo",
  "Tripuri",
];

const educationModules = [
  {
    title: "Water Purification Methods",
    description: "Safe drinking water practices for rural communities",
    participants: 1250,
    completion: 89,
  },
  {
    title: "Hygiene & Sanitation",
    description: "Personal and community hygiene best practices",
    participants: 980,
    completion: 92,
  },
  {
    title: "Early Symptom Recognition",
    description: "Identifying water-borne disease symptoms early",
    participants: 756,
    completion: 85,
  },
];

export const CommunityFeatures = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-foreground">
            Community Engagement Platform
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            Empowering Northeast India's diverse communities through
            multilingual health education, gamified reporting, and culturally
            sensitive awareness programs.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {communityStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center transition-colors border-2 hover:border-primary/20">
              <CardContent className="pt-6">
                <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Multilingual Support */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Languages className="w-5 h-5 mr-2 text-primary" />
                  Multilingual Interface
                </CardTitle>
                <CardDescription>
                  Native language support for inclusive community participation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-2 py-1 text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center p-3 space-x-3 rounded-lg bg-muted/50">
                    <Volume2 className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-medium">Voice-Based Reporting</div>
                      <div className="text-sm text-muted-foreground">
                        Audio reports in local dialects
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-3 space-x-3 rounded-lg bg-muted/50">
                    <MessageCircle className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-medium">SMS Integration</div>
                      <div className="text-sm text-muted-foreground">
                        Text-based alerts and reports
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gamepad2 className="w-5 h-5 mr-2 text-accent" />
                  Gamified Health Reporting
                </CardTitle>
                <CardDescription>
                  Incentivizing community participation through rewards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 text-center rounded-lg bg-primary/10">
                    <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <div className="font-bold text-primary">2,847</div>
                    <div className="text-xs text-muted-foreground">
                      Points Earned
                    </div>
                  </div>
                  <div className="p-4 text-center rounded-lg bg-secondary/10">
                    <Users className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <div className="font-bold text-secondary">156</div>
                    <div className="text-xs text-muted-foreground">
                      Top Contributors
                    </div>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  View Leaderboard
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Health Education */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-secondary" />
                  Health Education Modules
                </CardTitle>
                <CardDescription>
                  Interactive learning content for disease prevention
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {educationModules.map((module, index) => (
                  <div key={index} className="p-4 space-y-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{module.title}</h4>
                      <Badge variant="secondary">
                        {module.completion}% Complete
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {module.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        <Users className="inline w-4 h-4 mr-1" />
                        {module.participants} participants
                      </span>
                      <Button size="sm" variant="outline">
                        View Module
                      </Button>
                    </div>
                  </div>
                ))}

                <Button className="w-full mt-6">
                  Create New Educational Content
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
