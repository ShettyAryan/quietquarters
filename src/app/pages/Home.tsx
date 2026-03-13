import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LetterFadeUp } from '../components/LetterFadeUp';

const sectionStyle = { 
  minWidth: '100vw', 
  width: '100vw', 
  height: '100vh', 
  flexShrink: 0,
};

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ 
        duration: 1.6, 
        delay,
        ease: [0.19, 1, 0.22, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  const projects = [
    {
      id: 1,
      title: 'Bandra West Residence',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjBtaW5pbWFsJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzE0MTE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Lutyens Estate',
      location: 'New Delhi, Delhi',
      image: 'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlldCUyMGx1eHVyeSUyMGxpdmluZyUyMHJvb20lMjBuZXV0cmFsJTIwdG9uZXN8ZW58MXx8fHwxNzcxNDExNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Whitefield Villa',
      location: 'Bengaluru, Karnataka',
      image: 'https://images.unsplash.com/photo-1765862835260-47843a7bba45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwYmVkcm9vbSUyMGNhbG18ZW58MXx8fHwxNzcxNDExNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Alibaug Sanctuary',
      location: 'Alibaug, Maharashtra',
      image: 'https://images.unsplash.com/photo-1756199641043-c466047af08b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxNDA5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const heroImages = [
    'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlldCUyMGx1eHVyeSUyMGxpdmluZyUyMHJvb20lMjBuZXV0cmFsJTIwdG9uZXN8ZW58MXx8fHwxNzcxNDExNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjBtaW5pbWFsJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzE0MTE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1756199641043-c466047af08b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxNDA5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1765862835260-47843a7bba45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwYmVkcm9vbSUyMGNhbG18ZW58MXx8fHwxNzcxNDExNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'cubic-bezier(0.19, 1, 0.22, 1)',
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <>
      {/* Hero Section with Carousel */}
      <section 
        className="relative flex items-center justify-center overflow-hidden"
        style={sectionStyle}
      >
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <Slider {...sliderSettings} className="h-full hero-carousel">
            {heroImages.map((image, index) => (
              <div key={index} className="h-screen">
                <div 
                  className="h-screen bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${image}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/35 to-[#2F5C67]/30"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8 leading-[1.15]"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.5rem, 8vw, 8rem)',
              letterSpacing: '0.02em',
            }}
          >
            <LetterFadeUp text="QUIET QUARTERS" delay={0.4} duration={0.6} staggerDelay={0.04} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl mb-12 tracking-wide"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}
          >
            Interior Design for the Discerning
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Link
              to="/projects"
              className="group relative inline-block overflow-hidden"
            >
              <span className="relative block px-12 py-4 border border-white text-white text-[10px] uppercase tracking-[0.35em] transition-all duration-700 group-hover:text-white"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></span>
                <span className="relative">View Projects</span>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Custom Carousel Dots Styling */}
        <style>{`
          .hero-carousel .slick-dots {
            bottom: 40px;
            z-index: 20;
          }
          .hero-carousel .slick-dots li button:before {
            font-size: 10px;
            color: rgba(246, 244, 241, 0.5);
            opacity: 1;
          }
          .hero-carousel .slick-dots li.slick-active button:before {
            color: rgba(246, 244, 241, 1);
            opacity: 1;
          }
          .hero-carousel .slick-dots li button:hover:before {
            color: rgba(246, 244, 241, 0.8);
          }
          .hero-carousel .slick-slide > div {
            height: 100vh;
          }
        `}</style>
      </section>

      {/* Philosophy Section */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-16 bg-[#E7E5E2]" style={sectionStyle}>
        <div className="max-w-[1000px] mx-auto text-center w-full relative">
          {/* Decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-[#2F5C67]/20"></div>
          
          <FadeInSection>
            <h2 
              className="mb-12 leading-[1.2]"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                color: '#4A3A33',
                letterSpacing: '0.02em'
              }}
            >
              <LetterFadeUp text="Spaces That Speak Softly" delay={0.2} />
            </h2>
            <p 
              className="leading-[1.9] max-w-[700px] mx-auto"
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '1.125rem',
                color: '#1C1C1C'
              }}
            >
              True luxury exists in the details others overlook. We design interiors that feel effortlessly cohesive, where every texture, line, and material has been chosen with intention. Our work is calm, considered, and completely personal to you.
            </p>
          </FadeInSection>
          
          {/* Decorative line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-[#2F5C67]/20"></div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-16 bg-white" style={sectionStyle}>
        <div className="max-w-[1300px] mx-auto w-full">
          <FadeInSection>
            <h2 
              className="mb-12 text-center"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                color: '#4A3A33',
                letterSpacing: '0.02em'
              }}
            >
              <LetterFadeUp text="Selected Work" delay={0.2} />
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <FadeInSection key={project.id} delay={index * 0.1}>
                <Link 
                  to={`/projects/${project.id}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="text-center">
                    <h3 
                      className="text-lg mb-1"
                      style={{ fontFamily: 'var(--font-serif)', color: '#4A3A33' }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-xs uppercase tracking-wider opacity-60"
                      style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}
                    >
                      {project.location}
                    </p>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-16 bg-[#F6F4F1]" style={sectionStyle}>
        <div className="max-w-[1200px] mx-auto w-full">
          <FadeInSection>
            <h2 
              className="mb-16 text-center"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                color: '#4A3A33',
                letterSpacing: '0.02em'
              }}
            >
              <LetterFadeUp text="Our Services" delay={0.2} />
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeInSection delay={0}>
              <div className="text-center">
                <h3 
                  className="mb-4"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1.75rem',
                    color: '#4A3A33'
                  }}
                >
                  Full-Service Design
                </h3>
                <p 
                  className="leading-[1.8]"
                  style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '1rem',
                    color: '#1C1C1C'
                  }}
                >
                  From initial vision to final installation. We handle architecture, furnishings, art curation, and every detail in between.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="text-center">
                <h3 
                  className="mb-4"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1.75rem',
                    color: '#4A3A33'
                  }}
                >
                  Architectural Renovation
                </h3>
                <p 
                  className="leading-[1.8]"
                  style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '1rem',
                    color: '#1C1C1C'
                  }}
                >
                  Reimagine your space with structural changes that enhance flow, light, and livability.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="text-center">
                <h3 
                  className="mb-4"
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1.75rem',
                    color: '#4A3A33'
                  }}
                >
                  Custom Furnishings
                </h3>
                <p 
                  className="leading-[1.8]"
                  style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '1rem',
                    color: '#1C1C1C'
                  }}
                >
                  Bespoke pieces crafted by master artisans. Each one designed exclusively for your space.
                </p>
              </div>
            </FadeInSection>
          </div>

          <div className="text-center mt-16">
            <FadeInSection delay={0.3}>
              <Link
                to="/services"
                className="group relative inline-block overflow-hidden"
              >
                <span className="relative block px-12 py-4 border border-[#4A3A33] text-[#4A3A33] text-[10px] uppercase tracking-[0.35em] transition-all duration-700 group-hover:text-[#F6F4F1]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <span className="absolute inset-0 bg-[#4A3A33] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></span>
                  <span className="relative">Explore All Services</span>
                </span>
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-16 bg-[#4A3A33]" style={sectionStyle}>
        <div className="max-w-[900px] mx-auto text-center w-full">
          <FadeInSection>
            <h2 
              className="mb-8 leading-[1.2]"
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#F6F4F1',
                letterSpacing: '0.02em'
              }}
            >
              <LetterFadeUp text="Begin Your Project" delay={0.2} />
            </h2>
            <p 
              className="mb-12 leading-[1.8] max-w-[600px] mx-auto"
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '1.125rem',
                color: '#E7E5E2'
              }}
            >
              Whether renovating a full residence or refining a single room, we approach every project with the same level of care and expertise.
            </p>
            <Link
              to="/contact"
              className="group relative inline-block overflow-hidden"
            >
              <span className="relative block px-12 py-4 border border-[#F6F4F1] text-[#F6F4F1] text-[10px] uppercase tracking-[0.35em] transition-all duration-700 group-hover:text-[#4A3A33]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="absolute inset-0 bg-[#F6F4F1] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></span>
                <span className="relative">Get in Touch</span>
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}