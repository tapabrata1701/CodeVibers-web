import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Droplets,
  Smartphone,
  MapPin,
  AlertTriangle,
  Users,
  BarChart3,
  Languages,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    description:
      "Machine learning models analyze health patterns, water quality data, and seasonal trends to predict outbreak risks before they occur.",
    badge: "Core Feature",
    color: "primary",
  },
  {
    icon: Droplets,
    title: "Water Quality Monitoring",
    description:
      "Real-time integration with IoT sensors monitoring pH, turbidity, bacterial presence, and other contamination indicators.",
    badge: "IoT Integration",
    color: "secondary",
  },
  {
    icon: Smartphone,
    title: "Mobile Data Collection",
    description:
      "ASHA workers and volunteers use mobile apps to report health cases, symptoms, and community observations in real-time.",
    badge: "Field Ready",
    color: "accent",
  },
  {
    icon: MapPin,
    title: "Geospatial Hotspot Mapping",
    description:
      "Interactive maps showing disease clusters, water source locations, and resource allocation for targeted interventions.",
    badge: "GIS Powered",
    color: "primary",
  },
  {
    icon: AlertTriangle,
    title: "Early Warning System",
    description:
      "Automated alerts sent to health officials, local governance, and community leaders when outbreak risks are detected.",
    badge: "Real-time",
    color: "destructive",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Multilingual interface with health education modules, gamified reporting, and community awareness campaigns.",
    badge: "Multilingual",
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Comprehensive visualization of health trends, intervention effectiveness, and resource optimization for decision makers.",
    badge: "Data Driven",
    color: "secondary",
  },
  {
    icon: Languages,
    title: "Tribal Language Support",
    description:
      "Native language support for Northeast India's diverse tribal communities with voice-based reporting capabilities.",
    badge: "Inclusive",
    color: "accent",
  },
  {
    icon: Wifi,
    title: "Offline Functionality",
    description:
      "Works in low-connectivity areas with SMS/IVR fallbacks and offline data synchronization when connection resumes.",
    badge: "Resilient",
    color: "primary",
  },
];

export const SystemFeatures = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-foreground">
            Comprehensive Health Surveillance Platform
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            A complete ecosystem of AI-powered tools designed specifically for
            rural Northeast India's unique healthcare challenges and
            infrastructure constraints.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transition-all duration-300 border-2 group hover:shadow-lg hover:border-primary/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl transition-colors group-hover:text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
