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
  const colorText = {
    primary: "text-blue-600",
    secondary: "text-zinc-600",
    accent: "text-emerald-600",
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Community Engagement Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering Northeast India's diverse communities through
            multilingual health education, gamified reporting, and culturally
            sensitive awareness programs.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-2 hover:border-primary/20 transition-colors"
            >
              <CardContent className="pt-6">
                <div
                  className={`text-3xl font-bold ${
                    colorText[stat.color] || ""
                  } mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
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
                      className="text-xs px-2 py-1"
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Volume2 className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-medium">Voice-Based Reporting</div>
                      <div className="text-sm text-muted-foreground">
                        Audio reports in local dialects
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
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
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-bold text-primary">2,847</div>
                    <div className="text-xs text-muted-foreground">
                      Points Earned
                    </div>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
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
                  <div key={index} className="space-y-3 p-4 border rounded-lg">
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
