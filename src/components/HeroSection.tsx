'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// -- 3D Wireframe Cube Component --
const WireframeCube: React.FC = () => {
  return (
    <div className="relative w-64 h-64" style={{ perspective: '1000px' }}>
      <div className="w-full h-full relative animate-spin-slow-3d" style={{ transformStyle: 'preserve-3d' }}>
        {[...Array(6)].map((_, i) => {
          const transform = [
            'rotateY(0deg) translateZ(8rem)',
            'rotateY(90deg) translateZ(8rem)',
            'rotateY(180deg) translateZ(8rem)',
            'rotateY(-90deg) translateZ(8rem)',
            'rotateX(90deg) translateZ(8rem)',
            'rotateX(-90deg) translateZ(8rem)',
          ][i];
          return (
            <div
              key={i}
              className="absolute inset-0 w-64 h-64 border-2 border-cyan-400/50 bg-cyan-400/10"
              style={{ transform }}
            />
          );
        })}
      </div>
    </div>
  );
};

// -- Main Hero Section Component --
const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#0a192f] text-slate-300"
      aria-label="Blueprint-themed Hero Section"
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 h-full w-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem',
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_farthest-side,rgba(10,25,47,0)_0%,rgba(10,25,47,1)_80%)]" />

      {/* Main Content Grid */}
      <div className="relative z-10 grid h-full w-full grid-cols-1 items-center gap-8 px-8 md:grid-cols-2">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start">
          <p className="font-mono text-lg text-cyan-400 animate-fade-in-up">PESU Kannada Kutta</p>
          <h1 
            className="mt-4 text-5xl font-bold text-slate-100 md:text-6xl lg:text-7xl animate-fade-in-up animation-delay-200"
            aria-label="Where Ideas Take Form"
          >
            Where Ideas Take Form
          </h1>
          <p 
            className="mt-6 max-w-md text-lg text-slate-400 animate-fade-in-up animation-delay-400"
            aria-label="Fusing cultural heritage with technological innovation to build a vibrant community of creators."
          >
            Fusing cultural heritage with technological innovation to build a vibrant community of creators.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="group mt-8 flex items-center gap-2 rounded-md border-cyan-400 bg-transparent px-8 py-6 text-lg font-bold text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(100,255,255,0.5)] animate-fade-in-up animation-delay-600"
            aria-label="View Projects"
          >
            View Projects
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Right Column: 3D Cube Visual */}
        <div className="hidden h-full w-full items-center justify-center md:flex">
          <WireframeCube />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
