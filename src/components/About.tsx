import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Award, Globe, Heart } from "lucide-react";
import trainingImage from "@/assets/training-equipment.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue perfection in every aspect of athletic performance and training methodology."
    },
    {
      icon: Award,
      title: "Achievement",
      description: "Dedicated to helping athletes reach their highest potential and achieve their goals."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Serving athletes worldwide with premium training and world-class sports equipment."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for sports drives everything we do, from training programs to athlete support."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-sm font-semibold">About Atium Sports</span>
          </div>
          <h2 className="text-display-md font-black text-foreground mb-6">
            Transforming Athletes Into
            <span className="block text-gradient">Champions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Atium Sports has been at the forefront of athletic excellence, 
            providing world-class training programs and premium equipment to athletes across the globe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded by former Olympic athletes and sports scientists, Atium Sports emerged from 
                a simple belief: every athlete deserves access to elite-level training and equipment, 
                regardless of their current level.
              </p>
              <p>
                Today, we've trained over 10,000 athletes, supported 500+ championship victories, 
                and continue to push the boundaries of what's possible in sports performance.
              </p>
              <p>
                From weekend warriors to professional athletes, our comprehensive approach combines 
                cutting-edge technology, proven methodologies, and personalized attention to help 
                you achieve your athletic goals.
              </p>
            </div>
            
            <Button className="mt-8 gradient-primary hover:scale-105 transition-smooth text-lg font-semibold px-8 py-3">
              Learn Our Method
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevation">
              <img 
                src={trainingImage} 
                alt="Professional training equipment at Atium Sports"
                className="w-full h-96 object-cover hover:scale-105 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 glass rounded-xl p-6">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Leading</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 hover-lift border-0 shadow-card bg-card/50 backdrop-blur-sm">
              <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;