import { useEffect, useRef } from 'react';

export function ScrollIndicator() {
  const indicatorsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-index]');
    const indicators = indicatorsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove active class from all indicators
            indicators.forEach((indicator) => {
              if (indicator) {
                indicator.classList.remove('active');
              }
            });

            // Add active class to corresponding indicator
            const index = entry.target.getAttribute('data-index');
            if (index && indicators[parseInt(index)]) {
              indicators[parseInt(index)]?.classList.add('active');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Add click functionality with centering
    indicators.forEach((indicator, index) => {
      if (indicator) {
        indicator.addEventListener('click', () => {
          const targetSection = sections[index];
          if (targetSection) {
            const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY;
            const sectionHeight = targetSection.offsetHeight;
            const windowHeight = window.innerHeight;

            const scrollTo = sectionTop - (windowHeight / 2) + (sectionHeight / 2);

            window.scrollTo({
              top: scrollTo,
              behavior: 'smooth'
            });
          }
        });
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <span 
        ref={(el) => (indicatorsRef.current[0] = el)}
        data-section="0"
        className="active"
      >
        Start
      </span>
      <span 
        ref={(el) => (indicatorsRef.current[1] = el)}
        data-section="1"
      >
        For Klubber
      </span>
      <span 
        ref={(el) => (indicatorsRef.current[2] = el)}
        data-section="2"
      >
        Derfor Sendivo
      </span>
      <span 
        ref={(el) => (indicatorsRef.current[3] = el)}
        data-section="3"
      >
        For Virksomheder
      </span>
    </div>
  );
}
