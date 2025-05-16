
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const menuItems = [
    { title: "Home", link: "/" },
    { 
      title: "Shop", 
      link: "/shop",
      dropdown: [
        { title: "Birthday Gifts", link: "/shop/birthday" },
        { title: "Anniversary Gifts", link: "/shop/anniversary" },
        { title: "Corporate Gifts", link: "/shop/corporate" },
        { title: "Occasion Gifts", link: "/shop/occasion" },
      ]
    },
    { title: "Customize", link: "/customize" },
    { title: "Corporate Gifting", link: "/corporate" },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-extrabold text-royal">
              Lovve <span className="text-royal-700">Basket</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button 
                  onClick={() => item.dropdown && toggleDropdown(item.title)}
                  className="px-3 py-2 text-gray-700 hover:text-royal flex items-center"
                >
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </button>
                
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-60 z-50">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link 
                        key={subIndex}
                        to={subItem.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-royal-100 hover:text-royal transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-royal transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-royal transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-royal transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-royal text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-4">
            <button className="p-2 text-gray-700">
              <ShoppingBag size={20} />
            </button>
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-[500px]' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="flex justify-between items-center w-full py-3 text-gray-700"
                    >
                      {item.title}
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.title ? 'max-h-60' : 'max-h-0'}`}>
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          className="block py-2 pl-4 text-gray-600 hover:text-royal"
                          onClick={toggleMenu}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className="block py-3 text-gray-700 hover:text-royal"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 flex space-x-4">
              <Button variant="outline" size="sm" className="flex-1">Sign In</Button>
              <Button className="flex-1 bg-royal hover:bg-royal-800">Sign Up</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
