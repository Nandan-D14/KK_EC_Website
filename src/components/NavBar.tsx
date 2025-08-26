
import { Menu, X, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Team', href: '#team' },
    { name: 'Events', href: '#events' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const contributors = Array.from({ length: 6 }, (_, i) => i + 1);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  return (
    <div className='sm:flex justify-center items-center align-middle sm:w-screen'>
      <header className="fixed top-0  z-50 bg-neutral-200/70 backdrop-blur-sm border-b sm:min-w-[500px] rounded-b-2xl border-accent/20 shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-festival rounded-full flex items-center justify-center shadow-festival">
              <span className="text-primary-foreground font-bold text-lg font-kannada">ಕ</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">ಕನ್ನಡ ಕುಟ್ಟ ಇಸಿ</h1>
              <p className="text-sm text-muted-foreground">PESU Kannada Kutta EC Campus</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                className="btn-cultural bg-transparent hover:bg-accent/0 text-primary border-0 border-b-2 border-transparent hover:border-secondary rounded-xl"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Contributors & Mobile Menu */}
          <div className="flex items-center space-x-4  justify-end">
            <div className="hidden sm:flex items-center space-x-1">
              <span className="text-sm text-muted-foreground mr-2">Contributors:</span>
              <div className="flex -space-x-1">
                {contributors.map((_, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center shadow-sm"
                    title={`Contributor ${index + 1}`}
                  >
                    <Users className="w-4 h-4 text-primary-foreground" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-accent/20 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="btn-cultural justify-start"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
            
            {/* Mobile Contributors */}
            <div className="mt-4 pt-4 border-t border-accent/20">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Contributors:</span>
                <div className="flex -space-x-1">
                  {contributors.slice(0, 4).map((_, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 bg-primary rounded-full border border-background flex items-center justify-center"
                    >
                      <Users className="w-3 h-3 text-primary-foreground" />
                    </div>
                  ))}
                  <div className="w-6 h-6 bg-muted rounded-full border border-background flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">+2</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
    </div>
  )
}

export default NavBar