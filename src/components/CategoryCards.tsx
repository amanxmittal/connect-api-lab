
import { Link } from "react-router-dom";
import { Bot, BarChart3, CircuitBoard, Stethoscope, MessageCircle, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const categories = [
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: Bot,
    description: "Image recognition, language processing, chatbots, and AI services.",
    color: "bg-purple-500",
    count: 124
  },
  {
    id: "finance",
    name: "Finance",
    icon: BarChart3,
    description: "Payment processing, banking, crypto, and financial data APIs.",
    color: "bg-green-500",
    count: 87
  },
  {
    id: "iot",
    name: "IoT",
    icon: CircuitBoard,
    description: "Device management, sensor data, smart home integrations.",
    color: "bg-blue-500",
    count: 56
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    description: "Electronic health records, medical data, patient management.",
    color: "bg-red-500",
    count: 42
  },
  {
    id: "communication",
    name: "Communication",
    icon: MessageCircle,
    description: "SMS, voice, email, chat and messaging service APIs.",
    color: "bg-yellow-500",
    count: 93
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingCart,
    description: "Product catalogs, shopping carts, inventory management.",
    color: "bg-pink-500",
    count: 68
  },
  {
    id: "social",
    name: "Social",
    icon: Users,
    description: "Authentication, profiles, social media integration.",
    color: "bg-orange-500",
    count: 75
  }
];

const CategoryCards = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse API Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of APIs organized by category to find the right solutions for your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              to={`/category/${category.id}`} 
              key={category.id}
              className="group"
            >
              <Card className="overflow-hidden border border-border h-full transition-all duration-300 hover:shadow-md hover:border-primary/50 hover:translate-y-[-4px]">
                <CardContent className="p-6">
                  <div className={`w-10 h-10 rounded-lg ${category.color} text-white flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{category.count} APIs</span>
                  <span className="text-primary text-sm group-hover:underline">View all</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
