import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Calendar, MapPin, ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';

const EventsSection = () => {
  const [openYears, setOpenYears] = useState<{ [key: string]: boolean }>({ '2025': true });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentYearEvents = [
    {
      id: 1,
      name: 'Kannada Rajyotsava Grand Celebration',
      date: 'November 1, 2025',
      location: 'PESU Main Auditorium',
      description: 'Annual grand celebration with cultural performances, traditional food, and cultural competitions.',
      image: 'Event 1 Placeholder',
      status: 'upcoming'
    },
    {
      id: 2,
      name: 'Kannada Poetry & Literature Festival',
      date: 'November 15, 2025',
      location: 'PESU Library Hall',
      description: 'Celebrate Kannada literature with poetry readings, book discussions, and literary competitions.',
      image: 'Event 2 Placeholder',
      status: 'upcoming'
    },
    {
      id: 3,
      name: 'Traditional Folk Dance Workshop',
      date: 'December 5, 2025',
      location: 'PESU Cultural Center',
      description: 'Learn traditional Karnataka folk dances like Dollu Kunitha and Yakshagana with expert instructors.',
      image: 'Event 3 Placeholder',
      status: 'upcoming'
    }
  ];

  const pastYearsEvents = {
    '2024': [
      { name: 'Kannada Rajyotsava 2024', date: 'Nov 1, 2024', description: 'Grand celebration with 200+ participants' },
      { name: 'Cultural Night 2024', date: 'Nov 20, 2024', description: 'Traditional performances and competitions' }
    ],
    '2023': [
      { name: 'Kannada Rajyotsava 2023', date: 'Nov 1, 2023', description: 'Heritage showcase and cultural exhibitions' },
      { name: 'Folk Music Festival', date: 'Nov 25, 2023', description: 'Traditional Kannada music performances' }
    ],
    '2022': [
      { name: 'Kannada Rajyotsava 2022', date: 'Nov 1, 2022', description: 'Digital celebration during pandemic recovery' }
    ]
  };

  const eventImages = [
    'Event Image 1 - Cultural Performance',
    'Event Image 2 - Traditional Dance',
    'Event Image 3 - Literature Festival',
    'Event Image 4 - Food Festival',
    'Event Image 5 - Team Photo'
  ];

  const toggleYear = (year: string) => {
    setOpenYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % eventImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + eventImages.length) % eventImages.length);
  };

  return (
    <section id="events" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-kannada">
            ನಮ್ಮ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our rich cultural events celebrating Karnataka's heritage through the years
          </p>
        </div>

        {/* Current Year Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Current Year Events - 2025</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentYearEvents.map((event) => (
              <Card key={event.id} className="card-festival group hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gradient-festival rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-medium">{event.image}</span>
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">
                    {event.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">
                      {event.description}
                    </p>
                    <Button className="btn-festival w-full mt-4">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Images Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Event Highlights</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-muted rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
              <span className="text-xl font-medium text-muted-foreground">
                {eventImages[currentImageIndex]}
              </span>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Image Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {eventImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Past Years Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Past Years</h3>
          <div className="space-y-6">
            {Object.entries(pastYearsEvents).map(([year, events]) => (
              <Card key={year} className="card-festival">
                <Collapsible open={openYears[year]} onOpenChange={() => toggleYear(year)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-primary">{year}</CardTitle>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary transition-transform duration-200 ${
                            openYears[year] ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {events.map((event, index) => (
                          <div key={index} className="timeline-item">
                            <h4 className="font-semibold text-primary mb-1">{event.name}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                            <p className="text-sm text-foreground">{event.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;