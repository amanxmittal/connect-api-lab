
import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: "all", name: "All APIs" },
  { id: "ai", name: "AI & ML", color: "bg-purple-500" },
  { id: "finance", name: "Finance", color: "bg-green-500" },
  { id: "iot", name: "IoT", color: "bg-blue-500" },
  { id: "healthcare", name: "Healthcare", color: "bg-red-500" },
  { id: "communication", name: "Communication", color: "bg-yellow-500" },
  { id: "ecommerce", name: "E-Commerce", color: "bg-pink-500" },
  { id: "social", name: "Social", color: "bg-orange-500" },
];

const SearchSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  
  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Find the Perfect API for Your Project
          </h2>
          
          <div className="flex items-center mb-4 relative">
            <div className="absolute left-3 text-muted-foreground">
              <Search className="h-5 w-5" />
            </div>
            <Input 
              placeholder="Search APIs, categories, or keywords..." 
              className="pl-10 py-6 rounded-xl shadow-sm"
            />
            <Button 
              variant="ghost" 
              className="absolute right-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5" />
              <span className="sr-only">Show filters</span>
            </Button>
          </div>
          
          {showFilters && (
            <div className="bg-background shadow-md rounded-xl p-4 mb-4 border border-border animate-scale-in">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear all
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <label className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-muted">
                  <input 
                    type="checkbox" 
                    className="rounded text-primary" 
                    checked={selectedFilters.includes("free")}
                    onChange={() => toggleFilter("free")}
                  />
                  <span>Free Tier</span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-muted">
                  <input 
                    type="checkbox" 
                    className="rounded text-primary" 
                    checked={selectedFilters.includes("graphql")}
                    onChange={() => toggleFilter("graphql")}
                  />
                  <span>GraphQL</span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-muted">
                  <input 
                    type="checkbox" 
                    className="rounded text-primary" 
                    checked={selectedFilters.includes("rest")}
                    onChange={() => toggleFilter("rest")}
                  />
                  <span>REST</span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-muted">
                  <input 
                    type="checkbox" 
                    className="rounded text-primary" 
                    checked={selectedFilters.includes("oauth")}
                    onChange={() => toggleFilter("oauth")}
                  />
                  <span>OAuth Support</span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-muted">
                  <input 
                    type="checkbox" 
                    className="rounded text-primary" 
                    checked={selectedFilters.includes("sdk")}
                    onChange={() => toggleFilter("sdk")}
                  />
                  <span>SDK Available</span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-muted">
                  <input 
                    type="checkbox" 
                    className="rounded text-primary" 
                    checked={selectedFilters.includes("swagger")}
                    onChange={() => toggleFilter("swagger")}
                  />
                  <span>Swagger Docs</span>
                </label>
              </div>
            </div>
          )}
          
          {selectedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedFilters.map(filter => (
                <Badge key={filter} variant="outline" className="bg-muted/50 gap-1 pl-2">
                  {filter}
                  <button 
                    onClick={() => toggleFilter(filter)}
                    className="ml-1 rounded-full hover:bg-muted/80"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {filter} filter</span>
                  </button>
                </Badge>
              ))}
              <button 
                onClick={clearFilters}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Clear all
              </button>
            </div>
          )}
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start flex-wrap h-auto bg-transparent gap-2 mb-2 overflow-x-auto">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="rounded-full data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className={`w-2 h-2 rounded-full ${category.color} mr-2`}></span>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
