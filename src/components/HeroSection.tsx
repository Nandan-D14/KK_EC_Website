'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react';
import Carousel from './Carousel1';

// --- CSS Tokens and Global Styles ---
const StyleProvider: React.FC = () => (
  <style>{`
    :root {
      --kk-red: #C8102E;
      --kk-yellow: #FFCC00;
      --kk-maroon: #7A0A0A;
      --bg-dark: #1a1a1a;
      --glass: rgba(255, 255, 255, 0.08);
      --text-on-dark: #FFFDF8;

      --dur-fast: 160ms;
      --dur-med: 400ms;
      --dur-slow: 800ms;
      --easing-smooth: cubic-bezier(.2, .9, .3, 1);
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes glowMove1 { 0% { transform: translate(0, 0) scale(1); opacity: 0.6; } 33% { transform: translate(20vw, 10vh) scale(1.2); opacity: 0.8; } 66% { transform: translate(5vw, 30vh) scale(1.1); opacity: 0.7; } 100% { transform: translate(0, 0) scale(1); opacity: 0.6; } }
    @keyframes glowMove2 { 0% { transform: translate(0, 0) scale(1); opacity: 0.7; } 40% { transform: translate(-15vw, 20vh) scale(1.1); opacity: 0.9; } 80% { transform: translate(-5vw, -10vh) scale(1.2); opacity: 0.8; } 100% { transform: translate(0, 0) scale(1); opacity: 0.7; } }
    @keyframes glowMove3 { 0% { transform: translate(0, 0) scale(1); opacity: 0.8; } 50% { transform: translate(10vw, -20vh) scale(1.3); opacity: 1; } 100% { transform: translate(0, 0) scale(1); opacity: 0.8; } }
    @keyframes glowMove4 { 0% { transform: translate(0, 0) scale(1); opacity: 0.7; } 30% { transform: translate(-10vw, -5vh) scale(1.1); opacity: 0.9; } 70% { transform: translate(15vw, 25vh) scale(1.2); opacity: 0.8; } 100% { transform: translate(0, 0) scale(1); opacity: 0.7; } }
    @keyframes glowMove5 { 0% { transform: translate(0, 0) scale(1); opacity: 0.6; } 45% { transform: translate(25vw, -15vh) scale(1.3); opacity: 0.9; } 85% { transform: translate(-5vw, 10vh) scale(1.1); opacity: 0.7; } 100% { transform: translate(0, 0) scale(1); opacity: 0.6; } }

    .animate-fade-in { animation: fadeIn var(--dur-slow) var(--easing-smooth) forwards; }
    .animate-slide-in-up { animation: slideInUp var(--dur-med) var(--easing-smooth) forwards; }
    .animate-glow-1 { animation: glowMove1 20s infinite ease-in-out; }
    .animate-glow-2 { animation: glowMove2 25s infinite ease-in-out; }
    .animate-glow-3 { animation: glowMove3 30s infinite ease-in-out; }
    .animate-glow-4 { animation: glowMove4 22s infinite ease-in-out; }
    .animate-glow-5 { animation: glowMove5 28s infinite ease-in-out; }

    .animation-delay-1 { animation-delay: 100ms; }
    .animation-delay-2 { animation-delay: 200ms; }
    .animation-delay-3 { animation-delay: 300ms; }
    .animation-delay-4 { animation-delay: 400ms; }
    .animation-delay-5 { animation-delay: 500ms; }
    .animation-delay-6 { animation-delay: 600ms; }

    @media (prefers-reduced-motion: reduce) {
      .animate-slide-in-up, .animate-glow-1, .animate-glow-2, .animate-glow-3, .animate-glow-4, .animate-glow-5 {
        animation: fadeIn 600ms ease-out forwards;
      }
    }
  `}</style>
);

// --- Sub-Components ---

