import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Trophy, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-athlete.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-24 w-48 h-48 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Trophy className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-white">Premium Athletic Performance</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-display-xl md:text-6xl lg:text-7xl font-black text-white mb-6 animate-slide-up">
            Elevating Sports
            <span className="block text-gradient">Performance</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Empowering Sports organisations and their athletes to reach their peak performance through digitization, Sports Science & Artificial Intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="gradient-energy hover:scale-105 transition-bounce text-lg font-bold px-8 py-4 glow-primary"
            >
              Start Training Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-lg font-semibold px-8 py-4"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="glass rounded-xl p-6 hover-lift">
              <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-300">Athletes Trained</div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4 mx-auto">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Championships Won</div>
            </div>

            <div className="glass rounded-xl p-6 hover-lift">
              <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;