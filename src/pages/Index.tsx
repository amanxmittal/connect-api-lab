
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import CategoryCards from "@/components/CategoryCards";
import HowItWorks from "@/components/HowItWorks";
import FeaturedAPIs from "@/components/FeaturedAPIs";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SearchSection />
      <CategoryCards />
      <HowItWorks />
      <FeaturedAPIs />
      <Testimonials />
    </Layout>
  );
};

export default Index;
