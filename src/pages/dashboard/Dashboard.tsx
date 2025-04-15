
import { Activity, Database, Users, Key, PieChart } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex items-center">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Activity className="text-primary h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-muted-foreground">Total API Calls</p>
              <h3 className="text-2xl font-bold">25,439</h3>
            </div>
          </div>
          <div className="mt-4 text-xs text-green-500">
            +12.5% from last month
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex items-center">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <Database className="text-blue-500 h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-muted-foreground">APIs Used</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </div>
          <div className="mt-4 text-xs text-green-500">
            +3 new this month
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex items-center">
            <div className="bg-yellow-500/10 p-3 rounded-lg">
              <Users className="text-yellow-500 h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-muted-foreground">Team Members</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            2 pending invitations
          </div>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <div className="flex items-center">
            <div className="bg-green-500/10 p-3 rounded-lg">
              <Key className="text-green-500 h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-muted-foreground">Active API Keys</p>
              <h3 className="text-2xl font-bold">5</h3>
            </div>
          </div>
          <div className="mt-4 text-xs text-amber-500">
            1 expiring soon
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold">API Usage Over Time</h3>
            <select className="text-sm bg-muted border border-border rounded px-2 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <PieChart className="mr-2 h-5 w-5" />
            <span>Usage chart will display here</span>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="font-semibold mb-6">Recent Activity</h3>
          
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-start pb-4 border-b border-border last:border-0 last:pb-0">
                <div className={`w-2 h-2 mt-2 rounded-full ${
                  i % 3 === 0 ? "bg-green-500" : i % 3 === 1 ? "bg-blue-500" : "bg-yellow-500"
                }`}></div>
                <div className="ml-3">
                  <p className="text-sm">
                    {i % 3 === 0 
                      ? "New API key generated" 
                      : i % 3 === 1 
                      ? "API rate limit reached" 
                      : "Team member added"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {`${i * 2} hours ago`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
