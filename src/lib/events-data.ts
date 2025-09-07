export interface Event {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  location: string;
  tags: string[];
  recap?: {
    summary: string;
    galleryUrl?: string;
    presentationUrl?: string;
    attendeeCount?: number;
  };
}

const now = new Date();

export const events: Event[] = [
  // Upcoming Events
  {
    id: '1',
    title: "ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ 2025",
    shortDescription: "A grand celebration of Karnataka Rajyotsava with cultural performances.",
    longDescription: "Join us for a grand celebration of Karnataka Rajyotsava with cultural performances, traditional food, and a lot of fun! This all-day event will showcase the rich heritage of Karnataka.",
    imageUrl: "https://drive.google.com/file/d/1eUQo70HtjxUAfjJksWWqm0Fc9ojlUFAs/preview",
    startDate: new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000),
    endDate: new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000),
    location: "PES University, EC Campus",
    tags: ["Cultural", "Festival", "Music"],
  },
  {
    id: '2',
    title: "Tech in Kannada",
    shortDescription: "A webinar series on the latest technology trends, all in Kannada.",
    longDescription: "A webinar series on the latest technology trends, all in Kannada. Perfect for tech enthusiasts and students looking to learn in their native language.",
    imageUrl: "https://drive.google.com/file/d/1eUQo70HtjxUAfjJksWWqm0Fc9ojlUFAs/preview",
    startDate: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
    endDate: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000),
    location: "Online",
    tags: ["Tech", "Webinar", "Education"],
  },

  // Current Events
  {
    id: '3',
    title: "Live Coding Marathon",
    shortDescription: "A 24-hour live coding marathon to build an app from scratch.",
    longDescription: "Join our live coding marathon, happening right now! We are building a full-stack application in Kannada. Tune in to our YouTube channel to watch and learn.",
    imageUrl: "https://drive.google.com/file/d/1eUQo70HtjxUAfjJksWWqm0Fc9ojlUFAs/preview",
    startDate: new Date(now.getTime() - 2 * 60 * 60 * 1000),
    endDate: new Date(now.getTime() + 22 * 60 * 60 * 1000),
    location: "Live on YouTube",
    tags: ["Live", "Coding", "Tech"],
  },

  // Past Events
  {
    id: '4',
    title: "Kavi Sammelana 2024",
    shortDescription: "An evening of enchanting poetry recitations by renowned Kannada poets.",
    longDescription: "Our annual Kavi Sammelana was a huge success, featuring poets from across the state who mesmerized the audience with their beautiful verses.",
    imageUrl: "https://drive.google.com/file/d/1eUQo70HtjxUAfjJksWWqm0Fc9ojlUFAs/preview",
    startDate: new Date(now.getFullYear(), now.getMonth() - 1, 15),
    endDate: new Date(now.getFullYear(), now.getMonth() - 1, 15, 21),
    location: "PES University, EC Campus",
    tags: ["Poetry", "Cultural", "Literature"],
    recap: {
      summary: "The event saw a turnout of over 300 attendees and featured 15 amazing poets.",
      galleryUrl: "#",
      presentationUrl: "#",
      attendeeCount: 300,
    },
  },
  {
    id: '5',
    title: "Janapada Habba 2024",
    shortDescription: "A celebration of folk arts, music, and dance from Karnataka.",
    longDescription: "We celebrated the rich folk traditions of Karnataka with a day full of dance, music, and art. It was a vibrant and colorful affair.",
    imageUrl: "https://drive.google.com/file/d/1eUQo70HtjxUAfjJksWWqm0Fc9ojlUFAs/preview",
    startDate: new Date(now.getFullYear(), now.getMonth() - 2, 10),
    endDate: new Date(now.getFullYear(), now.getMonth() - 2, 10, 22),
    location: "PES University, EC Campus",
    tags: ["Folk Art", "Festival", "Dance"],
    recap: {
      summary: "A wonderful celebration of our roots with over 50 performers.",
      galleryUrl: "#",
      attendeeCount: 500,
    },
  },
  {
    id: '6',
    title: "Kannada Film Festival 2023",
    shortDescription: "A week-long festival screening classic and contemporary Kannada films.",
    longDescription: "Our first-ever film festival was a grand success, showcasing the best of Kannada cinema from different eras.",
    imageUrl: "https://drive.google.com/file/d/1eUQo70HtjxUAfjJksWWqm0Fc9ojlUFAs/preview",
    startDate: new Date(now.getFullYear() - 1, 8, 20),
    endDate: new Date(now.getFullYear() - 1, 8, 27),
    location: "PES University, EC Campus",
    tags: ["Film", "Festival", "Cinema"],
    recap: {
      summary: "Screened 20 films over 7 days to a full house every day.",
      galleryUrl: "#",
      attendeeCount: 1000,
    },
  },
];