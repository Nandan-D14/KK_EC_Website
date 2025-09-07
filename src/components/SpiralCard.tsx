'use client';
import React, { useMemo, useRef, useEffect, useState } from 'react';

/* 1️⃣  Assets */
const FALLBACK =
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ' +
  'width="160" height="220"><rect width="100%" height="100%" ' +
  'fill="%23e2e8f0"/><text x="50%" y="50%" dominant-baseline="middle"' +
  ' text-anchor="middle" fill="%234a5568" font-size="18">Image</text></svg>';

const DEFAULT_IMAGES = [
  'https://i.pinimg.com/736x/9f/09/45/9f0945103fc6158cb16e1828a2665b5c.jpg',
  'https://i.pinimg.com/1200x/6e/4c/39/6e4c394783c731f261f295e7ffd1deed.jpg',
  'https://i.pinimg.com/1200x/1e/0c/1c/1e0c1c9c868bf07b4c27a275fb3087af.jpg',
  'https://i.pinimg.com/736x/30/91/09/3091098a15810ddbbd58d5e007bc7207.jpg',
  'https://i.pinimg.com/736x/07/cf/4a/07cf4a3a6f4144b4c7ac8e2ec5978dc1.jpg',
  'https://i.pinimg.com/736x/5d/bf/f2/5dbff2b4c0fdcb9815e989f0db386f95.jpg',
];

/* 2️⃣ Config */
const CARD_W = 700;
const CARD_H = 320;
const RADIUS = 500;
const VERTICAL_STEP = 320;
const SCROLL_THROTTLE = 1000;

/* 3️⃣ Card Component */
const Card = React.memo(({ src, transform, cardW, cardH, active, nearActive, tilt }) => (
  <div
    className="absolute transition-opacity duration-700"
    style={{
      width: cardW,
      height: cardH,
      transform: transform + tilt,
      transformStyle: 'preserve-3d',
      willChange: 'transform',
      opacity: active ? 1 : nearActive ? 0.4 : 0,
      pointerEvents: active ? 'auto' : 'none',
    }}
  >
    <div
      className="w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900/70 backdrop-blur-md
                 border border-gray-300/40 dark:border-gray-600/40 shadow-lg
                 transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:z-10"
      style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0 }}
    >
      <img
        src={src}
        alt="Carousel item"
        width={cardW}
        height={cardH}
        className="w-full h-full object-cover"
        loading="lazy"
        draggable="false"
        onError={(e) => {
          e.currentTarget.src = FALLBACK;
        }}
      />
    </div>
  </div>
));
Card.displayName = 'Card';

/* 4️⃣ Main Component */
const ThreeDCarousel = React.memo(({ images = DEFAULT_IMAGES, radius = RADIUS, cardW = CARD_W, cardH = CARD_H, onFinish }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [tilt, setTilt] = useState('');
  const [finished, setFinished] = useState(false);
  const lastScrollTime = useRef(0);

  // 🔄 Scroll one by one card with throttling
  useEffect(() => {
    const handleScroll = (e) => {
      if (finished) return; // lock page scroll until finished
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_THROTTLE) return;
      lastScrollTime.current = now;

      if (e.deltaY > 0 && activeIndex < images.length - 1) {
        setActiveIndex((i) => Math.min(i + 1, images.length - 1));
        setRotation((r) => r - 360 / images.length);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((i) => Math.max(i - 1, 0));
        setRotation((r) => r + 360 / images.length);
      } else if (e.deltaY > 0 && activeIndex === images.length - 1) {
        // reached last card → allow page scroll
        setFinished(true);
        if (onFinish) onFinish();
      }
    };
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [activeIndex, images.length, finished, onFinish]);

  // 🎮 Cursor tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * -15;
      setTilt(` rotateX(${y}deg) rotateY(${x}deg)`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = useMemo(
    () =>
      images.map((src, idx) => {
        const angle = (idx * 360) / images.length;
        const yOffset = (idx - activeIndex) * VERTICAL_STEP;
        const nearActive = Math.abs(idx - activeIndex) === 1;
        return {
          key: idx,
          src,
          transform: `rotateY(${angle}deg) translateZ(${radius}px) translateY(${yOffset}px)`,
          active: idx === activeIndex,
          nearActive,
        };
      }),
    [images, radius, activeIndex]
  );

  return (
    <div
      className="w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-black/70 dark:bg-black/90 overflow-hidden"
      style={{ userSelect: 'none' }}
    >
      <div
        className="relative"
        style={{
          perspective: 2000,
          perspectiveOrigin: 'center',
          width: Math.max(cardW * 2, radius * 2.5),
          height: Math.max(cardH * 2.2, radius * 3),
        }}
      >
        {/* Central pole */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-gray-500/70 to-gray-700/90 dark:from-gray-400/60 dark:to-gray-600/80 backdrop-blur-md"
          style={{ width: '26px', height: Math.max(cardH * 3.5, radius * 3.2), borderRadius: '13px', zIndex: 0 }}
        ></div>

        <div
          className="relative"
          style={{
            width: cardW,
            height: cardH,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            position: 'absolute',
            left: '50%',
            top: '50%',
            marginLeft: -cardW / 2,
            marginTop: -cardH / 2,
            transform: `rotateY(${rotation}deg)`,
            transition: 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          {cards.map((card) => (
            <Card
              key={card.key}
              src={card.src}
              transform={card.transform}
              cardW={cardW}
              cardH={cardH}
              active={card.active}
              nearActive={card.nearActive}
              tilt={tilt}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

ThreeDCarousel.displayName = 'ThreeDCarousel';
export default ThreeDCarousel;
