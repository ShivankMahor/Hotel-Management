import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaHotel } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    document.documentElement.className = darkTheme === true ? 'dark' : '';
  },[darkTheme])
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaHotel className="h-8 w-8 text-[var(--color-primary)]" />
            <span className="font-bold text-xl text-[var(--color-text)]">
              LuxeStay
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[var(--color-text)] hover:text-[var(--color-primary)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={()=>setDarkTheme(!darkTheme)}
              className="p-2 rounded-lg bg-[var(--color-background)] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            >
              {darkTheme ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>
            
            <button className="hidden md:block bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Login
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--color-surface)] border-t border-[var(--color-background)]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-3 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)] text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-4 bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};