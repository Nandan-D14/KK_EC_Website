import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  const scrollToEvents = () => {
    const eventsSection = document.querySelector('#events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="Kannada Rajyotsava Cultural Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-secondary/80"></div>
        <div className="absolute inset-0 pattern-cultural"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 py-20 animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Heading */}
          <h1 className="hero-text font-kannada mb-6 animate-float">
            ಜೈ ಕರ್ನಾಟಕ ಜನನಿ
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium drop-shadow-md">
            Celebrating Karnataka's Rich Heritage & Culture
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join PESU Kannada Kutta in honoring our beautiful Karnataka through cultural events, 
            team contributions, and unforgettable celebrations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-festival text-lg px-8 py-3"
              onClick={scrollToEvents}
            >
              Explore Events
            </Button>
            <Button 
              variant="outline" 
              className="btn-cultural text-lg px-8 py-3 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Join Our Team
            </Button>
          </div>

          {/* Festival Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="card-golden text-center">
              <h3 className="text-2xl font-bold text-primary">15+</h3>
              <p className="text-sm text-muted-foreground">Cultural Events</p>
            </div>
            <div className="card-golden text-center">
              <h3 className="text-2xl font-bold text-primary">100+</h3>
              <p className="text-sm text-muted-foreground">Team Members</p>
            </div>
            <div className="card-golden text-center">
              <h3 className="text-2xl font-bold text-primary">5</h3>
              <p className="text-sm text-muted-foreground">Years Celebrating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToEvents}
          className="animate-bounce bg-primary-foreground/20 backdrop-blur-sm rounded-full p-3 text-primary-foreground hover:bg-primary-foreground/30 transition-colors duration-200"
          aria-label="Scroll to events section"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;