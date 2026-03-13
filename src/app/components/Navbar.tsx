import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import logoImage from "../../assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Track horizontal scroll from the horizontal-scroll-container
      const container = document.querySelector('.horizontal-scroll-container');
      if (container) {
        setScrolled(container.scrollLeft > 100);
      }
    };

    const container = document.querySelector('.horizontal-scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 pointer-events-none ${
          scrolled ? 'bg-[#F6F4F1] shadow-sm' : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 py-6 md:py-8 pointer-events-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 transition-all duration-700 hover:opacity-70"
            >
              <img 
                src={logoImage} 
                alt="Quiet Quarters Logo" 
                className={`w-8 h-8 transition-all duration-700 ${
                  scrolled ? 'opacity-90' : 'opacity-100 brightness-0 invert'
                }`}
              />
              <span 
                className={`text-lg md:text-xl tracking-wide transition-all duration-700 ${
                  scrolled ? 'text-[#4A3A33]' : 'text-white'
                }`}
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                QUIET QUARTERS
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link
                to="/about"
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-700 ${
                  location.pathname === '/about' 
                    ? 'text-[#2F5C67]' 
                    : scrolled
                      ? 'text-[#4A3A33] hover:text-[#2F5C67]' 
                      : 'text-white hover:text-white/70'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-700 ${
                  location.pathname === '/services' 
                    ? 'text-[#2F5C67]' 
                    : scrolled
                      ? 'text-[#4A3A33] hover:text-[#2F5C67]' 
                      : 'text-white hover:text-white/70'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-700 ${
                  location.pathname.startsWith('/projects') 
                    ? 'text-[#2F5C67]' 
                    : scrolled
                      ? 'text-[#4A3A33] hover:text-[#2F5C67]' 
                      : 'text-white hover:text-white/70'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-700 ${
                  location.pathname === '/contact' 
                    ? 'text-[#2F5C67]' 
                    : scrolled
                      ? 'text-[#4A3A33] hover:text-[#2F5C67]' 
                      : 'text-white hover:text-white/70'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden transition-colors ${
                scrolled ? 'text-[#4A3A33]' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#4A3A33] z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ paddingTop: '100px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12 px-8">
          <Link
            to="/about"
            className="text-2xl text-[#F6F4F1] hover:text-[#2F5C67] transition-colors"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-2xl text-[#F6F4F1] hover:text-[#2F5C67] transition-colors"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="text-2xl text-[#F6F4F1] hover:text-[#2F5C67] transition-colors"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-2xl text-[#F6F4F1] hover:text-[#2F5C67] transition-colors"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}