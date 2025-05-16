
import React from 'react';
import { ShoppingBag, Truck, RotateCcw, Gift, Phone } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 p-4 bg-lavender rounded-full text-royal">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const FeaturesBanner = () => {
  const features = [
    {
      icon: <ShoppingBag size={24} />,
      title: 'Premium Quality',
      description: 'We source only the highest quality products for our gift baskets.'
    },
    {
      icon: <Gift size={24} />,
      title: 'Custom Gifting',
      description: 'Create personalized gifts tailored to your recipient\'s preferences.'
    },
    {
      icon: <Truck size={24} />,
      title: 'Fast Delivery',
      description: 'Nationwide delivery with express shipping options available.'
    },
    {
      icon: <RotateCcw size={24} />,
      title: 'Easy Returns',
      description: '15-day hassle-free return policy for your peace of mind.'
    },
    {
      icon: <Phone size={24} />,
      title: '24/7 Support',
      description: 'Our customer service team is always ready to assist you.'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;
