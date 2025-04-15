
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, BarChart3, CircuitBoard, Stethoscope, MessageCircle, ShoppingCart, Users } from "lucide-react";

const categories = {
  "ai": {
    name: "AI & Machine Learning",
    icon: Bot,
    description: "Discover powerful APIs for image recognition, language processing, chatbots, and other AI services.",
    color: "bg-purple-500",
    count: 124
  },
  "finance": {
    name: "Finance",
    icon: BarChart3,
    description: "Access APIs for payment processing, banking operations, cryptocurrency, and financial data.",
    color: "bg-green-500",
    count: 87
  },
  "iot": {
    name: "IoT",
    icon: CircuitBoard,
    description: "Connect and manage IoT devices, handle sensor data, and build smart home integrations.",
    color: "bg-blue-500",
    count: 56
  },
  "healthcare": {
    name: "Healthcare",
    icon: Stethoscope,
    description: "Integrate with electronic health records, medical data systems, and patient management tools.",
    color: "bg-red-500",
    count: 42
  },
  "communication": {
    name: "Communication",
    icon: MessageCircle,
    description: "Implement SMS, voice, email, chat and messaging functionalities in your applications.",
    color: "bg-yellow-500",
    count: 93
  },
  "ecommerce": {
    name: "E-Commerce",
    icon: ShoppingCart,
    description: "Build online stores with product catalog, shopping cart, and inventory management APIs.",
    color: "bg-pink-500",
    count: 68
  },
  "social": {
    name: "Social",
    icon: Users,
    description: "Add authentication, user profiles, and social media integration to your apps.",
    color: "bg-orange-500",
    count: 75
  }
};

// Mock API data
const mockApis = [
  {
    id: "1",
    name: "Vision API",
    provider: "AICorp",
    description: "Advanced computer vision for object detection, face recognition, and image labeling.",
    price: "Free tier available",
    rating: 4.8,
    category: "ai"
  },
  {
    id: "2",
    name: "NLP Master",
    provider: "TextGenius",
    description: "Natural language processing for sentiment analysis, entity extraction, and text classification.",
    price: "Pay per request",
    rating: 4.5,
    category: "ai"
  },
  {
    id: "3",
    name: "VoiceAI",
    provider: "SpeechTech",
    description: "Convert speech to text and text to speech with support for 50+ languages.",
    price: "From $0.005/minute",
    rating: 4.7,
    category: "ai"
  },
  {
    id: "4",
    name: "Payment Gateway",
    provider: "SecurePay",
    description: "Process credit cards, bank transfers, and digital wallets with enterprise-grade security.",
    price: "2.9% + $0.30 per transaction",
    rating: 4.9,
    category: "finance"
  },
  {
    id: "5",
    name: "Stock Data",
    provider: "MarketInsight",
    description: "Real-time and historical stock market data with technical indicators.",
    price: "Subscription",
    rating: 4.6,
    category: "finance"
  }
];

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? categories[categoryId as keyof typeof categories] : null;
  
  // Filter APIs by category
  const apis = mockApis.filter(api => api.category === categoryId);
  
  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold">Category not found</h2>
          <p className="text-muted-foreground mt-2">The category you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }
  
  const CategoryIcon = category.icon;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
          <div className={`w-16 h-16 rounded-xl ${category.color} text-white flex items-center justify-center`}>
            <CategoryIcon className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{category.name}</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">{category.description}</p>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Available APIs ({apis.length})</h2>
              
              {apis.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {apis.map((api) => (
                    <Card key={api.id} className="hover:border-primary/50 transition-colors">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{api.name}</CardTitle>
                          <span className="bg-green-500/10 text-green-600 text-xs px-2 py-1 rounded-full">
                            {api.rating} ★
                          </span>
                        </div>
                        <CardDescription>{api.provider}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{api.description}</p>
                        <p className="mt-3 text-sm font-medium">{api.price}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">Documentation</Button>
                        <Button size="sm">Try it</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <p className="text-muted-foreground">No APIs found in this category yet.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>Filter APIs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Pricing</label>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="free" className="mr-2" />
                      <label htmlFor="free" className="text-sm">Free tier</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="paid" className="mr-2" />
                      <label htmlFor="paid" className="text-sm">Paid</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Authentication</label>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="apikey" className="mr-2" />
                      <label htmlFor="apikey" className="text-sm">API Key</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="oauth" className="mr-2" />
                      <label htmlFor="oauth" className="text-sm">OAuth</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rating</label>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input type="checkbox" id="4plus" className="mr-2" />
                      <label htmlFor="4plus" className="text-sm">4+ stars</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="3plus" className="mr-2" />
                      <label htmlFor="3plus" className="text-sm">3+ stars</label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryDetail;
