import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: 'Cultural Passion',
      description: 'Deep love for Karnataka\'s rich traditions and heritage'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Bringing together students to celebrate our culture'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Organizing world-class cultural events and programs'
    },
    {
      icon: Globe,
      title: 'Cultural Bridge',
      description: 'Connecting Karnataka culture with the modern world'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-kannada">
            ಪಿಇಎಸ್‌ಯು ಕನ್ನಡ ಕೂಟ ಬಗ್ಗೆ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            About PESU Kannada Koota - Celebrating Karnataka's Heritage
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <Card className="card-festival">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-6">
                      About PESU Kannada Koota
                    </h3>
                    
                    {/* Kannada Description */}
                    <div className="font-kannada text-lg leading-relaxed text-foreground mb-6 p-6 bg-muted/30 rounded-lg">
                      <p className="mb-4">
                        ಪಿಇಎಸ್‌ಯು ಕನ್ನಡ ಕೂಟಾ ನಮ್ಮ ಸಂಸ್ಕೃತಿ, ಭಾಷೆ ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಆಚರಿಸುವ ಕುಟುಂಬವಾಗಿದೆ.
                      </p>
                      <p className="mb-4">
                        ನಾವು ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವದ ಸಡಗರದಲ್ಲಿ ಎಲ್ಲರನ್ನು ಸೇರಿಸುತ್ತೇವೆ.
                      </p>
                      <p>
                        ಕರ್ನಾಟಕದ ಶ್ರೀಮಂತ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ರವಾನಿಸುವುದು ನಮ್ಮ ಗುರಿ.
                      </p>
                    </div>

                    {/* English Description */}
                    <div className="text-muted-foreground leading-relaxed">
                      <p className="mb-4">
                        PESU Kannada Koota is a vibrant cultural family that celebrates Karnataka's rich heritage, 
                        beautiful language, and timeless traditions. We are dedicated to preserving and promoting 
                        the essence of Karnataka culture among students and the wider community.
                      </p>
                      <p className="mb-4">
                        Through our Kannada Rajyotsava celebrations, we bring together people from all backgrounds 
                        to experience the joy, color, and depth of Karnataka's cultural tapestry.
                      </p>
                      <p>
                        Our mission is to create a bridge between traditional Karnataka culture and the modern world, 
                        ensuring that our beautiful heritage continues to thrive and inspire future generations.
                      </p>
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border-l-4 border-primary">
                    <h4 className="font-bold text-primary mb-2">Our Mission</h4>
                    <p className="text-foreground italic">
                      "To celebrate, preserve, and promote Karnataka's cultural heritage while fostering 
                      unity and pride among students through meaningful cultural experiences."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Content - Features */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="card-festival group hover:scale-105 text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gradient-festival rounded-full flex items-center justify-center mx-auto mb-4 shadow-festival group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h4 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Club Stats */}
              <Card className="card-golden mt-8">
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-6 text-center">Our Journey</h4>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <h5 className="text-2xl font-bold text-primary">2020</h5>
                      <p className="text-sm text-muted-foreground">Founded</p>
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold text-primary">500+</h5>
                      <p className="text-sm text-muted-foreground">Members</p>
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold text-primary">50+</h5>
                      <p className="text-sm text-muted-foreground">Events</p>
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold text-primary">5</h5>
                      <p className="text-sm text-muted-foreground">Awards</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
