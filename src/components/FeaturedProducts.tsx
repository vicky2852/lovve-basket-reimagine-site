
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, isNew, isBestseller }) => {
  return (
    <div className="group relative card-hover">
      <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        {(isNew || isBestseller) && (
          <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-medium ${isNew ? 'bg-royal text-white' : 'bg-gold text-gray-900'}`}>
            {isNew ? 'New' : 'Bestseller'}
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <div className="flex gap-2">
            <Button size="sm" className="bg-white text-royal hover:bg-royal hover:text-white">
              <ShoppingBag size={16} />
            </Button>
            <Button size="sm" variant="outline" className="bg-white text-royal border-royal hover:bg-royal hover:text-white">
              <Heart size={16} />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-base font-medium">
          <Link to={`/product/${id}`} className="text-gray-800 hover:text-royal">
            {name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-600">₹{price.toLocaleString()}</p>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const products = [
    {
      id: '1',
      name: 'Lavender Dreams Gift Set',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1617118602566-cc3cffb36dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      isNew: true
    },
    {
      id: '2',
      name: 'Luxury Spa Basket',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      isBestseller: true
    },
    {
      id: '3',
      name: 'Gourmet Delights Collection',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1502636368208-9aa1af5b5456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
      id: '4',
      name: 'Premium Coffee Lover Set',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1611174225192-e7d39a88ee05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: '5',
      name: 'Chocolate Indulgence Box',
      price: 1699,
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
      id: '6',
      name: 'Wellness & Self-Care Bundle',
      price: 2799,
      image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      isNew: true
    },
    {
      id: '7',
      name: 'Wine & Cheese Celebration',
      price: 3599,
      image: 'https://images.unsplash.com/photo-1592845511665-454fa5339155?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      isBestseller: true
    },
    {
      id: '8',
      name: 'Artisan Tea Collection',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  return (
    <section className="section-padding bg-lavender/20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bestselling Gift Baskets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular curated gift baskets that have delighted countless recipients. Perfect for any occasion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              isNew={product.isNew}
              isBestseller={product.isBestseller}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="btn-primary">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
