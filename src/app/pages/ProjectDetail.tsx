import { useParams, Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { LetterFadeUp } from '../components/LetterFadeUp';

const sectionStyle = {
  minWidth: '100vw',
  width: '100vw',
  height: '100vh',
  flexShrink: 0,
  scrollSnapAlign: 'start' as const,
};

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 1, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export function ProjectDetail() {
  const { id } = useParams();

  // Mock project data
  const projectData: Record<string, any> = {
    '1': {
      title: 'Bandra West Residence',
      location: 'Mumbai, Maharashtra',
      year: '2025',
      category: 'Residential',
      description: 'A sophisticated Bandra residence where classical architecture meets contemporary restraint. Every detail was carefully considered to create spaces that feel both timeless and refreshingly modern.',
      images: [
        'https://images.unsplash.com/photo-1757439402190-99b73ac8e807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtaW5pbWFsfGVufDF8fHx8MTc3MTQwOTY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTQwOTY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZW5kJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBkaW5pbmd8ZW58MXx8fHwxNzcxNDA5NjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    '2': {
      title: 'Lutyens Estate',
      location: 'New Delhi, Delhi',
      year: '2024',
      category: 'Residential',
      description: 'A sprawling estate designed to blur the boundaries between indoor and outdoor living. Natural materials and warm tones create an atmosphere of relaxed elegance.',
      images: [
        'https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTQwOTY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1756199641043-c466047af08b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxNDA5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1766808983409-f4282703f546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3MTQwOTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    '3': {
      title: 'Whitefield Villa',
      location: 'Bengaluru, Karnataka',
      year: '2025',
      category: 'Residential',
      description: 'An open-concept villa that celebrates modern architecture softened by refined furnishings and natural materials.',
      images: [
        'https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZW5kJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBkaW5pbmd8ZW58MXx8fHwxNzcxNDA5NjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1757439402190-99b73ac8e807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtaW5pbWFsfGVufDF8fHx8MTc3MTQwOTY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTQwOTY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    '4': {
      title: 'Alibaug Sanctuary',
      location: 'Alibaug, Maharashtra',
      year: '2024',
      category: 'Residential',
      description: 'A coastal retreat where every window frames the Arabian Sea, and every material echoes the organic textures of the coast.',
      images: [
        'https://images.unsplash.com/photo-1756199641043-c466047af08b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxNDA5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1766808983409-f4282703f546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3MTQwOTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1757439402190-99b73ac8e807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtaW5pbWFsfGVufDF8fHx8MTc3MTQwOTY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    '5': {
      title: 'Juhu Penthouse',
      location: 'Mumbai, Maharashtra',
      year: '2025',
      category: 'Residential',
      description: 'A sky-high residence with sweeping ocean views, designed with a palette of warm neutrals and sophisticated textures.',
      images: [
        'https://images.unsplash.com/photo-1766808983409-f4282703f546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3MTQwOTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTQwOTY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1756199641043-c466047af08b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxNDA5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    '6': {
      title: 'Goa Beach Villa',
      location: 'Goa, Goa',
      year: '2023',
      category: 'Residential',
      description: 'Modern luxury meets coastal charm in this meticulously designed beach villa.',
      images: [
        'https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZW5kJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBkaW5pbmd8ZW58MXx8fHwxNzcxNDA5NjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1757439402190-99b73ac8e807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtaW5pbWFsfGVufDF8fHx8MTc3MTQwOTY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1766808983409-f4282703f546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3MTQwOTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
  };

  const project = projectData[id || '1'] || projectData['1'];

  return (
    <>
      {/* Hero Image */}
      <section className="flex items-center justify-center bg-black" style={sectionStyle}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Project Info */}
      <section className="flex items-center px-8 md:px-12 lg:px-16 bg-[#F6F4F1]" style={sectionStyle}>
        <FadeInSection>
          <div className="max-w-[1000px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <p
                  className="text-xs uppercase tracking-[0.2em] mb-2 opacity-60"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}
                >
                  Project
                </p>
                <h1
                  className="text-4xl md:text-5xl"
                  style={{ fontFamily: 'var(--font-serif)', color: '#4A3A33' }}
                >
                  <LetterFadeUp text={project.title} delay={0.1} duration={0.6} />
                </h1>
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-[0.2em] mb-2 opacity-60"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}
                >
                  Location
                </p>
                <p
                  className="text-xl"
                  style={{ fontFamily: 'var(--font-sans)', color: '#4A3A33' }}
                >
                  {project.location}
                </p>
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-[0.2em] mb-2 opacity-60"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}
                >
                  Year
                </p>
                <p
                  className="text-xl"
                  style={{ fontFamily: 'var(--font-sans)', color: '#4A3A33' }}
                >
                  {project.year}
                </p>
              </div>
            </div>

            <p
              className="leading-[1.8] max-w-[700px]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
            >
              {project.description}
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Image Gallery - Each image as a separate panel */}
      {project.images.slice(1).map((image: string, index: number) => (
        <section key={index} className="flex items-center justify-center bg-white px-8 md:px-12 lg:px-16" style={sectionStyle}>
          <FadeInSection delay={0}>
            <div className="max-w-[1200px] mx-auto">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 2}`}
                className="w-full h-auto object-cover max-h-[80vh]"
              />
            </div>
          </FadeInSection>
        </section>
      ))}

      {/* Navigation */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-16 bg-[#E7E5E2]" style={sectionStyle}>
        <div className="max-w-[900px] mx-auto w-full text-center">
          <FadeInSection>
            <h2
              className="mb-8"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#4A3A33',
              }}
            >
              <LetterFadeUp text="Ready to Begin?" delay={0.2} />
            </h2>
            <p
              className="mb-12 leading-[1.8] max-w-[600px] mx-auto"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
            >
              Let's discuss your vision and explore how we can bring it to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="group relative inline-block overflow-hidden"
              >
                <span className="relative block px-14 py-5 border border-[#4A3A33] text-[#4A3A33] text-xs uppercase tracking-[0.35em] transition-all duration-700 group-hover:text-[#F6F4F1]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <span className="absolute inset-0 bg-[#4A3A33] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></span>
                  <span className="relative">Start a Project</span>
                </span>
              </a>

              <Link
                to="/projects"
                className="text-xs uppercase tracking-[0.3em] text-[#4A3A33] hover:text-[#2F5C67] transition-colors duration-700 border-b border-[#4A3A33]/20 pb-2"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                View All Projects
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}