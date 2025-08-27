'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { events as staticEvents, Event } from '../lib/events-data';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from '../components/ui/skeleton';
import { Calendar, MapPin, Ticket, Users, Download, Image as ImageIcon } from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';

// --- HELPER FUNCTIONS & INTERFACES ---

interface CategorizedEvents {
  upcoming: Event[];
  current: Event[];
  past: Event[];
}

const categorizeEvents = (events: Event[]): CategorizedEvents => {
  const now = new Date();
  const upcoming: Event[] = [];
  const current: Event[] = [];
  const past: Event[] = [];

  events.forEach(event => {
    if (event.endDate < now) {
      past.push(event);
    } else if (event.startDate > now) {
      upcoming.push(event);
    } else {
      current.push(event);
    }
  });

  return {
    upcoming: upcoming.sort((a, b) => a.startDate.getTime() - b.startDate.getTime()),
    current,
    past: past.sort((a, b) => b.startDate.getTime() - a.startDate.getTime()),
  };
};

const groupEventsByYear = (events: Event[]) => {
  return events.reduce((acc, event) => {
    const year = event.startDate.getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {} as Record<string, Event[]>);
};

// --- SUB-COMPONENTS ---

const CountdownTimer: React.FC<{ to: Date }> = ({ to }) => {
  const [timeLeft, setTimeLeft] = useState(formatDistanceToNow(to, { addSuffix: true }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(formatDistanceToNow(to, { addSuffix: true }));
    }, 1000);
    return () => clearInterval(interval);
  }, [to]);

  return <span className="font-semibold">{timeLeft}</span>;
};

