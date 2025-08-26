import { Calendar, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const upcomingEvents = [
    {
      title: "ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ 2025",
      date: "November 1, 2025",
      location: "PES University, EC Campus",
      description:
        "Join us for a grand celebration of Karnataka Rajyotsava with cultural performances, traditional food, and a lot of fun!",
      image: "/assets/hero-banner.jpg",
      tags: ["Cultural", "Festival", "Music"],
    },
    {
      title: "Tech in Kannada",
      date: "November 15, 2025",
      location: "Online",
      description:
        "A webinar series on the latest technology trends, all in Kannada. Perfect for tech enthusiasts and students.",
      image: "/assets/hero-banner.jpg",
      tags: ["Tech", "Webinar", "Education"],
    },
  ];

  const pastEvents = [
    {
      title: "Kavi Sammelana",
      date: "October 2, 2025",
      location: "PES University, EC Campus",
      image: "/assets/hero-banner.jpg",
    },
    {
      title: "Janapada Habba",
      date: "September 10, 2025",
      location: "PES University, EC Campus",
      image: "/assets/hero-banner.jpg",
    },
    {
      title: "Kannada Film Festival",
      date: "August 20, 2025",
      location: "PES University, EC Campus",
      image: "/assets/hero-banner.jpg",
    },
    {
      title: "Traditional Games Day",
      date: "July 30, 2025",
      location: "PES University, EC Campus",
      image: "/assets/hero-banner.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Events
          </h1>
          <p className="text-lg text-gray-600">
            Join our vibrant community and celebrate Kannada culture with us.
          </p>
        </header>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    <Ticket className="w-4 h-4 mr-2" />
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Past Events
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center p-2">
                      {event.title}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-800">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Events;