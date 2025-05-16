
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate successful subscription
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-12 bg-lavender/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest collections, exclusive offers, and gifting tips.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button type="submit" className="bg-royal hover:bg-royal-800">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
