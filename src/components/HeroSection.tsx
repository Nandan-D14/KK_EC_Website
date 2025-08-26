import { Button } from '@/components/ui/button';
import { ChevronDown, Sun } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';
import React from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const scrollToEvents = () => {
    const eventsSection = document.querySelector('#events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const auroraStyle = {
    '--mouse-x': `${mousePosition.x}`,
    '--mouse-y': `${mousePosition.y}`,
    background:
      'radial-gradient(circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), rgba(255, 215, 0, 0.3), transparent 40%),\n      radial-gradient(circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%), rgba(255, 69, 0, 0.2), transparent 50%)',
  } as React.CSSProperties;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Kannada Rajyotsava Cultural Banner"
          className="w-full h-full object-cover scale-105 transition-transform duration-500 group-hover:scale-100"
        />
      </div>

      {/* Dynamic Aurora Overlay */}
      <div
        className="absolute inset-0 z-1 transition-all duration-500 ease-out"
        style={auroraStyle}
      ></div>

      {/* Static Vignette Overlay */}
      <div className="absolute inset-0 z-2 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-kannada mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500 drop-shadow-lg animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            ಜೈ ಕರ್ನಾಟಕ ಮಾತೆ
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-white/90 mb-4 font-medium drop-shadow-md animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            Celebrating Karnataka's Rich Heritage & Culture
          </p>

          <p
            className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '500ms' }}
          >
            Join PESU Kannada Kutta in honoring our beautiful Karnataka through
            cultural events, team contributions, and unforgettable celebrations.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
            style={{ animationDelay: '700ms' }}
          >
            <Button
              className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-red-600 text-white font-bold text-lg px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn"
              onClick={scrollToEvents}
            >
              <span className="absolute inset-0 bg-black/20 group-hover/btn:bg-black/10 transition-colors duration-300"></span>
              <span className="relative">Explore Events</span>
              <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-in-out"></span>
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 bg-black/20 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              Join Our Team
            </Button>
          </div>

          {/* Glassmorphism Stats */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '900ms' }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg">
              <h3 className="text-3xl font-bold text-white">15+</h3>
              <p className="text-sm text-white/70">Cultural Events</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg">
              <h3 className="text-3xl font-bold text-white">100+</h3>
              <p className="text-sm text-white/70">Team Members</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg">
              <h3 className="text-3xl font-bold text-white">5</h3>
              <p className="text-sm text-white/70">Years Celebrating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Symbolic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToEvents}
          className="relative flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 text-white border border-white/20 group/scroll"
          aria-label="Scroll to events section"
        >
          <Sun className="absolute w-8 h-8 text-yellow-300 transition-all duration-500 transform group-hover/scroll:rotate-90 group-hover/scroll:scale-125" />
          <ChevronDown className="w-6 h-6 transition-transform duration-300 group-hover/scroll:translate-y-1 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;