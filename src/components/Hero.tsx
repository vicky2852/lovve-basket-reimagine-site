
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-lavender/30 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight">
              Make Every <span className="text-royal">Moment</span> Special with Curated Gift Baskets
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thoughtfully crafted gift baskets for every occasion. Personal or corporate, make your gifting memorable with Lovve Basket.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary" size="lg">Shop Now</Button>
              <Button variant="outline" className="border-royal text-royal hover:bg-royal hover:text-white" size="lg">Customize Gifts</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-royal-300 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-royal-200 rounded-full opacity-60 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1562664377-709f2c337eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Luxury Gift Basket" 
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-[90%] md:max-w-[70%] text-center">
                <p className="text-royal-800 font-montserrat font-semibold text-xl md:text-2xl">
                  Luxury Gift Baskets for All Occasions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
