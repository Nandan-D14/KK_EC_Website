import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-kannada">
            ನಮ್ಮ ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವದ ಕ್ಷಣಗಳು
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Relive the magical moments of our Kannada Rajyotsava celebrations
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-5xl mx-auto">
          <Card className="card-festival overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group cursor-pointer hover:from-primary/30 hover:to-secondary/30 transition-all duration-300">
                
                {/* Video Placeholder */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors duration-200 shadow-festival">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Kannada Rajyotsava 2024 Highlights
                  </h3>
                  <p className="text-muted-foreground">
                    Click to play our cultural celebration moments
                  </p>
                </div>

                {/* Video Overlay Pattern */}
                <div className="absolute inset-0 pattern-cultural opacity-30"></div>
                
                {/* Play Button Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </CardContent>
          </Card>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Kannada Rajyotsava Moments
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experience the vibrant colors, traditional dances, cultural performances, and joyful celebrations 
                that make our Kannada Rajyotsava truly special. From folk music to classical dance, from traditional 
                food to literary discussions - every moment is a celebration of Karnataka's rich heritage.
              </p>
              
              {/* Video Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="card-golden text-center">
                  <h4 className="text-lg font-bold text-primary">15+ Hours</h4>
                  <p className="text-sm text-muted-foreground">Cultural Content</p>
                </div>
                <div className="card-golden text-center">
                  <h4 className="text-lg font-bold text-primary">200+</h4>
                  <p className="text-sm text-muted-foreground">Participants</p>
                </div>
                <div className="card-golden text-center">
                  <h4 className="text-lg font-bold text-primary">50+</h4>
                  <p className="text-sm text-muted-foreground">Performances</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Video Links */}
          <div className="mt-12">
            <h4 className="text-xl font-bold text-primary mb-6 text-center">
              More Cultural Moments
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Folk Dance Performances', duration: '12:45' },
                { title: 'Traditional Music Concert', duration: '18:30' },
                { title: 'Cultural Quiz Competition', duration: '8:15' }
              ].map((video, index) => (
                <Card key={index} className="card-golden group cursor-pointer hover:scale-105 transition-transform">
                  <CardContent className="p-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                      <Play className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h5 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                      {video.title}
                    </h5>
                    <p className="text-sm text-muted-foreground">{video.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;