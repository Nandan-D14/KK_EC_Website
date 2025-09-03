export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  domain: 'Club Head' | 'Vice Head' | 'Domain Head' | 'Technical' | 'Design' | 'Content' | 'Marketing' | 'Events';
  about: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  joinDate: string;
  skills?: string[];
}

export interface TeamYear {
  year: string;
  members: TeamMember[];
}

export const teams: TeamYear[] = [
  {
    year: '2024-2025',
    members: [
      { id: 1, name: 'Ganesh', role: 'Club Head', imageUrl: '', domain: 'Club Head', about: 'Aarav is a visionary leader with a passion for technology and community building. He is dedicated to fostering an inclusive environment where members can thrive and innovate.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2022-08-15', skills: ['Leadership', 'Public Speaking', 'Project Management'] },
      { id: 2, name: 'Diya Patel', role: 'Vice President', imageUrl: 'https://i.pravatar.cc/150?u=2', domain: 'Vice Head', about: 'Diya is a strategic thinker and a great motivator. She excels at managing club operations and ensuring that all projects are executed smoothly and efficiently.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2022-08-15', skills: ['Organization', 'Communication', 'Strategy'] },
      { 
  id: 3, 
  name: 'Sharath', 
  role: 'Technical Head', 
  imageUrl: '/assets/images/sharath.jpg',  // <-- local image path
  domain: 'Domain Head', 
  about: 'Rohan is a tech enthusiast who loves to explore new technologies and mentor fellow students. He has a strong background in software development.', 
  socialLinks: { 
    linkedin: '#', 
    github: '#', 
    twitter: '#' 
  }, 
  joinDate: '2023-01-20', 
  skills: ['React', 'Node.js', 'System Design'] 
},

      { id: 4, name: 'Priya Singh', role: 'Design Head', imageUrl: 'https://i.pravatar.cc/150?u=4', domain: 'Domain Head', about: 'Priya has a keen eye for aesthetics and a user-centric approach to design. She leads the creative team in producing stunning visuals for all club activities.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2023-01-20', skills: ['UI/UX', 'Figma', 'Branding'] },
      { id: 5, name: 'Arjun Kumar', role: 'Marketing Head', imageUrl: 'https://i.pravatar.cc/150?u=5', domain: 'Domain Head', about: 'Arjun is a marketing guru who knows how to create a buzz. He is responsible for all promotional activities and growing the club\'s reach.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2023-01-20', skills: ['Digital Marketing', 'SEO', 'Content Strategy'] },
      { id: 6, name: 'Sneha Reddy', role: 'Events Head', imageUrl: 'https://i.pravatar.cc/150?u=6', domain: 'Domain Head', about: 'Sneha is an organizational powerhouse, ensuring all our events are well-planned and executed flawlessly from start to finish.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2023-01-20', skills: ['Event Planning', 'Logistics', 'Public Relations'] },
      { id: 7, name: 'Vikram Iyer', role: 'Content Head', imageUrl: 'https://i.pravatar.cc/150?u=7', domain: 'Domain Head', about: 'Vikram leads our content team, ensuring a consistent and engaging voice across all our platforms, from blog posts to social media.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2023-01-20', skills: ['Copywriting', 'Editing', 'Storytelling'] },
      { id: 8, name: 'Aditi Rao', role: 'Frontend Developer', imageUrl: 'https://i.pravatar.cc/150?u=8', domain: 'Technical', about: 'Aditi specializes in creating beautiful and responsive user interfaces. She is passionate about web performance and accessibility.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2023-09-01', skills: ['HTML', 'CSS', 'JavaScript'] },
      { id: 9, name: 'Sameer Joshi', role: 'Backend Developer', imageUrl: 'https://i.pravatar.cc/150?u=9', domain: 'Technical', about: 'Sameer builds the robust server-side logic that powers our applications. He has a knack for solving complex problems.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2023-09-01', skills: ['Python', 'Django', 'APIs'] },
      { id: 10, name: 'Meera Nair', role: 'UI/UX Designer', imageUrl: 'https://i.pravatar.cc/150?u=10', domain: 'Design', about: 'Meera focuses on creating intuitive and delightful user experiences. She conducts user research to inform her design decisions.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2023-09-01', skills: ['User Research', 'Wireframing', 'Prototyping'] },
      { id: 11, name: 'Karan Malhotra', role: 'SEO Specialist', imageUrl: 'https://i.pravatar.cc/150?u=11', domain: 'Marketing', about: 'Improving our online visibility.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2023-09-01', skills: ['SEO', 'Analytics', 'Strategy'] },
      { id: 12, name: 'Anjali Desai', role: 'Event Coordinator', imageUrl: 'https://i.pravatar.cc/150?u=12', domain: 'Events', about: 'Making our events unforgettable.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2023-09-01', skills: ['Planning', 'Coordination', 'Logistics'] },
      { id: 13, name: 'Rahul Verma', role: 'Content Writer', imageUrl: 'https://i.pravatar.cc/150?u=13', domain: 'Content', about: 'Crafting compelling stories.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2023-09-01', skills: ['Writing', 'Editing', 'Research'] },
      { id: 14, name: 'Nisha Agarwal', role: 'Graphic Designer', imageUrl: 'https://i.pravatar.cc/150?u=14', domain: 'Design', about: 'Bringing ideas to life visually.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-02-10', skills: ['Illustrator', 'Photoshop', 'Creative Design'] },
      { id: 15, name: 'Suresh Pillai', role: 'Cloud Engineer', imageUrl: 'https://i.pravatar.cc/150?u=15', domain: 'Technical', about: 'Managing our cloud infrastructure.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-02-10', skills: ['AWS', 'Docker', 'Kubernetes'] },
      { id: 16, name: 'Tanvi Shah', role: 'Social Media Manager', imageUrl: 'https://i.pravatar.cc/150?u=16', domain: 'Marketing', about: 'Engaging with our community online.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-02-10', skills: ['Social Media', 'Content Creation', 'Analytics'] },
      { id: 17, name: 'Amit Bhatt', role: 'Mobile Developer', imageUrl: 'https://i.pravatar.cc/150?u=17', domain: 'Technical', about: 'Building our mobile applications.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-02-10', skills: ['React Native', 'iOS', 'Android'] },
      { id: 18, name: 'Sunita Krishnan', role: 'Technical Writer', imageUrl: 'https://i.pravatar.cc/150?u=18', domain: 'Content', about: 'Documenting our technical projects.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-02-10', skills: ['Technical Writing', 'Documentation', 'Markdown'] },
      { id: 19, name: 'Rajesh Menon', role: 'DevOps Engineer', imageUrl: 'https://i.pravatar.cc/150?u=19', domain: 'Technical', about: 'Automating our development pipeline.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-02-10', skills: ['CI/CD', 'Jenkins', 'Ansible'] },
      { id: 20, name: 'Deepika Mehta', role: 'QA Tester', imageUrl: 'https://i.pravatar.cc/150?u=20', domain: 'Technical', about: 'Ensuring our software is bug-free.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-02-10', skills: ['Manual Testing', 'Automation', 'Jira'] },
      { id: 21, name: 'Vivan Das', role: 'Frontend Developer', imageUrl: 'https://i.pravatar.cc/150?u=21', domain: 'Technical', about: 'Passionate about web performance.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-03-15', skills: ['Vue.js', 'Nuxt.js', 'Performance'] },
      { id: 22, name: 'Zara Khan', role: 'UI/UX Designer', imageUrl: 'https://i.pravatar.cc/150?u=22', domain: 'Design', about: 'Focusing on user-centric design.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-03-15', skills: ['User-Centered Design', 'A/B Testing', 'Analytics'] },
      { id: 23, name: 'Ishaan Chatterjee', role: 'Backend Developer', imageUrl: 'https://i.pravatar.cc/150?u=23', domain: 'Technical', about: 'Loves building scalable APIs.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-03-15', skills: ['Go', 'Gin', 'Microservices'] },
      { id: 24, name: 'Myra Reddy', role: 'Content Writer', imageUrl: 'https://i.pravatar.cc/150?u=24', domain: 'Content', about: 'Specializes in technical blogging.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-03-15', skills: ['Blogging', 'SEO Writing', 'WordPress'] },
      { id: 25, name: 'Kabir Anand', role: 'Marketing Analyst', imageUrl: 'https://i.pravatar.cc/150?u=25', domain: 'Marketing', about: 'Analyzing market trends.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-03-15', skills: ['Data Analysis', 'Market Research', 'SQL'] },
      { id: 26, name: 'Anika Gupta', role: 'Event Planner', imageUrl: 'https://i.pravatar.cc/150?u=26', domain: 'Events', about: 'Detail-oriented event planner.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-03-15', skills: ['Budgeting', 'Vendor Management', 'Scheduling'] },
      { id: 27, name: 'Dev Mehra', role: 'Frontend Developer', imageUrl: 'https://i.pravatar.cc/150?u=27', domain: 'Technical', about: 'Expert in React and Vue.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-04-20', skills: ['React', 'Vue.js', 'TypeScript'] },
      { id: 28, name: 'Saanvi Kumar', role: 'Graphic Designer', imageUrl: 'https://i.pravatar.cc/150?u=28', domain: 'Design', about: 'Loves creating brand identities.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-04-20', skills: ['Branding', 'Logo Design', 'Typography'] },
      { id: 29, name: 'Arnav Singh', role: 'Backend Developer', imageUrl: 'https://i.pravatar.cc/150?u=29', domain: 'Technical', about: 'Focuses on database optimization.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-04-20', skills: ['PostgreSQL', 'MongoDB', 'Optimization'] },
      { id: 30, name: 'Kiara Sharma', role: 'Content Strategist', imageUrl: 'https://i.pravatar.cc/150?u=30', domain: 'Content', about: 'Plans our content calendar.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-04-20', skills: ['Content Strategy', 'Calendars', 'Management'] },
      { id: 31, name: 'Reyansh Jain', role: 'Digital Marketer', imageUrl: 'https://i.pravatar.cc/150?u=31', domain: 'Marketing', about: 'Manages our ad campaigns.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-04-20', skills: ['Google Ads', 'Facebook Ads', 'Campaigns'] },
      { id: 32, name: 'Tara Choudhary', role: 'Event Manager', imageUrl: 'https://i.pravatar.cc/150?u=32', domain: 'Events', about: 'Ensures smooth event execution.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-04-20', skills: ['Execution', 'Management', 'Coordination'] },
      { id: 33, name: 'Yash Patil', role: 'Frontend Developer', imageUrl: 'https://i.pravatar.cc/150?u=33', domain: 'Technical', about: 'Enjoys creating animations.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-05-25', skills: ['CSS Animations', 'GSAP', 'Three.js'] },
      { id: 34, name: 'Ananya Joshi', role: 'UI/UX Designer', imageUrl: 'https://i.pravatar.cc/150?u=34', domain: 'Design', about: 'Passionate about accessibility.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-05-25', skills: ['Accessibility', 'WCAG', 'Inclusive Design'] },
      { id: 35, name: 'Advik Reddy', role: 'Backend Developer', imageUrl: 'https://i.pravatar.cc/150?u=35', domain: 'Technical', about: 'Works with microservices.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-05-25', skills: ['Microservices', 'REST', 'GraphQL'] },
      { id: 36, name: 'Isha Nair', role: 'Content Editor', imageUrl: 'https://i.pravatar.cc/150?u=36', domain: 'Content', about: 'Ensures our content is perfect.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-05-25', skills: ['Editing', 'Proofreading', 'Style Guides'] },
      { id: 37, name: 'Arush Mehta', role: 'Marketing Coordinator', imageUrl: 'https://i.pravatar.cc/150?u=37', domain: 'Marketing', about: 'Coordinates marketing efforts.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-05-25', skills: ['Coordination', 'Campaigns', 'Reporting'] },
      { id: 38, name: 'Riya Gupta', role: 'Event Assistant', imageUrl: 'https://i.pravatar.cc/150?u=38', domain: 'Events', about: 'Assists in planning and execution.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-05-25', skills: ['Assisting', 'Planning', 'Execution'] },
      { id: 39, name: 'Dhruv Kumar', role: 'Frontend Developer', imageUrl: 'https://i.pravatar.cc/150?u=39', domain: 'Technical', about: 'Loves working with new frameworks.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-06-30', skills: ['Svelte', 'Angular', 'Web Components'] },
      { id: 40, name: 'Avani Singh', role: 'Graphic Designer', imageUrl: 'https://i.pravatar.cc/150?u=40', domain: 'Design', about: 'Creates stunning visuals.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-06-30', skills: ['Visual Design', 'Illustration', 'Motion Graphics'] },
      { id: 41, name: 'Sai Sharma', role: 'Backend Developer', imageUrl: 'https://i.pravatar.cc/150?u=41', domain: 'Technical', about: 'Expert in database management.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-06-30', skills: ['SQL', 'NoSQL', 'Database Design'] },
      { id: 42, name: 'Pari Patel', role: 'Content Creator', imageUrl: 'https://i.pravatar.cc/150?u=42', domain: 'Content', about: 'Creates engaging video content.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-06-30', skills: ['Video Production', 'Scriptwriting', 'Editing'] },
      { id: 43, name: 'Neel Iyer', role: 'Marketing Specialist', imageUrl: 'https://i.pravatar.cc/150?u=43', domain: 'Marketing', about: 'Specializes in email marketing.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-06-30', skills: ['Email Marketing', 'Automation', 'A/B Testing'] },
      { id: 44, name: 'Anvi Rao', role: 'Event Organizer', imageUrl: 'https://i.pravatar.cc/150?u=44', domain: 'Events', about: 'Brings creative event ideas.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-06-30', skills: ['Creative Ideation', 'Organization', 'Execution'] },
      { id: 45, name: 'Shaurya Verma', role: 'Frontend Developer', imageUrl: 'https://i.pravatar.cc/150?u=45', domain: 'Technical', about: 'Focuses on mobile-first design.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-07-22', skills: ['Responsive Design', 'Mobile First', 'CSS Grid'] },
      { id: 46, name: 'Aanya Reddy', role: 'UI/UX Designer', imageUrl: 'https://i.pravatar.cc/150?u=46', domain: 'Design', about: 'Conducts user research.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-07-22', skills: ['User Interviews', 'Persona Creation', 'Journey Mapping'] },
      { id: 47, name: 'Veer Malhotra', role: 'Backend Developer', imageUrl: 'https://i.pravatar.cc/150?u=47', domain: 'Technical', about: 'Secures our applications.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-07-22', skills: ['Security', 'Authentication', 'Authorization'] },
      { id: 48, name: 'Siya Desai', role: 'Content Marketer', imageUrl: 'https://i.pravatar.cc/150?u=48', domain: 'Content', about: 'Promotes our content.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-07-22', skills: ['Content Promotion', 'Distribution', 'Outreach'] },
      { id: 49, name: 'Krish Agarwal', role: 'Marketing Intern', imageUrl: 'https://i.pravatar.cc/150?u=49', domain: 'Marketing', about: 'Learning the ropes of marketing.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-07-22', skills: ['Eager to Learn', 'Team Player', 'Proactive'] },
      { id: 50, name: 'Diya Shah', role: 'Event Intern', imageUrl: 'https://i.pravatar.cc/150?u=50', domain: 'Events', about: 'Eager to learn about event management.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2024-07-22', skills: ['Enthusiastic', 'Organized', 'Hardworking'] }
    ]
  },
  {
    year: '2023-2024',
    members: [
      { id: 51, name: 'Rohan Mehra', role: 'Club President', imageUrl: 'https://i.pravatar.cc/150?u=51', domain: 'Club Head', about: 'Rohan led the club with distinction, overseeing a period of significant growth and success.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2021-08-20', skills: ['Leadership', 'Strategy', 'Mentorship'] },
      { id: 52, name: 'Isha Singh', role: 'Vice President', imageUrl: 'https://i.pravatar.cc/150?u=52', domain: 'Vice Head', about: 'Isha was instrumental in managing the club\'s day-to-day operations and fostering a positive team culture.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2021-08-20', skills: ['Operations', 'Team Management', 'Communication'] },
      { id: 53, name: 'Arjun Reddy', role: 'Technical Head', imageUrl: 'https://i.pravatar.cc/150?u=53', domain: 'Domain Head', about: 'Former technical head.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2022-01-15', skills: ['React', 'Node.js', 'System Design'] },
      { id: 54, name: 'Pooja Sharma', role: 'Design Head', imageUrl: 'https://i.pravatar.cc/150?u=54', domain: 'Domain Head', about: 'Former design head.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2022-01-15', skills: ['UI/UX', 'Figma', 'Branding'] },
      { id: 55, name: 'Sameer Khan', role: 'Marketing Head', imageUrl: 'https://i.pravatar.cc/150?u=55', domain: 'Domain Head', about: 'Former marketing head.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2022-01-15', skills: ['Digital Marketing', 'SEO', 'Content Strategy'] },
      { id: 56, name: 'Naina Gupta', role: 'Events Head', imageUrl: 'https://i.pravatar.cc/150?u=56', domain: 'Domain Head', about: 'Former events head.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2022-01-15', skills: ['Event Planning', 'Logistics', 'Public Relations'] },
      { id: 57, name: 'Kunal Patel', role: 'Content Head', imageUrl: 'https://i.pravatar.cc/150?u=57', domain: 'Domain Head', about: 'Former content head.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2022-01-15', skills: ['Copywriting', 'Editing', 'Storytelling'] },
      { id: 58, name: 'Aditya Kumar', role: 'Frontend Developer', imageUrl: 'https://i.pravatar.cc/150?u=58', domain: 'Technical', about: 'Built cool stuff.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2022-09-05', skills: ['HTML', 'CSS', 'JavaScript'] },
      { id: 59, name: 'Rhea Iyer', role: 'Backend Developer', imageUrl: 'https://i.pravatar.cc/150?u=59', domain: 'Technical', about: 'Managed our databases.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2022-09-05', skills: ['Python', 'Django', 'APIs'] },
      { id: 60, name: 'Aryan Joshi', role: 'UI/UX Designer', imageUrl: 'https://i.pravatar.cc/150?u=60', domain: 'Design', about: 'Designed beautiful interfaces.', socialLinks: { linkedin: '#', github: '#', twitter: '#' }, joinDate: '2022-09-05', skills: ['User Research', 'Wireframing', 'Prototyping'] }
    ]
  }
];
