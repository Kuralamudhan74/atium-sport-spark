import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Target, 
  Users, 
  Trophy, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Elite Performance",
      category: "Professional",
      price: "$299",
      duration: "12 weeks",
      description: "Advanced training program designed for professional and semi-professional athletes seeking peak performance.",
      features: [
        "Personalized training plans",
        "1-on-1 coaching sessions",
        "Performance analytics",
        "Nutrition guidance",
        "Recovery protocols",
        "Competition preparation"
      ],
      icon: Trophy,
      popular: true,
      gradient: "gradient-energy"
    },
    {
      title: "Athletic Development", 
      category: "Intermediate",
      price: "$179",
      duration: "8 weeks",
      description: "Comprehensive program for serious athletes looking to take their performance to the next level.",
      features: [
        "Structured training program",
        "Group coaching sessions",
        "Technique analysis",
        "Strength & conditioning",
        "Mental performance training",
        "Progress tracking"
      ],
      icon: Target,
      popular: false,
      gradient: "gradient-primary"
    },
    {
      title: "Foundation Training",
      category: "Beginner",
      price: "$99",
      duration: "6 weeks",
      description: "Perfect starting point for athletes beginning their sports performance journey.",
      features: [
        "Basic training fundamentals",
        "Group sessions",
        "Movement assessment",
        "Fitness evaluation",
        "Goal setting workshop",
        "Community access"
      ],
      icon: Zap,
      popular: false,
      gradient: "bg-secondary"
    }
  ];

  const stats = [
    { label: "Success Rate", value: "98%", icon: Target },
    { label: "Athletes Trained", value: "10,000+", icon: Users },
    { label: "Programs Completed", value: "25,000+", icon: CheckCircle },
    { label: "Average Improvement", value: "40%", icon: Star }
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Training Programs</span>
          </div>
          <h2 className="text-display-md font-black text-foreground mb-6">
            Choose Your Path To
            <span className="block text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're starting your athletic journey or competing at elite levels, 
            we have the perfect program to unlock your potential.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 mx-auto">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className={`relative p-8 hover-lift border-0 shadow-card overflow-hidden ${
              program.popular ? 'ring-2 ring-primary ring-offset-2' : ''
            }`}>
              {program.popular && (
                <Badge className="absolute top-4 right-4 gradient-energy text-white font-semibold">
                  Most Popular
                </Badge>
              )}
              
              <div className={`w-16 h-16 rounded-2xl ${program.gradient} flex items-center justify-center mb-6`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>

              <div className="mb-4">
                <Badge variant="secondary" className="mb-3">
                  {program.category}
                </Badge>
                <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-black text-primary">{program.price}</span>
                  <span className="text-muted-foreground ml-2">/ {program.duration}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {program.duration} program
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${program.popular ? 'gradient-energy glow-primary' : 'gradient-primary'} hover:scale-105 transition-smooth font-semibold`}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Not Sure Which Program Is Right For You?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our expert coaches to find the perfect training path for your goals.
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth font-semibold px-8">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;