
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Lovve <span className="text-royal-400">Basket</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Curating memorable gifting experiences with premium gift baskets for all occasions. Personal or corporate, we help you celebrate life's special moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-royal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Shop', path: '/shop' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'FAQs', path: '/faqs' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-royal-400 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Gift Categories</h3>
            <ul className="space-y-2">
              {[
                { name: 'Birthday Gifts', path: '/shop/birthday' },
                { name: 'Anniversary Gifts', path: '/shop/anniversary' },
                { name: 'Corporate Gifts', path: '/shop/corporate' },
                { name: 'Occasion Gifts', path: '/shop/occasion' },
                { name: 'Customized Gifts', path: '/customize' },
              ].map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.path} 
                    className="text-gray-400 hover:text-royal-400 transition-colors inline-block"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-royal-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Gift Street, Luxury Avenue, Mumbai 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-royal-400" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-royal-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-royal-400" />
                <a href="mailto:hello@lovvebasket.com" className="text-gray-400 hover:text-royal-400 transition-colors">
                  hello@lovvebasket.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lovve Basket. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <a href="#" className="hover:text-royal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-royal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-royal-400 transition-colors">Shipping Policy</a>
            <a href="#" className="hover:text-royal-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
