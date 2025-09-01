import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Star
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Athletic Drive", "Performance City, PC 12345"],
      gradient: "gradient-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      gradient: "gradient-energy"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@atiumsports.com", "training@atiumsports.com"],
      gradient: "bg-secondary"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 5:00 AM - 10:00 PM", "Sat-Sun: 6:00 AM - 8:00 PM"],
      gradient: "bg-accent"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule Training",
      description: "Book your next session"
    },
    {
      icon: MessageCircle, 
      title: "Live Chat",
      description: "Get instant support"
    },
    {
      icon: Star,
      title: "Free Consultation",
      description: "30-minute strategy call"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-display-md font-black text-foreground mb-6">
            Ready To Start Your
            <span className="block text-gradient">Athletic Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you have questions about our programs or you're ready to begin training, 
            our team of expert coaches is here to help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <Card className="p-8 shadow-card border-0 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName"
                    placeholder="Enter your first name"
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName"
                    placeholder="Enter your last name"
                    className="border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="border-border/50 focus:border-primary transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="border-border/50 focus:border-primary transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject"
                  placeholder="What can we help you with?"
                  className="border-border/50 focus:border-primary transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  rows={6}
                  placeholder="Tell us about your goals, experience level, or any questions you have..."
                  className="border-border/50 focus:border-primary transition-smooth resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-primary hover:scale-105 transition-smooth text-lg font-semibold py-3"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover-lift border-0 shadow-card bg-card/50 backdrop-blur-sm">
                  <div className={`w-12 h-12 rounded-xl ${info.gradient} flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{info.title}</h4>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="p-6 border-0 shadow-card bg-card/50 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-foreground mb-6">Quick Actions</h4>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-4 hover:border-primary hover:bg-primary/5 transition-smooth"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <action.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{action.title}</div>
                        <div className="text-sm text-muted-foreground">{action.description}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-0 border-0 shadow-card overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h4 className="text-lg font-bold text-foreground mb-2">Find Us</h4>
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Prefer to talk? We're here to help!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is available to answer questions, provide guidance, and help you choose 
            the right training program for your athletic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-energy hover:scale-105 transition-smooth font-semibold px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth font-semibold px-8">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;