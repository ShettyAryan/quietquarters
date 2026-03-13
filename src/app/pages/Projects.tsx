import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
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

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Bandra West Residence',
      location: 'Mumbai, Maharashtra',
      year: '2025',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjBtaW5pbWFsJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzE0MTE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Lutyens Estate',
      location: 'New Delhi, Delhi',
      year: '2025',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlldCUyMGx1eHVyeSUyMGxpdmluZyUyMHJvb20lMjBuZXV0cmFsJTIwdG9uZXN8ZW58MXx8fHwxNzcxNDExNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Whitefield Villa',
      location: 'Bengaluru, Karnataka',
      year: '2024',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1765862835260-47843a7bba45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwYmVkcm9vbSUyMGNhbG18ZW58MXx8fHwxNzcxNDExNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Alibaug Sanctuary',
      location: 'Alibaug, Maharashtra',
      year: '2024',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1756199641043-c466047af08b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxNDA5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Juhu Penthouse',
      location: 'Mumbai, Maharashtra',
      year: '2024',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjBtaW5pbWFsJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzE0MTE0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Goa Beach Villa',
      location: 'Goa, Goa',
      year: '2023',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlldCUyMGx1eHVyeSUyMGxpdmluZyUyMHJvb20lMjBuZXV0cmFsJTIwdG9uZXN8ZW58MXx8fHwxNzcxNDExNDYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-16 bg-[#F6F4F1]" style={sectionStyle}>
        <div className="max-w-[1200px] mx-auto text-center w-full">
          <h1
            className="mb-8 leading-[1.15]"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              color: '#4A3A33',
              letterSpacing: '0.02em',
            }}
          >
            <LetterFadeUp text="Projects" delay={0.2} duration={0.7} />
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-[700px] mx-auto leading-[1.8]"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.25rem',
              color: '#1C1C1C',
            }}
          >
            A curated selection of residential and commercial spaces that embody our commitment to refined luxury.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid - Panel 1 */}
      <section className="flex items-center justify-center bg-white px-8 md:px-12 lg:px-16" style={sectionStyle}>
        <div className="max-w-[1300px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <FadeInSection key={project.id} delay={index * 0.1}>
                <Link to={`/projects/${project.id}`} className="group block">
                  <div className="relative overflow-hidden mb-5 aspect-[3/4]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#2F5C67]/0 group-hover:bg-[#2F5C67]/20 transition-all duration-700"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3
                      className="text-xl mb-2 group-hover:text-[#2F5C67] transition-colors duration-500"
                      style={{ fontFamily: 'var(--font-serif)', color: '#4A3A33' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs uppercase tracking-[0.2em] opacity-60"
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

      {/* Projects Grid - Panel 2 */}
      <section className="flex items-center justify-center bg-[#E7E5E2] px-8 md:px-12 lg:px-16" style={sectionStyle}>
        <div className="max-w-[1300px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(3, 6).map((project, index) => (
              <FadeInSection key={project.id} delay={index * 0.1}>
                <Link to={`/projects/${project.id}`} className="group block">
                  <div className="relative overflow-hidden mb-5 aspect-[3/4]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#2F5C67]/0 group-hover:bg-[#2F5C67]/20 transition-all duration-700"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3
                      className="text-xl mb-2 group-hover:text-[#2F5C67] transition-colors duration-500"
                      style={{ fontFamily: 'var(--font-serif)', color: '#4A3A33' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs uppercase tracking-[0.2em] opacity-60"
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

      {/* CTA */}
      <section className="bg-[#4A3A33] flex items-center justify-center px-8 md:px-12 lg:px-16" style={sectionStyle}>
        <div className="max-w-[800px] mx-auto text-center w-full">
          <FadeInSection>
            <h2
              className="mb-8 text-[#F6F4F1]"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              Have a Project in Mind?
            </h2>
            <p
              className="mb-12 leading-[1.8] text-[#F6F4F1]/80"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem' }}
            >
              We'd love to hear about your vision and explore how we can bring it to life.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 border border-[#F6F4F1] text-[#F6F4F1] text-xs uppercase tracking-[0.3em] hover:bg-[#F6F4F1] hover:text-[#4A3A33] transition-all duration-500"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get in Touch
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}