import React, { useEffect, useRef } from "react";

const LazyBackground = ({ src, className, children }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { current } = divRef;
            if (current) {
              current.style.backgroundImage = `url(${src})`;
              observer.unobserve(current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <div ref={divRef} className={className}>
      {children}
    </div>
  );
};

export default LazyBackground;
