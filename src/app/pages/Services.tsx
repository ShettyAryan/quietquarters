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

export function Services() {
  const services = [
    {
      number: '01',
      title: 'Residential Design',
      description:
        'Full-service interior design for private homes. From concept to completion, we guide you through every phase—space planning, custom furnishings, material selection, and styling.',
      details: [
        'Initial consultation & concept development',
        'Space planning & architectural coordination',
        'Custom furniture design & procurement',
        'Material & finishes selection',
        'Art curation & styling',
        'Project management & installation',
      ],
    },
    {
      number: '02',
      title: 'Commercial Design',
      description:
        'Design solutions for boutique hotels, restaurants, retail spaces, and offices. We create atmospheres that enhance brand identity and elevate the user experience.',
      details: [
        'Brand alignment & concept strategy',
        'Full interior design & FF&E',
        'Lighting design',
        'Custom millwork & fabrication',
        'Vendor coordination',
        'Turnkey delivery',
      ],
    },
    {
      number: '03',
      title: 'Renovation & Remodels',
      description:
        'Transforming existing spaces into refined, functional environments. We work closely with architects and contractors to ensure seamless execution.',
      details: [
        'Pre-construction planning',
        'Architectural detailing',
        'Kitchen & bath design',
        'Built-in cabinetry design',
        'Material specification',
        'Construction oversight',
      ],
    },
    {
      number: '04',
      title: 'Turnkey Styling',
      description:
        'For clients seeking a complete, move-in-ready solution. We handle furniture, art, textiles, and accessories—curated to perfection.',
      details: [
        'Furniture & lighting selection',
        'Art & accessories sourcing',
        'Textile design & fabrication',
        'Final styling & installation',
        'White-glove delivery',
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="flex items-center px-8 md:px-12 lg:px-16 bg-[#F6F4F1]" style={sectionStyle}>
        <div className="max-w-[1200px] mx-auto text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8 leading-[1.15]"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              color: '#4A3A33',
              letterSpacing: '0.02em',
            }}
          >
            <LetterFadeUp text="Services" delay={0.2} duration={0.7} />
          </motion.h1>
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
            Comprehensive design solutions crafted to transform your vision into timeless, livable luxury.
          </motion.p>
        </div>
      </section>

      {/* Residential Design */}
      <section className="flex items-center px-8 md:px-12 lg:px-16 bg-white" style={sectionStyle}>
        <FadeInSection>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start w-full">
            <div>
              <div
                className="text-8xl mb-6 opacity-15"
                style={{ fontFamily: 'var(--font-serif)', color: '#2F5C67' }}
              >
                01
              </div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  color: '#4A3A33',
                }}
              >
                Residential Design
              </h2>
            </div>

            <div className="space-y-6">
              <p
                className="leading-[1.8]"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
              >
                From initial concept to final installation, we provide full-service interior design for homes that reflect your unique sensibility.
              </p>
              
              <div className="pt-6">
                <h3
                  className="text-xl mb-4"
                  style={{ fontFamily: 'var(--font-serif)', color: '#4A3A33' }}
                >
                  What's Included
                </h3>
                <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}>
                  <li>• Space planning & architectural consultation</li>
                  <li>• Custom furniture design & procurement</li>
                  <li>• Material & finish selection</li>
                  <li>• Lighting design</li>
                  <li>• Art curation & styling</li>
                  <li>• Project management & installation</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Commercial Design */}
      <section className="flex items-center px-8 md:px-12 lg:px-16 bg-[#F6F4F1]" style={sectionStyle}>
        <FadeInSection>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start w-full">
            <div>
              <div
                className="text-8xl mb-6 opacity-15"
                style={{ fontFamily: 'var(--font-serif)', color: '#2F5C67' }}
              >
                02
              </div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  color: '#4A3A33',
                }}
              >
                Commercial Design
              </h2>
            </div>

            <div className="space-y-6">
              <p
                className="leading-[1.8]"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
              >
                We design commercial spaces that elevate the customer experience while maintaining functional excellence.
              </p>
              
              <div className="pt-6">
                <h3
                  className="text-xl mb-4"
                  style={{ fontFamily: 'var(--font-serif)', color: '#4A3A33' }}
                >
                  What's Included
                </h3>
                <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}>
                  <li>• Concept development & branding integration</li>
                  <li>• Space optimization for flow & efficiency</li>
                  <li>• Custom millwork & built-ins</li>
                  <li>• Material specifications</li>
                  <li>• FF&E procurement</li>
                  <li>• Installation & project oversight</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Renovation & Remodels */}
      <section className="flex items-center px-8 md:px-12 lg:px-16 bg-white" style={sectionStyle}>
        <FadeInSection>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start w-full">
            <div>
              <div
                className="text-8xl mb-6 opacity-15"
                style={{ fontFamily: 'var(--font-serif)', color: '#2F5C67' }}
              >
                03
              </div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  color: '#4A3A33',
                }}
              >
                Renovation & Remodels
              </h2>
            </div>

            <div className="space-y-6">
              <p
                className="leading-[1.8]"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
              >
                Transforming existing spaces into refined, functional environments. We work closely with architects and contractors to ensure seamless execution.
              </p>
              
              <div className="pt-6">
                <h3
                  className="text-xl mb-4"
                  style={{ fontFamily: 'var(--font-serif)', color: '#4A3A33' }}
                >
                  What's Included
                </h3>
                <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}>
                  <li>• Pre-construction planning</li>
                  <li>• Architectural detailing</li>
                  <li>• Kitchen & bath design</li>
                  <li>• Built-in cabinetry design</li>
                  <li>• Material specification</li>
                  <li>• Construction oversight</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Turnkey Styling */}
      <section className="flex items-center px-8 md:px-12 lg:px-16 bg-white" style={sectionStyle}>
        <FadeInSection>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start w-full">
            <div>
              <div
                className="text-8xl mb-6 opacity-15"
                style={{ fontFamily: 'var(--font-serif)', color: '#2F5C67' }}
              >
                04
              </div>
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  color: '#4A3A33',
                }}
              >
                Turnkey Styling
              </h2>
            </div>

            <div className="space-y-6">
              <p
                className="leading-[1.8]"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
              >
                For clients seeking a complete, move-in-ready solution, we offer fully styled interiors with every detail meticulously curated.
              </p>
              
              <div className="pt-6">
                <h3
                  className="text-xl mb-4"
                  style={{ fontFamily: 'var(--font-serif)', color: '#4A3A33' }}
                >
                  What's Included
                </h3>
                <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}>
                  <li>• Full furnishing packages</li>
                  <li>• Art & accessory selection</li>
                  <li>• Textile & soft goods curation</li>
                  <li>• Tabletop & entertaining essentials</li>
                  <li>• White-glove delivery & installation</li>
                  <li>• Post-installation styling</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Process */}
      <section className="bg-[#4A3A33] flex items-center px-8 md:px-12 lg:px-16" style={sectionStyle}>
        <div className="max-w-[1200px] mx-auto w-full">
          <FadeInSection>
            <h2
              className="text-center mb-20 text-[#F6F4F1]"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              <LetterFadeUp text="Our Process" delay={0.2} />
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <FadeInSection delay={0}>
              <div className="text-center">
                <h3
                  className="text-2xl mb-4 text-[#F6F4F1]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Explore
                </h3>
                <p
                  className="leading-relaxed text-[#F6F4F1]/80 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Initial consultation, site survey, and vision discovery
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <div className="text-center">
                <h3
                  className="text-2xl mb-4 text-[#F6F4F1]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Conceptualize
                </h3>
                <p
                  className="leading-relaxed text-[#F6F4F1]/80 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Design development, 2D/3D visualization, material selection
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="text-center">
                <h3
                  className="text-2xl mb-4 text-[#F6F4F1]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Create
                </h3>
                <p
                  className="leading-relaxed text-[#F6F4F1]/80 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Procurement, custom fabrication, and meticulous coordination
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.45}>
              <div className="text-center">
                <h3
                  className="text-2xl mb-4 text-[#F6F4F1]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Execute
                </h3>
                <p
                  className="leading-relaxed text-[#F6F4F1]/80 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Installation, styling, and final reveal
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E7E5E2] flex items-center justify-center px-8 md:px-12 lg:px-16" style={sectionStyle}>
        <FadeInSection>
          <div className="max-w-[800px] mx-auto text-center w-full">
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
              className="mb-12 leading-[1.8]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#2A2A2A' }}
            >
              Let's discuss your vision and explore how we can bring it to life.
            </p>
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
          </div>
        </FadeInSection>
      </section>
    </>
  );
}