// import React from "react";
// import styled from "styled-components";
// import { InstagramIcon, LinkedInIcon } from "./Icons";

// interface TeamMember {
//   name: string;
//   role: string;
//   imageUrl: string;
// }

// interface TeamMemberCardProps {
//   member: TeamMember;
// }

// const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <div className="card-info">
//           <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 mx-auto">
//             <img
//               className="w-full h-full rounded-full object-cover ring-4 ring-gray-900 transition-all duration-300"
//               src={member.imageUrl}
//               alt={`Portrait of ${member.name}`}
//               onError={(e) => {
//                 const target = e.target as HTMLImageElement;
//                 target.onerror = null;
//                 target.src = `https://placehold.co/200x200/E2E8F0/4A5568?text=${member.name
//                   .split(" ")
//                   .map((n) => n[0])
//                   .join("")}`;
//               }}
//             />
//           </div>
//           <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-300">
//             {member.name}
//           </h3>
//           <p className="text-sm font-medium text-gray-300 mb-4 px-3 py-1 bg-gray-800 rounded-full">
//             {member.role}
//           </p>
//           <div className="flex space-x-3">
//             <a
//               href="#"
//               className="p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
//               aria-label={`${member.name}'s Instagram profile`}
//             >
//               <InstagramIcon />
//             </a>
//             <a
//               href="#"
//               className="p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
//               aria-label={`${member.name}'s LinkedIn profile`}
//             >
//               <LinkedInIcon />
//             </a>
//           </div>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .card {
//     --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
//     width: 300px;
//     height: auto;
//     padding: 5px;
//     border-radius: 1rem;
//     overflow: visible;
//     background: #f7ba2b;
//     background: var(--background);
//     position: relative;
//     z-index: 1;
//   }

//   .card::after {
//     position: absolute;
//     content: "";
//     top: 30px;
//     left: 0;
//     right: 0;
//     z-index: -1;
//     height: 100%;
//     width: 100%;
//     transform: scale(0.8);
//     filter: blur(25px);
//     background: #f7ba2b;
//     background: var(--background);
//     transition: opacity 0.5s;
//   }

//   .card-info {
//     --color: #181818;
//     background: var(--color);
//     color: var(--color);
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//     padding: 1.5rem;
//     overflow: visible;
//     border-radius: 0.7rem;
//     transition: color 1s;
//   }

//   /* Hover effects */
//   .card:hover::after {
//     opacity: 0;
//   }

//   .card:hover .card-info {
//     color: #f7ba2b;
//   }

//   .card:hover .card-info h3 {
//     color: #f7ba2b;
//   }
// `;

// export default TeamMemberCard;
