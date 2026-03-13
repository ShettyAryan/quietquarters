import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Instagram } from 'lucide-react';
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const instagramImages = [
    'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMG1pbmltYWwlMjBuZXV0cmFsfGVufDF8fHx8MTc3MTQxOTI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1767050371633-675072d4bed7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlldCUyMGx1eHVyeSUyMGJlZHJvb20lMjBjYWxtfGVufDF8fHx8MTc3MTQxOTI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1661243038698-dc8b600f23d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjB0ZXh0dXJlZCUyMG1pbmltYWxpc218ZW58MXx8fHwxNzcxNDE5MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1728649060658-8e64dccf2711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwbmV1dHJhbCUyMHRvbmVzfGVufDF8fHx8MTc3MTQxOTI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1758448755927-e5c5ae14790c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwa2l0Y2hlbiUyMGRlc2lnbnxlbnwxfHx8fDE3NzE0MTkyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1719782758766-f0a4a3808afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGJhdGhyb29tJTIwbWluaW1hbHxlbnwxfHx8fDE3NzE0MTkyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  return (
    <>
      {/* Hero */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-20 bg-[#E7E5E2] pt-32" style={sectionStyle}>
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <h1
                className="mb-6 leading-[1.1]"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  color: '#4A3A33',
                  letterSpacing: '0.01em',
                }}
              >
                <LetterFadeUp text="Work with Us" delay={0.2} duration={0.6} />
              </h1>
              <p
                className="leading-[1.8] mb-8"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.125rem',
                  color: '#1C1C1C',
                }}
              >
                Every great project begins with a conversation. Share your vision, and let's explore how we can bring it to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3
                  className="text-[9px] uppercase tracking-[0.3em] mb-4 opacity-40"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}
                >
                  Mumbai
                </h3>
                <p
                  className="leading-[1.7] mb-3"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C', fontSize: '1rem' }}
                >
                  B-12, Altamount Road<br />
                  Mumbai, Maharashtra 400026
                </p>
                <a 
                  href="mailto:mumbai@quietquarters.com" 
                  className="hover:text-[#2F5C67] transition-colors duration-700"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C', fontSize: '1rem' }}
                >
                  mumbai@quietquarters.com
                </a>
              </div>

              <div>
                <h3
                  className="text-[9px] uppercase tracking-[0.3em] mb-4 opacity-40"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C' }}
                >
                  Delhi
                </h3>
                <p
                  className="leading-[1.7] mb-3"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C', fontSize: '1rem' }}
                >
                  23 Aurangzeb Road<br />
                  New Delhi, Delhi 110011
                </p>
                <a 
                  href="mailto:delhi@quietquarters.com" 
                  className="hover:text-[#2F5C67] transition-colors duration-700"
                  style={{ fontFamily: 'var(--font-sans)', color: '#1C1C1C', fontSize: '1rem' }}
                >
                  delhi@quietquarters.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="flex items-center justify-center px-8 md:px-12 lg:px-20 bg-[#4A3A33]" style={sectionStyle}>
        <div className="max-w-[850px] mx-auto w-full">
          <FadeInSection>
            <h2
              className="mb-12 text-center"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#F6F4F1',
              }}
            >
              Begin Your Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[9px] uppercase tracking-[0.3em] mb-3 text-[#F6F4F1]/50"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#F6F4F1]/20 pb-2 text-[#F6F4F1] placeholder:text-[#F6F4F1]/20 focus:border-[#2F5C67] focus:outline-none transition-all duration-700"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[9px] uppercase tracking-[0.3em] mb-3 text-[#F6F4F1]/50"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#F6F4F1]/20 pb-2 text-[#F6F4F1] placeholder:text-[#F6F4F1]/20 focus:border-[#2F5C67] focus:outline-none transition-all duration-700"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[9px] uppercase tracking-[0.3em] mb-3 text-[#F6F4F1]/50"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Phone <span className="opacity-50">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#F6F4F1]/20 pb-2 text-[#F6F4F1] placeholder:text-[#F6F4F1]/20 focus:border-[#2F5C67] focus:outline-none transition-all duration-700"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-[9px] uppercase tracking-[0.3em] mb-3 text-[#F6F4F1]/50"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#F6F4F1]/20 pb-2 text-[#F6F4F1] focus:border-[#2F5C67] focus:outline-none transition-all duration-700 cursor-pointer appearance-none"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                  >
                    <option value="" className="bg-[#4A3A33]">Select type</option>
                    <option value="full-residence" className="bg-[#4A3A33]">Full Residence</option>
                    <option value="renovation" className="bg-[#4A3A33]">Renovation</option>
                    <option value="single-room" className="bg-[#4A3A33]">Single Room</option>
                    <option value="consultation" className="bg-[#4A3A33]">Design Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[9px] uppercase tracking-[0.3em] mb-3 text-[#F6F4F1]/50"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-[#F6F4F1]/20 pb-2 text-[#F6F4F1] placeholder:text-[#F6F4F1]/20 focus:border-[#2F5C67] focus:outline-none transition-all duration-700 resize-none"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="group relative inline-block overflow-hidden"
                >
                  <span className="relative block px-14 py-4 border border-[#F6F4F1] text-[#F6F4F1] text-[10px] uppercase tracking-[0.35em] transition-all duration-700 group-hover:text-[#4A3A33]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span className="absolute inset-0 bg-[#F6F4F1] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></span>
                    <span className="relative">Submit</span>
                  </span>
                </button>
              </div>
            </form>
          </FadeInSection>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white flex items-center justify-center px-8 md:px-12 lg:px-20" style={sectionStyle}>
        <div className="max-w-[950px] mx-auto w-full">
          <FadeInSection>
            <h3
              className="mb-16 text-center"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: '#4A3A33',
              }}
            >
              What Happens Next
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#2F5C67] flex items-center justify-center mx-auto mb-6">
                  <span 
                    className="text-[#2F5C67]"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}
                  >
                    01
                  </span>
                </div>
                <h4 
                  className="text-sm uppercase tracking-[0.25em] mb-4 text-[#2F5C67]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Initial Response
                </h4>
                <p
                  className="leading-[1.75]"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: '#1C1C1C' }}
                >
                  We'll review your inquiry and respond within 48 hours to schedule a call.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#2F5C67] flex items-center justify-center mx-auto mb-6">
                  <span 
                    className="text-[#2F5C67]"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}
                  >
                    02
                  </span>
                </div>
                <h4 
                  className="text-sm uppercase tracking-[0.25em] mb-4 text-[#2F5C67]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Discovery
                </h4>
                <p
                  className="leading-[1.75]"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: '#1C1C1C' }}
                >
                  A detailed conversation to understand your vision, space, and timeline.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-[#2F5C67] flex items-center justify-center mx-auto mb-6">
                  <span 
                    className="text-[#2F5C67]"
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}
                  >
                    03
                  </span>
                </div>
                <h4 
                  className="text-sm uppercase tracking-[0.25em] mb-4 text-[#2F5C67]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Proposal
                </h4>
                <p
                  className="leading-[1.75]"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: '#1C1C1C' }}
                >
                  A comprehensive proposal outlining scope, approach, and investment.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Instagram / Social Media Section - Pinterest-style Layout */}
      <section className="bg-[#4A3A33] flex items-center justify-center px-8 md:px-12 lg:px-20 py-20 pt-32" style={sectionStyle}>
        <div className="max-w-[750px] mx-auto w-full">
          <FadeInSection>
            {/* Heading Section */}
            <div className="text-center mb-8">
              <h2
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  color: '#F6F4F1',
                }}
              >
                Follow Our Work
              </h2>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2"
              >
                <span
                  className="text-[10px] uppercase tracking-[0.3em] text-[#F6F4F1]/60 transition-colors duration-700 group-hover:text-[#F6F4F1]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  @QUIETQUARTERS
                </span>
                <Instagram className="w-3.5 h-3.5 text-[#F6F4F1]/60 transition-all duration-700 group-hover:text-[#F6F4F1]" />
              </a>
            </div>

            {/* Clean 2-Row Layout */}
            <div className="space-y-2.5">
              {/* Top Row - 2 larger images */}
              <div className="grid grid-cols-2 gap-2.5">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[4/3] overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0 }}
                >
                  <img
                    src={instagramImages[0]}
                    alt="Instagram post 1"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[4/3] overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.1 }}
                >
                  <img
                    src={instagramImages[1]}
                    alt="Instagram post 2"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </motion.a>
              </div>

              {/* Bottom Row - 4 smaller squares */}
              <div className="grid grid-cols-4 gap-2.5">
                {instagramImages.slice(2).map((image, index) => (
                  <motion.a
                    key={index}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 + (index * 0.08) }}
                  >
                    <img
                      src={image}
                      alt={`Instagram post ${index + 3}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-white" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}