const HeroCarousel: React.FC<{ events: Event[] }> = ({ events }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  if (events.length === 0) return null;

  return (
    <section aria-label="Event Highlights">
      <Carousel 
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {events.map(event => (
            <CarouselItem key={event.id}>
              <div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h2 className="text-4xl font-bold mb-2">{event.title}</h2>
                  <p className="text-lg mb-4">{event.shortDescription}</p>
                  <div className="flex items-center space-x-4 mb-4 text-sm">
                    <span><Calendar className="inline mr-2 h-4 w-4"/>{format(event.startDate, 'PPP p')}</span>
                    <span><MapPin className="inline mr-2 h-4 w-4"/>{event.location}</span>
                  </div>
                  <Button size="lg" aria-label={`Learn more about ${event.title}`}>
                    <Ticket className="mr-2 h-5 w-5"/>
                    Register Now
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

const CurrentEventsGrid: React.FC<{ events: Event[] }> = ({ events }) => {
  if (events.length === 0) return null;
  const navigate = useNavigate();

  return (
    <section className="py-16" aria-labelledby="current-events-heading">
      <h2 id="current-events-heading" className="text-3xl font-bold text-center mb-8">Happening Now</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <div key={event.id} onClick={() => navigate(`/events/${event.id}`)}>
            <Card className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Badge className="mb-2">Live</Badge>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-4">Ends <CountdownTimer to={event.endDate} /></p>
                <Button className="w-full mt-auto"><Users className="mr-2 h-4 w-4"/>View Details</Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

const PastEventCard: React.FC<{ event: Event }> = ({ event }) => (
    <a href={`/events/${event.id}`}>
    <Card className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2">{event.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{format(event.startDate, 'PPP')}</p>
        <p className="text-sm text-gray-700 mb-4 flex-grow">{event.recap?.summary}</p>
        <div className="flex items-center flex-wrap gap-2 mt-auto">
          {event.recap?.galleryUrl && <Button size="sm" variant="outline"><ImageIcon className="mr-2 h-4 w-4"/>Gallery</Button>}
          {event.recap?.presentationUrl && <Button size="sm" variant="outline"><Download className="mr-2 h-4 w-4"/>Slides</Button>}
          {event.recap?.attendeeCount && <Badge variant="secondary"><Users className="mr-2 h-4 w-4"/>{event.recap.attendeeCount} Attendees</Badge>}
        </div>
      </CardContent>
    </Card>
  </a>
);

const PastEventsArchive: React.FC<{ events: Event[] }> = ({ events }) => {
  const eventsByYear = groupEventsByYear(events);
  const sortedYears = Object.keys(eventsByYear).sort((a, b) => Number(b) - Number(a));

  if (events.length === 0) return null;

  return (
    <section className="py-16" aria-labelledby="past-events-heading">
      <h2 id="past-events-heading" className="text-3xl font-bold text-center mb-12">Past Events Archive</h2>
      <div className="space-y-12">
        {sortedYears.map(year => (
          <div key={year}>
            <h3 className="text-2xl font-semibold mb-6 text-center">{year}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventsByYear[year].map(event => (
                    <PastEventCard key={event.id} event={event} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const LoadingSkeleton: React.FC = () => (
  <div className="container mx-auto px-4 py-16">
    <Skeleton className="h-[60vh] w-full mb-16" />
    <div className="text-center mb-8">
        <Skeleton className="h-10 w-1/2 mx-auto"/>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Skeleton className="h-48 w-full"/>
        <Skeleton className="h-48 w-full"/>
        <Skeleton className="h-48 w-full"/>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<CategorizedEvents | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regLoading, setRegLoading] = useState(false);
  const [regMsg, setRegMsg] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchEvents = () => {
      try {
        const categorized = categorizeEvents(staticEvents);
        setEvents(categorized);
      } catch (error) {
        console.error("Error processing event data:", error);
      }
      setIsLoading(false);
    };

    const timer = setTimeout(fetchEvents, 1500); 
    return () => clearTimeout(timer);
  }, []);

  // Listen for global event to open event dialog (dispatched from cards)
  useEffect(() => {
    const handler = (e: Event | CustomEvent) => {
      const ce = e as CustomEvent;
      const detail = ce?.detail as Event | undefined;
      if (detail) setSelectedEvent(detail);
    };
    window.addEventListener('openEventDialog', handler as EventListener);
    return () => window.removeEventListener('openEventDialog', handler as EventListener);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (!events) {
    return <div className="text-center py-20">Failed to load events. Please try again later.</div>;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen font-sans">
      <main className="container mx-auto px-4 py-16">
        <HeroCarousel events={[...events.current, ...events.upcoming]} />
        <CurrentEventsGrid events={events.current} />
        <PastEventsArchive events={events.past} />

        {/* Event Detail Dialog (controlled) */}
        {selectedEvent && (
          <Dialog open={true} onOpenChange={(open) => { if (!open) setSelectedEvent(null); }}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedEvent.title}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-64 object-cover rounded-md" />
                  <div className="mt-4">
                    <Badge>{selectedEvent.tags?.[0] ?? 'Event'}</Badge>
                    <p className="mt-2 text-sm text-gray-600"><Calendar className="inline mr-2 h-4 w-4"/>{format(selectedEvent.startDate, 'PPP p')}</p>
                    <p className="text-sm text-gray-600"><MapPin className="inline mr-2 h-4 w-4"/>{selectedEvent.location}</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="mb-4 text-gray-700">{selectedEvent.longDescription}</p>
                  {selectedEvent.recap?.summary && (
                    <div className="mb-4">
                      <h4 className="font-semibold">Recap</h4>
                      <p className="text-sm text-gray-700">{selectedEvent.recap.summary}</p>
                    </div>
                  )}

                  {/* Live stream button for live events */}
                  {(selectedEvent.location?.toLowerCase().includes('live') || selectedEvent.tags?.includes('Live')) && (
                    <div className="mb-4">
                      <a href={selectedEvent.location.includes('http') ? selectedEvent.location : '#'} target="_blank" rel="noreferrer">
                        <Button className="mr-2"><Ticket className="mr-2 h-4 w-4"/>Watch Live</Button>
                      </a>
                    </div>
                  )}

                  {/* Registration form */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Register</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input value={regName} onChange={(e) => setRegName(e.target.value)} placeholder="Your name" className="border rounded p-2" />
                      <input value={regEmail} onChange={(e) => setRegEmail(e.target.value)} placeholder="Email" className="border rounded p-2" />
                    </div>
                    <div className="mt-3">
                      <Button onClick={async () => {
                        if (!regName || !regEmail) { setRegMsg('Please provide name and email'); return; }
                        setRegLoading(true); setRegMsg(null);
                        try {
                          const res = await fetch(`/api/events/${selectedEvent.id}/register`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ name: regName, email: regEmail }),
                          });
                          const data = await res.json();
                          if (!res.ok) throw new Error(data.error || 'Registration failed');
                          setRegMsg(data.message || 'Registered successfully');
                        } catch (err: any) {
                          setRegMsg(err.message || 'Registration failed');
                        } finally { setRegLoading(false); }
                      }} disabled={regLoading}>{regLoading ? 'Registering...' : 'Register'}</Button>
                    </div>
                    {regMsg && <div className="mt-2 text-sm text-green-600">{regMsg}</div>}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="ghost" onClick={() => setSelectedEvent(null)}>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </main>
    </div>
  );
};

export default EventsPage;