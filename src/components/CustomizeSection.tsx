
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const CustomizeSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Basket',
      description: 'Select a base basket size and style that fits your budget and preferences.'
    },
    {
      number: '02',
      title: 'Pick Your Products',
      description: 'Browse our curated selection of premium products to include in your gift basket.'
    },
    {
      number: '03',
      title: 'Add Personal Touch',
      description: 'Include a custom message, special packaging, or branding elements.'
    },
    {
      number: '04',
      title: 'Review & Checkout',
      description: 'Review your custom basket, confirm details, and place your order.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 order-2 lg:order-1">
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="mr-6 flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-royal-100 text-royal font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="btn-primary mt-10">Start Customizing</Button>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-royal-200 rounded-full opacity-50 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1566705457353-0f5678ca05d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Custom Gift Basket" 
                className="rounded-xl shadow-lg relative z-10"
              />
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-start">
                  <CheckCircle2 size={20} className="text-royal mr-2 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-sm">
                    "Creating a custom basket was so easy! The process was smooth and the result was amazing."
                  </p>
                </div>
                <p className="text-right text-xs font-medium text-gray-500 mt-2">— Aarav Kapoor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
