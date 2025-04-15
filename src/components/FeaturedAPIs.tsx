
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const apis = [
  {
    id: "vision-ai",
    name: "Vision AI",
    icon: "🔍",
    category: "AI & ML",
    categoryColor: "bg-purple-500",
    description: "Advanced image recognition and object detection API with real-time capabilities and high accuracy.",
    pricing: "Freemium",
    rating: 4.8,
    reviews: 124,
    tags: ["Image Recognition", "Object Detection"]
  },
  {
    id: "payment-gateway",
    name: "SecurePay",
    icon: "💸",
    category: "Finance",
    categoryColor: "bg-green-500",
    description: "Complete payment processing solution with fraud detection, recurring billing, and global currency support.",
    pricing: "Pay-as-you-go",
    rating: 4.9,
    reviews: 216,
    tags: ["Payments", "Fraud Detection"]
  },
  {
    id: "iot-hub",
    name: "IoT Hub",
    icon: "📱",
    category: "IoT",
    categoryColor: "bg-blue-500",
    description: "Manage and connect thousands of IoT devices securely with real-time data processing and analytics.",
    pricing: "Enterprise",
    rating: 4.7,
    reviews: 89,
    tags: ["Device Management", "Data Analytics"]
  },
  {
    id: "chatbot",
    name: "ConversAI",
    icon: "🤖",
    category: "AI & ML",
    categoryColor: "bg-purple-500",
    description: "Natural language processing API for building intelligent chatbots and conversational interfaces.",
    pricing: "Freemium",
    rating: 4.6,
    reviews: 142,
    tags: ["NLP", "Chatbots"]
  }
];

const FeaturedAPIs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured APIs</h2>
          <Link to="/apis" className="text-primary flex items-center group">
            View all APIs <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apis.map((api) => (
            <Card key={api.id} className="border border-border bg-card h-full transition-all duration-300 hover:shadow-md hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{api.icon}</div>
                    <div>
                      <h3 className="font-semibold">{api.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className={`w-2 h-2 rounded-full ${api.categoryColor} mr-1.5`}></div>
                        <span className="text-xs text-muted-foreground">{api.category}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-muted/50">
                    {api.pricing}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {api.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {api.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex justify-between items-center border-t border-border mt-auto">
                <div className="flex items-center text-sm">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{api.rating}</span>
                  <span className="text-muted-foreground ml-1">({api.reviews})</span>
                </div>
                <Link 
                  to={`/api/${api.id}`}
                  className="text-primary text-sm hover:underline"
                >
                  Learn more
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAPIs;