const DynamicBackground: React.FC = () => (
  <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-[var(--bg-dark)]" />
    {/* Animated Glowing Orbs - Increased quantity and size */}
    <div className="absolute inset-0">
      <div className="absolute left-[10%] top-[20%] h-80 w-80 rounded-full bg-[var(--kk-red)] opacity-30 blur-3xl animate-glow-1" />
      <div className="absolute left-[70%] top-[50%] h-96 w-96 rounded-full bg-[var(--kk-yellow)] opacity-30 blur-3xl animate-glow-2" />
      <div className="absolute left-[30%] top-[80%] h-80 w-80 rounded-full bg-[var(--kk-red)] opacity-30 blur-3xl animate-glow-3" />
      <div className="absolute left-[50%] top-[10%] h-72 w-72 rounded-full bg-[var(--kk-yellow)] opacity-30 blur-3xl animate-glow-4 animation-delay-2" />
      <div className="absolute left-[0%] top-[50%] h-80 w-80 rounded-full bg-[var(--kk-red)] opacity-30 blur-3xl animate-glow-5 animation-delay-3" />
      <div className="absolute left-[80%] top-[0%] h-64 w-64 rounded-full bg-[var(--kk-yellow)] opacity-30 blur-3xl animate-glow-1 animation-delay-4" />
      <div className="absolute left-[20%] top-[0%] h-72 w-72 rounded-full bg-[var(--kk-red)] opacity-30 blur-3xl animate-glow-2 animation-delay-5" />
      <div className="absolute left-[20%] top-[20%] h-80 w-80 rounded-full bg-[var(--kk-red)] opacity-30 blur-3xl animate-glow-1" />
      <div className="absolute left-[80%] top-[50%] h-46 w-46 rounded-full bg-[var(--kk-yellow)] opacity-30 blur-3xl animate-glow-2" />
      <div className="absolute left-[40%] top-[80%] h-40 w-40 rounded-full bg-[var(--kk-red)] opacity-30 blur-3xl animate-glow-3" />
    </div>
  </div>
);

const AbstractIllustration: React.FC = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <Carousel/>
  </div>
);

const MicroCard: React.FC<{ icon: React.ReactNode; text: string; className?: string; }> = ({ icon, text, className }) => (
  <div className={`flex items-center gap-3 rounded-lg border border-white/10 bg-[var(--glass)] px-4 py-2 backdrop-blur-lg text-white ${className}`}>
    {icon}
    <span className="text-sm">{text}</span>
  </div>
);

// --- Main Hero Section Component ---

const HeroSection: React.FC = () => {
  return (
    <>
      <StyleProvider />
      <section
        id="home"
        className="sticky h-screen w-full overflow-hidden text-[var(--text-on-dark)]"
        aria-label="Kannada Koota Hero Section"
      >
        <DynamicBackground />

        {/* Main Grid Layout */}
        <div className="relative z-10 grid h-full grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:px-16 lg:px-24">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="flex flex-col items-start justify-center md:col-span-1">
            <p className="font-mono text-sm uppercase tracking-widest text-slate-300 animate-slide-in-up animation-delay-1">Connect • Celebrate • Create</p>
            <h1 
              className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl animate-slide-in-up animation-delay-2"
              aria-label="ಕನ್ನಡಕ್ಕೂಟ — ನಮ್ಮ ಭಾಷೆ, ನಮ್ಮ ಸಂಸ್ಕೃತಿ"
            >
              ಕನ್ನಡಕ್ಕೂಟ — <br /> ನಮ್ಮ ಭಾಷೆ, ನಮ್ಮ ಸಂಸ್ಕೃತಿ
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300 animate-slide-in-up animation-delay-3">A creative community for Kannada speakers — events, workshops and cultural celebrations.</p>
            
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-slide-in-up animation-delay-4">
              <Button size="lg" className="rounded-full bg-[var(--kk-red)] px-8 py-6 text-lg font-bold text-[var(--kk-yellow)] transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[var(--kk-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-dark)]">ಸೇರಿರಿ / Join</Button>
              <Button size="lg" variant="outline" className="rounded-full border-[var(--kk-yellow)] px-8 py-6 text-lg font-bold text-[var(--kk-yellow)] transition-colors hover:bg-[var(--kk-yellow)] hover:text-[var(--bg-dark)] focus-visible:ring-2 focus-visible:ring-[var(--kk-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-dark)]">ಇವೆಂಟ್‌ಗಳು ನೋಡಿ</Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 animate-slide-in-up animation-delay-5">
                <MicroCard icon={<Calendar className="h-5 w-5 text-slate-300"/>} text="Upcoming: Rajyotsava" />
                <MicroCard icon={<Users className="h-5 w-5 text-slate-300"/>} text="150+ Members" />
                <MicroCard icon={<MapPin className="h-5 w-5 text-slate-300"/>} text="Bengaluru Chapter" />
            </div>
          </div>

          {/* Right Column: Abstract Illustration */}
          <div className="hidden h-full w-full items-center justify-center md:flex md:col-span-1 animate-slide-in-up animation-delay-6">
            <AbstractIllustration />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
