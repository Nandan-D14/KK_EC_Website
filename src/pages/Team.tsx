'use client'
import React, { useState } from 'react';
import LiquidChrome from './LiquidChrome';  
import styled from 'styled-components';


const styles = `
  @keyframes gradient-move {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animate-gradient-move {
    background-size: 200% 200%;
    animation: gradient-move 4s linear infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) translateX(10px) rotate(5deg);
    }
    100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
  }

  .animate-pulse-slow {
    animation: pulse 8s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

// Define the type for a single team member
type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

// Year-wise data
const teamMembersByYear: Record<string, TeamMember[]> = {
  "2025": [
    { name: 'Ganesh Hegde', role: 'Club HEAD', imageUrl: 'https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg' },
    { name: 'Achyuth', role: 'Vice HEAD', imageUrl: 'https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg' },
    { name: 'SHARATH GOWDA', role: 'IT HEAD', imageUrl: '/D_heads/sharath.jpg' },
    { name: 'Kushal', role: 'Event HEAD', imageUrl: '/D_heads/kushal.jpg' },
    { name: 'Preksha', role: 'Marketing HEAD', imageUrl: '/D_heads/preksha.jpg' },
    { name: 'Ruchitha', role: 'Public Relations HEAD', imageUrl: '/D_heads/ruchitha.jpg' },
    { name: 'Ananya Satish', role: 'Cultural HEAD', imageUrl: '/D_heads/ananya.jpg' },
    { name: 'Siri Basavaraj', role: 'Hospitality HEAD', imageUrl: '/D_heads/siri.jpg' },
    { name: 'Srujan kashyap', role: 'Operations HEAD', imageUrl: 'https://i.pinimg.com/736x/ce/31/42/ce3142d7a968fff3aecd0100572a5e8b.jpg' },
    { name: 'Suman Kumar', role: 'Logistic HEAD', imageUrl: 'https://i.pinimg.com/1200x/08/a2/41/08a2413b771b729a9f9df20fa97be52a.jpg' },
    { name: 'Rohan', role: 'Design HEAD', imageUrl: 'https://i.pinimg.com/736x/8e/c1/f8/8ec1f80db272047cedf4c20263114387.jpg' },
    { name: 'RCB FAN', role: 'Die Hard Fan', imageUrl: 'https://i.pinimg.com/736x/ce/31/42/ce3142d7a968fff3aecd0100572a5e8b.jpg' },
  ],
  "2024": [
    // later you can add 2024 team members here
  ]
};

// SVG Icon Components
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003Zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.231 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047h.001Zm4.905 1.882a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8 4.465a3.535 3.535 0 1 0 0 7.07 3.535 3.535 0 0 0 0-7.07ZM8 5.535a2.465 2.465 0 1 1 0 4.93 2.465 2.465 0 0 1 0-4.93Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zM4.943 13.447V6.169H2.542v7.278h2.401zM3.742 5.214c.837 0 1.358-.554 1.358-1.248-.015-.71-.52-1.248-1.342-1.248-.822 0-1.358.538-1.358 1.248 0 .694.52 1.248 1.327 1.248h.015zM13.458 13.447V9.359c0-2.183-1.167-3.197-2.724-3.197-1.258 0-1.845.692-2.165 1.18v-1.013H6.168c.03.663 0 7.118 0 7.118h2.401v-3.974c0-.213.015-.426.08-.577.174-.426.571-.867 1.236-.867.872 0 1.221.654 1.221 1.613v3.805h2.352z" />
  </svg>
);

// Team Member Card Component with Magic Theme
interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-info">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 mx-auto">
            <img
              className="w-full h-full rounded-full object-cover ring-4 ring-gray-900 transition-all duration-300"
              src={member.imageUrl}
              alt={`Portrait of ${member.name}`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/200x200/E2E8F0/4A5568?text=${member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}`;
              }}
            />
          </div>
          <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-gray-300 mb-4 px-3 py-1 bg-gray-800 rounded-full">
            {member.role}
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label={`${member.name}'s Instagram profile`}
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
   display: flex;
  justify-content: center;
  gap: 2rem; /* space between cards */
  flex-wrap: wrap; /* makes them responsive */

  .card {
    --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
    width: 300px;
    height: auto;
    padding: 5px;
    border-radius: 1rem;
    overflow: visible;
    background: var(--background);
    position: relative;
    z-index: 1;
  }

  .card::after {
    position: absolute;
    content: "";
    top: 30px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(0.8);
    filter: blur(25px);
    background: var(--background);
    transition: opacity 0.5s;
  }

  .card-info {
    --color: #181818;
    background: var(--color);
    color: var(--color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    border-radius: 0.7rem;
    transition: color 1s;
  }

  .card:hover::after {
    opacity: 0;
  }

  .card:hover .card-info,
  .card:hover .card-info h3 {
    color: #f7ba2b;
  }
`;

// Main Component
const TeamMemberSection: React.FC = () => {
  const [year, setYear] = useState("2025");

  const members = teamMembersByYear[year] || [];

  return (
    <section className="relative font-sans transition-colors overflow-hidden">
      {/* Liquid Chrome Background */}
      <div className="absolute inset-0 z-0">
        <LiquidChrome 
          baseColor={[0.08, 0.08, 0.08]} 
          speed={0.15}
          amplitude={0.4}
          frequencyX={2.5}
          frequencyY={1.8}
          interactive={false}
          className="w-full h-full"
        />
      </div>
      
      {/* Semi-transparent overlay to improve text readability */}
      {/* <div className="absolute inset-0 bg-white/70 dark:bg-black/60 z-1"></div> */}

      <div className="relative w-full px-4 py-20 sm:px-6 lg:px-8 lg:py-32 z-10">
        {/* Header Section */}
        <div className="w-full text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            ನಮ್ಮ ತಂಡವನ್ನು ಭೇಟಿ ಮಾಡಿ
          </div>

          {/* Gradient Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            ನಮ್ಮ ಅತ್ಯುತ್ತಮ ತಂಡ
          </h2>

          {/* Bold Paragraph */}
          <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            ನಮ್ಮ ಅದ್ಭುತ ತಂಡವನ್ನು ಭೇಟಿ ಮಾಡಿ – ಪ್ರತಿಭೆ, ಸೃಜನಶೀಲತೆ ಮತ್ತು ಸಮರ್ಪಣೆಯ ಒಕ್ಕೂಟ,
            ಉತ್ಸಾಹ ಮತ್ತು ಹೊಸತನದೊಂದಿಗೆ ಯಶಸ್ಸನ್ನು ರೂಪಿಸುತ್ತಿದೆ.
          </p>

          {/* Year Selector */}
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 w-full">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMemberSection;
