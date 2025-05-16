
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, rating, image }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        {/* Rating stars */}
        <div className="flex text-yellow-500 mr-2">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < rating ? "currentColor" : "none"} 
              className={i < rating ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
        </div>
        <p className="text-gray-600 text-sm">{rating}.0</p>
      </div>
      <p className="text-gray-700 italic mb-6">"{content}"</p>
      <div className="flex items-center">
        <img 
          src={image}
          alt={name} 
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Regular Customer',
      content: 'The gift basket I sent to my sister was absolutely beautiful! Everything was perfectly arranged and of excellent quality. Will definitely order again.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
      name: 'Vikram Malhotra',
      role: 'Corporate Client',
      content: 'We ordered 50 custom gift baskets for our employees, and the service was exceptional. The team at Lovve Basket was professional and delivered everything on time.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Aisha Patel',
      role: 'First-time Buyer',
      content: 'I was looking for a special anniversary gift and found Lovve Basket. The presentation was stunning, and my husband loved all the items in the basket.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our happy customers about their experience with Lovve Basket's curated gift solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
