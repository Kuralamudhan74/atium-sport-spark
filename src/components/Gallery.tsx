import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Image as ImageIcon, Award, Users, Zap } from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: ImageIcon },
    { id: "training", label: "Training", icon: Zap },
    { id: "competitions", label: "Competitions", icon: Award },
    { id: "athletes", label: "Athletes", icon: Users }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Elite Training Session",
      category: "training",
      type: "image",
      description: "Professional athletes during intensive performance training",
      featured: true
    },
    {
      id: 2,
      title: "Championship Victory",
      category: "competitions",
      type: "video",
      description: "Athletes celebrating their championship win",
      featured: false
    },
    {
      id: 3,
      title: "Strength & Conditioning",
      category: "training",
      type: "image",
      description: "Modern equipment and training methodologies",
      featured: false
    },
    {
      id: 4,
      title: "Olympic Preparation",
      category: "athletes",
      type: "video",
      description: "Behind the scenes with Olympic-bound athletes",
      featured: true
    },
    {
      id: 5,
      title: "Team Building Exercise",
      category: "training",
      type: "image",
      description: "Group training sessions building team chemistry",
      featured: false
    },
    {
      id: 6,
      title: "Record Breaking Performance",
      category: "competitions",
      type: "image",
      description: "Athletes pushing limits and breaking records",
      featured: false
    },
    {
      id: 7,
      title: "Recovery & Wellness",
      category: "training",
      type: "image",
      description: "Sports medicine and recovery techniques",
      featured: false
    },
    {
      id: 8,
      title: "Youth Development Program",
      category: "athletes",
      type: "video",
      description: "Next generation of athletes in development",
      featured: false
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Generate placeholder colors based on item id
  const getPlaceholderGradient = (id: number) => {
    const gradients = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-teal-600", 
      "from-orange-500 to-red-600",
      "from-purple-500 to-pink-600",
      "from-teal-500 to-blue-600",
      "from-red-500 to-orange-600",
      "from-pink-500 to-rose-600",
      "from-indigo-500 to-purple-600"
    ];
    return gradients[id % gradients.length];
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <ImageIcon className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Gallery</span>
          </div>
          <h2 className="text-display-md font-black text-foreground mb-6">
            Witness Athletic
            <span className="block text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the intensity, dedication, and triumph of athletes who've trained with Atium Sports. 
            Every image tells a story of transformation and achievement.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-smooth ${
                activeCategory === category.id 
                  ? "gradient-primary text-white" 
                  : "hover:border-primary hover:text-primary"
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl shadow-card hover-lift cursor-pointer ${
                item.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Placeholder with gradient */}
              <div className={`w-full ${item.featured ? 'h-80 md:h-full' : 'h-64'} bg-gradient-to-br ${getPlaceholderGradient(item.id)} relative`}>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center mb-2">
                      {item.type === "video" && (
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm mr-2">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {categories.find(c => c.id === item.category)?.label}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>

                {/* Play button for videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="gradient-energy text-white font-semibold">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth font-semibold px-8">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;