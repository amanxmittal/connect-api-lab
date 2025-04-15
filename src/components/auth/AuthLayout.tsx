
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  authType: "login" | "register";
}

const AuthLayout = ({ children, title, description, authType }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-primary to-accent p-12 flex-col justify-between relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <Link to="/" className="text-white font-bold text-2xl">APIHub</Link>
          <h1 className="mt-12 text-4xl font-bold text-white">API Marketplace for Modern Developers</h1>
          <p className="mt-4 text-lg text-white/80">
            Discover, connect, and scale with APIs that matter for your next project.
          </p>
        </div>
        
        <div className="relative z-10 space-y-6 text-white/80">
          <div className="flex items-start space-x-3">
            <div className="mt-1">✓</div>
            <div>
              <h3 className="font-medium text-white">Access to 1000+ APIs</h3>
              <p>Find the perfect API for any use case across dozens of categories</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="mt-1">✓</div>
            <div>
              <h3 className="font-medium text-white">Secure Authentication</h3>
              <p>Entity Locker provides secure, role-based access control</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="mt-1">✓</div>
            <div>
              <h3 className="font-medium text-white">Comprehensive Analytics</h3>
              <p>Monitor API usage, performance metrics, and cost optimization</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-muted-foreground mt-2">{description}</p>
          </div>
          
          {children}
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            {authType === "login" ? (
              <>
                Don't have an account?{" "}
                <Link to="/register" className="text-primary font-medium hover:underline">
                  Create one
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
