
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-background/90 py-20 sm:py-32">
      {/* Abstract background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Discover, Connect, and Scale
              </span>
              <br />
              <span>with APIs That Matter</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Find, test, and integrate the perfect APIs for your next project. 
              Streamline development and focus on what truly matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Browse APIs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 text-muted-foreground text-sm flex items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>1000+ APIs</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>Enterprise-grade</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"></div>
              <div className="relative bg-card border border-border rounded-xl shadow-xl overflow-hidden p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">A</div>
                    <span className="ml-2 font-semibold">AI Vision API</span>
                  </div>
                  <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full">Popular</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="h-3 w-full rounded bg-muted"></div>
                  <div className="h-3 w-5/6 rounded bg-muted"></div>
                  <div className="h-3 w-4/6 rounded bg-muted"></div>
                </div>
                
                <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
                  <code>
{`GET /api/v1/vision/analyze HTTP/1.1
Host: api.example.com
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "image_url": "https://example.com/image.jpg",
  "features": ["LABEL_DETECTION", "FACE_DETECTION"]
}`}
                  </code>
                </pre>
                
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <div className="flex -space-x-2">
                      <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                      <div className="h-6 w-6 rounded-full bg-green-500"></div>
                      <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <Link 
                    to="/api/vision" 
                    className="text-xs text-primary hover:underline flex items-center"
                  >
                    Try it free <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
