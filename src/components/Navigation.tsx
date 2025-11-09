import { Briefcase, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAdmin: boolean;
}

export default function Navigation({ currentPage, onNavigate, isAdmin }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = isAdmin
    ? [
      { id: 'admin-jobs', label: 'Manage Jobs' },
      { id: 'admin-candidates', label: 'Manage Teams' },
    ]
    : [
      { id: 'home', label: 'Home' },
      // { id: 'jobs', label: 'Jobs' },
      { id: 'services', label: 'Jobs' },
      { id: 'candidates', label: 'Teams' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ];

  return (
    <nav className="bg-white sticky top-0 z-50 h-[80px] mb-8 shadow-[0_4px_12px_-2px rgba(0,0,0,0.1)] rounded-b-[20px] transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo + Title */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="rounded-lg flex items-center justify-center w-14 h-14 overflow-hidden">
              <img
                src="/logo.png"
                alt="PTI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">PTI Job World</h1>
              <p className="text-[10px] sm:text-xs text-gray-600">Train, Consult, Place</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {item.label}
              </button>
            ))}
            {isAdmin && (
              <button
                onClick={() => onNavigate('home')}
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
              >
                Exit Admin
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${currentPage === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {item.label}
              </button>
            ))}
            {isAdmin && (
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Exit Admin
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}