
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { t, language } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('products'), href: '/products' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="text-2xl font-bold text-amber-800">
              🌴 {language === 'ar' ? 'تمور تونس' : 'Dattes de Tunisie'}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-amber-800 bg-amber-50 border-b-2 border-amber-800'
                    : 'text-gray-700 hover:text-amber-800 hover:bg-amber-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher, Cart and Mobile Menu */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            <Link
              to="/order"
              className="relative p-2 text-gray-700 hover:text-amber-800 transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-amber-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-amber-800 bg-amber-50'
                      : 'text-gray-700 hover:text-amber-800 hover:bg-amber-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
