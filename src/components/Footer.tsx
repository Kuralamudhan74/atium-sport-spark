import { Button } from "@/components/ui/button";
import { 
  Dumbbell, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Programs": [
      "Elite Performance", 
      "Athletic Development", 
      "Foundation Training",
      "Youth Programs",
      "Corporate Wellness"
    ],
    "Services": [
      "Personal Training",
      "Group Sessions", 
      "Sports Therapy",
      "Nutrition Consulting",
      "Performance Testing"
    ],
    "Resources": [
      "Training Tips",
      "Nutrition Guide",
      "Exercise Library", 
      "Success Stories",
      "Equipment Guide"
    ],
    "Company": [
      "About Us",
      "Our Coaches", 
      "Careers",
      "Press",
      "Contact"
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-energy flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Atium Sports</span>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Elevating athletes worldwide through premium training programs, 
              cutting-edge equipment, and expert guidance since 2008.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>123 Athletic Drive, Performance City, PC 12345</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>info@atiumsports.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:scale-110 transition-smooth flex items-center justify-center group"
                >
                  <social.icon className="w-5 h-5 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h4 className="text-lg font-bold mb-6">{title}</h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-primary transition-smooth"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated with Training Tips & News
              </h3>
              <p className="text-gray-300">
                Get weekly insights, training tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              />
              <Button className="gradient-primary hover:scale-105 transition-smooth font-semibold px-8 py-3">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Atium Sports. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a>
              <a href="#" className="hover:text-primary transition-smooth">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;