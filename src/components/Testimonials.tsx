
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "APIHub has completely transformed how we integrate third-party services. The authentication and access control features have saved us countless development hours.",
    name: "Sarah Johnson",
    title: "CTO at TechNova",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    quote: "Entity Locker's multi-entity organization support allowed us to seamlessly scale our API access management across teams. The analytics dashboard gives us insight we never had before.",
    name: "Michael Chen",
    title: "Lead Developer at DataFlow",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    quote: "The API marketplace helped us discover services we didn't even know existed. Integration was straightforward and the documentation is top-notch. Highly recommended!",
    name: "Alex Rodriguez",
    title: "Product Manager at Innovate Inc.",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Developers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers and companies who are already using our API marketplace to power their applications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-8 left-0 text-primary/10">
            <Quote className="w-20 h-20" />
          </div>

          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 absolute top-0 left-0 w-full ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                style={{ pointerEvents: index === activeIndex ? "auto" : "none" }}
              >
                <div className="bg-card rounded-xl shadow-lg p-8 md:p-10 border border-border">
                  <blockquote className="text-xl md:text-2xl font-medium mb-6">{testimonial.quote}</blockquote>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-muted overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial} 
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "bg-primary scale-125" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial} 
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
