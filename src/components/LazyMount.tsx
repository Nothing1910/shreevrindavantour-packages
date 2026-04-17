import { useState, useEffect, useRef, ReactNode } from "react";

interface LazyMountProps {
  children: ReactNode;
  minHeight?: string;
  id?: string;
}

const LazyMount = ({ children, minHeight = "500px", id }: LazyMountProps) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" } 
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} id={id}>
      {inView ? children : <div style={{ minHeight }} aria-hidden="true" />}
    </div>
  );
};

export default LazyMount;