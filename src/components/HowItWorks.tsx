
import { Key, Shield, Code, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Key,
    title: "API Key Generation",
    description: "Quickly generate unique API keys for secure access control across your applications."
  },
  {
    icon: Shield,
    title: "Access Management",
    description: "Set granular permissions, rate limits, and scopes for each API access point."
  },
  {
    icon: Code,
    title: "Integration",
    description: "Integrate APIs with clear documentation, SDKs and authentication methods."
  },
  {
    icon: BarChart,
    title: "Monitor & Scale",
    description: "Track usage, monitor performance, and scale your API consumption as needed."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entity Locker provides a comprehensive solution for API key generation, access control, and integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border border-border bg-card relative">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-6 h-0.5 bg-border transform translate-x-full">
                    <div className="absolute right-0 w-2 h-2 rounded-full bg-primary -mt-[3px]"></div>
                  </div>
                )}
                
                <div className="absolute top-4 left-6 w-8 h-8 rounded-full border-2 border-primary bg-background text-primary flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="max-w-4xl w-full bg-card rounded-xl shadow-lg overflow-hidden border border-border">
            <div className="bg-primary/5 p-6 border-b border-border">
              <h3 className="text-xl font-semibold mb-2">API Integration Example</h3>
              <p className="text-muted-foreground">See how easy it is to set up and use an API with Entity Locker</p>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="bg-muted p-4 rounded-lg">
                <code className="text-sm">
{`// 1. Install the SDK
npm install @entity-locker/client

// 2. Initialize the client
import { EntityLocker } from '@entity-locker/client';

const client = new EntityLocker({
  apiKey: 'your_api_key',
  organizationId: 'your_organization_id'
});

// 3. Authenticate and make API calls
async function fetchData() {
  const token = await client.getAccessToken({
    scope: ['read:data', 'write:data'],
    entity: 'user-123'
  });
  
  const response = await fetch('https://api.example.com/data', {
    headers: {
      'Authorization': \`Bearer \${token}\`
    }
  });
  
  return response.json();
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
