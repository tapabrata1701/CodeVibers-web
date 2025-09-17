import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Video, 
  Download,
  Play,
  Users,
  Award,
  Languages,
  Share,
  Eye,
  Clock
} from "lucide-react";

export function HealthEducation() {
  const educationalContent = [
    {
      id: 1,
      title: "Water Purification Methods for Rural Areas",
      type: "video",
      language: "Assamese",
      duration: "8 min",
      views: 1547,
      description: "Step-by-step guide on boiling, chlorination, and filtration methods using locally available materials.",
      category: "Water Safety"
    },
    {
      id: 2,
      title: "Recognizing Early Signs of Cholera",
      type: "infographic",
      language: "Hindi",
      duration: "2 min read",
      views: 2341,
      description: "Visual guide to identify cholera symptoms and when to seek immediate medical attention.",
      category: "Disease Prevention"
    },
    {
      id: 3,
      title: "Hand Washing Techniques - Community Guide",
      type: "video",
      language: "Bengali",
      duration: "5 min",
      views: 3217,
      description: "Proper hand washing demonstration with soap and water alternatives for remote areas.",
      category: "Hygiene Practices"
    },
    {
      id: 4,
      title: "Safe Food Storage in Monsoon Season",
      type: "document",
      language: "English",
      duration: "4 min read",
      views: 987,
      description: "Guidelines for preventing food contamination during high humidity and flooding.",
      category: "Food Safety"
    },
    {
      id: 5,
      title: "Community Water Testing Kit Usage",
      type: "video",
      language: "Manipuri",
      duration: "12 min",
      views: 756,
      description: "Training video on how to use basic water testing kits and interpret results.",
      category: "Water Safety"
    },
    {
      id: 6,
      title: "Diarrhea Management at Home",
      type: "infographic",
      language: "Khasi",
      duration: "3 min read",
      views: 1892,
      description: "ORS preparation and home remedies for managing mild to moderate diarrhea cases.",
      category: "Disease Treatment"
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "video": return <Video className="h-4 w-4" />;
      case "document": return <BookOpen className="h-4 w-4" />;
      case "infographic": return <Eye className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "video": return "bg-blue-100 text-blue-700";
      case "document": return "bg-green-100 text-green-700";
      case "infographic": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Health Education & Awareness</h2>
          <p className="text-muted-foreground">
            Multilingual educational resources for community health workers and rural populations
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Languages className="h-4 w-4 mr-2" />
            Language Filter
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download All
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Total Resources</p>
                <p className="text-2xl font-bold">142</p>
              </div>
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Languages</p>
                <p className="text-2xl font-bold">9</p>
              </div>
              <Languages className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Total Views</p>
                <p className="text-2xl font-bold">47.2K</p>
              </div>
              <Eye className="h-8 w-8 text-health-info" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Active Users</p>
                <p className="text-2xl font-bold">2.1K</p>
              </div>
              <Users className="h-8 w-8 text-health-safe" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {["All", "Water Safety", "Disease Prevention", "Hygiene Practices", "Food Safety", "Disease Treatment"].map((category) => (
          <Badge 
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Educational Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationalContent.map((content) => (
          <Card key={content.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <div className={`p-2 rounded-lg ${getTypeColor(content.type)}`}>
                  {getTypeIcon(content.type)}
                </div>
                <Badge variant="outline" className="text-xs">
                  {content.language}
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight">{content.title}</CardTitle>
              <CardDescription className="text-sm">
                {content.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {content.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {content.views}
                  </span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {content.category}
                </Badge>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  {content.type === "video" ? (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Watch
                    </>
                  ) : (
                    <>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read
                    </>
                  )}
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gamification Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Community Health Champions
          </CardTitle>
          <CardDescription>
            Recognize and reward active community health educators and volunteers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold">Top Educator</h4>
              <p className="text-sm text-muted-foreground">Priya Sharma (ASHA)</p>
              <p className="text-xs">127 people trained this month</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-silver-400 to-silver-600 rounded-full flex items-center justify-center mx-auto bg-gray-400">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold">Most Active Community</h4>
              <p className="text-sm text-muted-foreground">Dimapur Central Block</p>
              <p className="text-xs">89% completion rate</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-bronze-400 to-bronze-600 rounded-full flex items-center justify-center mx-auto bg-orange-600">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold">Best Content</h4>
              <p className="text-sm text-muted-foreground">Water Safety Video</p>
              <p className="text-xs">4.9/5 rating, 3.2K views</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
