
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const CorporateSection = () => {
  return (
    <section className="py-16 bg-royal text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Corporate Gifting Solutions</h2>
            <p className="text-white/90 mb-6 text-lg">
              Make your business relationships stronger with our premium corporate gift baskets. Perfect for clients, employees, and partners.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Customized branding options',
                'Bulk order discounts',
                'Nationwide delivery',
                'Personal gift message service',
                'Dedicated account manager'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight size={18} className="text-royal-300 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-white text-royal hover:bg-lavender">Learn More</Button>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="Corporate Gift 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1607344645866-f7e8404adc25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Corporate Gift 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Corporate Gift 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1583760919595-becff0dff732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="Corporate Gift 4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
