
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import FeaturesBanner from '@/components/FeaturesBanner';
import Testimonials from '@/components/Testimonials';
import CorporateSection from '@/components/CorporateSection';
import CustomizeSection from '@/components/CustomizeSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturesBanner />
        <CategorySection />
        <FeaturedProducts />
        <CorporateSection />
        <CustomizeSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
