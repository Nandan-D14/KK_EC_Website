import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-kannada">ನಮ್ಮ ಬಗ್ಗೆ</h3>
            <div className="space-y-4">
              <p className="text-primary-foreground/80 text-sm leading-relaxed font-kannada">
                ಪಿಇಎಸ್‌ಯು ಕನ್ನಡ ಕುಟ್ಟಾ ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಆಚರಿಸುವ ಸಂಘಟನೆ.
              </p>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                We celebrate Karnataka's rich cultural heritage through events, 
                performances, and community engagement at PESU.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold font-kannada">ಕ</span>
                </div>
                <div>
                  <h4 className="font-semibold">PESU Kannada Kutta</h4>
                  <p className="text-xs text-primary-foreground/60">Since 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
              <a 
                href="#" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                Join Us
              </a>
              <a 
                href="#" 
                className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                Volunteer
              </a>
            </div>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-secondary" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-primary-foreground/80">kannada.kutta@pesu.pes.edu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-secondary" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-xs text-primary-foreground/80">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-secondary" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-xs text-primary-foreground/80">
                    PES University<br />
                    100 Feet Ring Road<br />
                    Bangalore, Karnataka 560085
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="space-y-4">
              <p className="text-sm text-primary-foreground/80">
                Stay connected with our cultural community
              </p>
              
              {/* Social Media Links */}
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    asChild
                  >
                    <a href={social.href} className="flex items-center space-x-2">
                      <social.icon className="w-4 h-4" />
                      <span className="text-xs">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>

              {/* Newsletter Signup */}
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-sm">Newsletter</h4>
                  <p className="text-xs text-primary-foreground/80 mb-3">
                    Get updates about our events
                  </p>
                  <Button 
                    size="sm" 
                    className="btn-festival w-full"
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-primary-foreground/80 font-kannada">
                © 2025 ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ ವೆಬ್‌ಸೈಟ್ · PESU Kannada Kutta
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                Celebrating Karnataka's Heritage with Pride
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center mt-6 pt-6 border-t border-primary-foreground/10">
            <p className="text-sm font-kannada text-secondary font-semibold">
              ಜೈ ಕರ್ನಾಟಕ ಜನನಿ! 🙏
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;