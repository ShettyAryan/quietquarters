import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { LoadingScreen } from './LoadingScreen';

export function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const targetSectionRef = useRef<number>(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft = 0;
      targetSectionRef.current = 0;
    }
  }, [location.pathname]);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasSeenLoading', 'true');
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  const scrollToSection = (targetSection: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const sectionWidth = window.innerWidth;
    const targetScroll = targetSection * sectionWidth;
    const startScroll = container.scrollLeft;
    const distance = targetScroll - startScroll;
    const duration = 1200;
    const startTime = performance.now();

    const easeInOutQuart = (t: number): number => {
      return t < 0.5 
        ? 8 * t * t * t * t 
        : 1 - 8 * (--t) * t * t * t;
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuart(progress);
      
      container.scrollLeft = startScroll + (distance * eased);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        isScrollingRef.current = false;
      }
    };

    requestAnimationFrame(animate);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    const container = scrollContainerRef.current;
    if (!container) return;

    const delta = e.deltaY;
    const scrollAmount = Math.abs(delta);

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Only trigger section scroll if delta is significant enough
    if (scrollAmount > 30 && !isScrollingRef.current) {
      isScrollingRef.current = true;
      
      const sectionWidth = window.innerWidth;
      const maxSections = Math.floor(container.scrollWidth / sectionWidth) - 1;
      
      // Determine direction
      const direction = delta > 0 ? 1 : -1;
      targetSectionRef.current = Math.max(0, Math.min(maxSections, targetSectionRef.current + direction));
      
      scrollToSection(targetSectionRef.current);
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {showContent && (
        <>
          <Navbar />
          <div 
            ref={scrollContainerRef}
            data-horizontal-scroll
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              overflowX: 'scroll',
              overflowY: 'hidden',
              display: 'flex',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onWheel={handleWheel}
          >
            <style>{`
              [data-horizontal-scroll]::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}
