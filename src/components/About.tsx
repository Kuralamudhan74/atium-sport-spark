import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Award, Globe, Heart } from "lucide-react";
import trainingImage from "@/assets/training-equipment.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Holistic Athlete Management",
      description: "ATIUM empowers you to manage athletes comprehensively, from tracking and monitoring training programs to gaining intelligent insights."
    },
    {
      icon: Award,
      title: "Performance Intelligence",
      description: "We leverage data against evidence-backed research to provide actionable insights, enabling you to enhance high-performance standards and cultivate elite athletes."
    },
    {
      icon: Globe,
      title: "Single Data Layer",
      description: "All stakeholders can collaborate seamlessly on a unified platform, ensuring efficient communication and a cohesive approach to athlete development."
    },
    {
      icon: Heart,
      title: "Efficient Collaboration",
      description: "Bring athletes, coaches, medical staff, and leaders together for streamlined collaboration and communication."
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
            We go beyond traditional athlete management, integrating evidence-backed research to measure relevant training data. This not only streamlines collaboration but also facilitates faster and more informed decision-making. ATIUM is a collaborative platform that brings together all stakeholders—athletes, coaches, medical staff, and leaders— onto a single data layer.
          </p>
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
          </div>
        </div>

        {/*----------------------2nd para - right ---------------------------------*/}

       <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
          </div>
          {/* Story Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Design a high-performance digital framework that is best suited for your organization needs.
              </p>
              <p>
                Centrally manage data from different sources, look up evidence-backed research to optimize the training and engage with different stakeholders including athletes across the entire lifecycle.
              </p>
              <p>
                Check out our ATIUM Sports platforms extensive capabilities from our features page.
              </p>
            </div>
            
            <Button className="mt-8 gradient-primary hover:scale-105 transition-smooth text-lg font-semibold px-8 py-3">
              Learn Our Method
            </Button>
          </div>

          
        </div>

        {/*----------------------3rd para - right ---------------------------------*/}


         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
      
          {/* Story Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Track and analyse data from performance tests, clinical assessments for individual athletes and teams. Gain instant insights and baseline your performance training by uploading existing historical data from any source. Easily schedule assessments and workouts for athletes while collaborating using shared calendars.
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
          </div>
          
        </div>

        {/*----------------------4th para- right ---------------------------------*/}

<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
          </div>
          {/* Story Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Benefit from holistic performance intelligence across the entire athlete training program. With global scoring and training load trend analysis, use key performance indicators represented in easy-to-understand dashboards to finally put your athlete's training data to good use and take decisions faster.
              </p>
            </div>
            
            <Button className="mt-8 gradient-primary hover:scale-105 transition-smooth text-lg font-semibold px-8 py-3">
              Learn Our Method
            </Button>
          </div>

          
        </div>

        {/*----------------------4th para- right ---------------------------------*/}


<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
      
          {/* Story Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Benchmark your team and your athlete's training performance against recognized world records. Leverage evidence-backed, sports-science resources and protocols used by successful elite athlete, right from within the ATIUM platform to improve high-performance training.
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
          </div>
          
        </div>


       
      </div>
    </section>
  );
};

export default About;