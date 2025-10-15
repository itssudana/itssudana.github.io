import React, { useEffect, useMemo, useRef } from 'react';
import type { ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1.5,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=70%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.5,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    if (typeof children !== 'string') return <>{children}</>;
    return children.split('').map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const chars = el.querySelectorAll('.inline-block');

    // Hapus trigger lama
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === el) trigger.kill();
    });

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        yPercent: 100,
        scaleY: 2.2,
        scaleX: 0.8,
        transformOrigin: '50% 0%',
      },
      {
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        duration: animationDuration,
        ease: ease,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          toggleActions: 'play none none reverse', // ✅ animasi main pas masuk, balik halus saat keluar atas
          once: false,
        },
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`my-5 overflow-hidden ${containerClassName}`}>
      <span
        className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
