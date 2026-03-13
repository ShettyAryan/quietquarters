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

export function About() {
  return (
    <>
      {/* Hero */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-16 bg-[#E7E5E2]" style={sectionStyle}>
        <div className="max-w-[1200px] mx-auto text-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
            className="mb-8 leading-[1.15]"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              color: '#4A3A33',
              letterSpacing: '0.02em',
            }}
          >
            <LetterFadeUp text="Our Philosophy" delay={0.3} duration={0.7} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.5 }}
            className="max-w-[700px] mx-auto leading-[1.8]"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.25rem',
              color: '#1C1C1C',
            }}
          >
            A design studio rooted in the belief that true luxury lies in restraint, quietude, and the thoughtful curation of space.
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-16 bg-white" style={sectionStyle}>
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <FadeInSection>
              <div>
                <h2
                  className="mb-8"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    color: '#4A3A33',
                  }}
                >
                  <LetterFadeUp text="Our Philosophy" delay={0.1} />
                </h2>
                <p
                  className="leading-[1.8] mb-6"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
                >
                  We believe the most powerful spaces are those that feel inevitable. Where nothing is excessive, yet nothing is missing. Every surface, material, and piece of furniture exists for a reason.
                </p>
                <p
                  className="leading-[1.8]"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
                >
                  This is design that honors the architecture, respects the light, and above all, serves the people who inhabit the space.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div>
                <h2
                  className="mb-8"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    color: '#4A3A33',
                  }}
                >
                  <LetterFadeUp text="Our Approach" delay={0.1} />
                </h2>
                <p
                  className="leading-[1.8] mb-6"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
                >
                  Each project begins with understanding how you actually live. Not aspirations, but the real rhythms of your daily life. What brings you peace. What frustrates you. How you move through your home.
                </p>
                <p
                  className="leading-[1.8]"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
                >
                  From that foundation, we build spaces that feel effortless. Functional without being clinical. Beautiful without trying too hard.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F6F4F1] flex items-center justify-center px-8 md:px-12 lg:px-16" style={sectionStyle}>
        <div className="max-w-[1200px] mx-auto w-full">
          <FadeInSection>
            <h2
              className="text-center mb-20"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#4A3A33',
              }}
            >
              <LetterFadeUp text="What Guides Us" delay={0.2} />
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <FadeInSection delay={0}>
              <div className="text-center">
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'var(--font-serif)', color: '#2F5C67' }}
                >
                  Restraint
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}
                >
                  The discipline to know when to stop. When a space has everything it needs and nothing more.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="text-center">
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'var(--font-serif)', color: '#2F5C67' }}
                >
                  Craftsmanship
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}
                >
                  Working with the finest artisans and makers. People who understand that quality reveals itself over time.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="text-center">
                <h3
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'var(--font-serif)', color: '#2F5C67' }}
                >
                  Timelessness
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}
                >
                  Designing for decades, not seasons. Creating interiors that age beautifully and never feel dated.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-16 bg-white" style={sectionStyle}>
        <FadeInSection>
          <div className="max-w-[800px] mx-auto text-center">
            <h2
              className="mb-12"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#4A3A33',
              }}
            >
              <LetterFadeUp text="The Studio" delay={0.2} />
            </h2>
            <p
              className="leading-[1.8] mb-8"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
            >
              Founded in 2015, Quiet Quarters grew from a simple idea: that the best interiors should feel like they've always existed. Our team includes architects, designers, and project managers who bring decades of experience to each project.
            </p>
            <p
              className="leading-[1.8]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#1C1C1C' }}
            >
              We maintain close relationships with craftspeople, artists, and suppliers across the country, ensuring access to exceptional materials and custom work.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4A3A33] flex items-center justify-center px-8 md:px-12 lg:px-16" style={sectionStyle}>
        <FadeInSection>
          <div className="max-w-[800px] mx-auto text-center">
            <h2
              className="mb-8"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#F6F4F1',
              }}
            >
              <LetterFadeUp text="Ready to Begin?" delay={0.2} />
            </h2>
            <p
              className="mb-12 leading-[1.8]"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', color: '#F6F4F1', opacity: 0.9 }}
            >
              Let's discuss your vision and explore how we can bring it to life.
            </p>
            <a
              href="/contact"
              className="group relative inline-block overflow-hidden"
            >
              <span className="relative block px-14 py-5 border border-[#F6F4F1] text-[#F6F4F1] text-xs uppercase tracking-[0.35em] transition-all duration-700 group-hover:text-[#4A3A33]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="absolute inset-0 bg-[#F6F4F1] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></span>
                <span className="relative">Start a Project</span>
              </span>
            </a>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}