import { Link } from 'react-router';

const sectionStyle = { 
  minWidth: '100vw', 
  width: '100vw', 
  height: '100vh', 
  flexShrink: 0, 
  scrollSnapAlign: 'start' as const
};

export function Footer() {
  return (
    <footer 
      className="flex items-center bg-[#4A3A33] text-[#F6F4F1] px-8 md:px-12 lg:px-16"
      style={sectionStyle}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div>
            <h3 
              className="text-2xl mb-6 tracking-wide" 
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Quiet Quarters
            </h3>
            <p className="text-sm leading-relaxed opacity-70">
              Where design meets stillness
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 
              className="text-xs uppercase tracking-[0.25em] mb-6"
              style={{ fontFamily: 'var(--font-sans)', color: '#F6F4F1' }}
            >
              Locations
            </h4>
            <div className="space-y-3 text-sm opacity-80">
              <p>Mumbai</p>
              <p>Delhi</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="text-xs uppercase tracking-[0.2em] mb-6 opacity-50"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Connect
            </h4>
            <div className="space-y-3 text-sm opacity-80">
              <p>
                <a 
                  href="mailto:hello@quietquarters.com" 
                  className="hover:text-[#2F5C67] transition-colors duration-500"
                >
                  hello@quietquarters.com
                </a>
              </p>
              <p>
                <a 
                  href="https://instagram.com/quietquarters" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#2F5C67] transition-colors duration-500"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F6F4F1]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Quiet Quarters. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs opacity-50">
            <Link to="/about" className="hover:opacity-100 transition-opacity duration-500">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity duration-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}