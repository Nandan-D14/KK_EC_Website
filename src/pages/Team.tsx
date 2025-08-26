'use client';
import React, { useState } from 'react';
import { teams, TeamMember } from '../lib/team-data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Linkedin, Github, Twitter, Calendar } from 'lucide-react';
import { Badge } from '../components/ui/badge';

// Modal for team member details
const TeamMemberModal: React.FC<{ member: TeamMember }> = ({ member }) => (
  <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-900 border-none shadow-2xl rounded-2xl overflow-hidden p-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
    <div className="relative">
      <div className="h-28 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <Avatar className="w-36 h-36 mx-auto mb-4 absolute top-10 left-1/2 -translate-x-1/2 border-4 border-white dark:border-gray-900 shadow-lg">
        <AvatarImage src={member.imageUrl} alt={member.name} />
        <AvatarFallback className="text-5xl">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
    </div>
    <DialogHeader className="pt-32 text-center px-6">
      <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-white">{member.name}</DialogTitle>
      <DialogDescription className="text-xl text-blue-500 dark:text-blue-400 font-light">{member.role}</DialogDescription>
    </DialogHeader>
    <div className="p-6">
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">{member.about}</p>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200 mb-3">Skills</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {member.skills?.map(skill => (
            <Badge key={skill} variant="default">{skill}</Badge>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center space-x-6 mb-6">
        {member.socialLinks.linkedin && <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={28} /></a>}
        {member.socialLinks.github && <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"><Github size={28} /></a>}
        {member.socialLinks.twitter && <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition-colors"><Twitter size={28} /></a>}
      </div>

      <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Calendar size={16} />
            Joined: {member.joinDate}
          </Badge>
          <Badge variant="secondary">{member.domain}</Badge>
      </div>
    </div>
  </DialogContent>
);

// Card for team member
const TeamMemberCard: React.FC<{ member: TeamMember, onOpenModal: (member: TeamMember) => void }> = ({ member, onOpenModal }) => (
    <div onClick={() => onOpenModal(member)} className="cursor-pointer group">
        <Card className="text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-4">
                <Avatar className="w-20 h-20 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <AvatarImage src={member.imageUrl} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-xs text-blue-500 dark:text-blue-400">{member.role}</p>
            </CardContent>
        </Card>
    </div>
);


// Main Team Page Component
const TeamPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleOpenModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <Dialog open={!!selectedMember} onOpenChange={(isOpen) => !isOpen && handleCloseModal()}>
      <section className="bg-gray-50 dark:bg-gray-950 py-16 sm:py-24 font-sans">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Our Team</h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
              The passionate people behind our success.
            </p>
          </div>

          <Tabs defaultValue={teams[0].year} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:w-1/3 mx-auto">
              {teams.map((team) => (
                <TabsTrigger key={team.year} value={team.year}>{team.year}</TabsTrigger>
              ))}
            </TabsList>

            {teams.map((team) => {
              const clubHead = team.members.find(m => m.domain === 'Club Head');
              const viceHead = team.members.find(m => m.domain === 'Vice Head');
              const domainHeads = team.members.filter(m => m.domain === 'Domain Head');
              const domains = [...new Set(team.members.filter(m => !['Club Head', 'Vice Head', 'Domain Head'].includes(m.domain)).map(m => m.domain))];

              return (
                <TabsContent key={team.year} value={team.year} className="mt-10">
                  {/* Leadership Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {clubHead && (
                      <div className="lg:col-span-1 flex justify-center">
                        <div onClick={() => handleOpenModal(clubHead)} className="cursor-pointer group w-full max-w-sm">
                            <Card className="text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 bg-white dark:bg-gray-800">
                                <CardHeader>
                                    <Avatar className="w-32 h-32 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                                        <AvatarImage src={clubHead.imageUrl} alt={clubHead.name} />
                                        <AvatarFallback>{clubHead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-2xl">{clubHead.name}</CardTitle>
                                    <p className="text-lg text-blue-500 dark:text-blue-400">{clubHead.role}</p>
                                </CardHeader>
                            </Card>
                        </div>
                      </div>
                    )}
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {viceHead && <TeamMemberCard member={viceHead} onOpenModal={handleOpenModal} />}
                        {domainHeads.map(member => <TeamMemberCard key={member.id} member={member} onOpenModal={handleOpenModal} />)}
                      </div>
                    </div>
                  </div>

                  {/* Members by Domain */}
                  {domains.map(domain => (
                    <div key={domain} className="mb-12">
                      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">{domain} Team</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {team.members.filter(m => m.domain === domain).map(member => (
                          <TeamMemberCard key={member.id} member={member} onOpenModal={handleOpenModal} />
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>
      {selectedMember && <TeamMemberModal member={selectedMember} />}
    </Dialog>
  );
};

export default TeamPage;
