
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const members = [
  {
    id: 1,
    name: "Nanda Gopal",
    role: "Club Head",
    domain: "Management",
    about: "The leader of the pack. Visionary and driving force of the club.",
    pic: "https://placehold.co/400x400/orange/white?text=NG",
    links: {
      linkedin: "https://www.linkedin.com/in/nandagopal-r/",
      github: "https://github.com/NandaGopal-R",
    },
    joined: "2022-08-01",
  },
  {
    id: 2,
    name: "Kishore K",
    role: "Club Vice Head",
    domain: "Management",
    about: "The second in command, making sure things run smoothly.",
    pic: "https://placehold.co/400x400/blue/white?text=KK",
    links: {
      linkedin: "https://www.linkedin.com/in/kishore-k-91b3b324b/",
      github: "https://github.com/kishore2004k",
    },
    joined: "2022-08-01",
  },
  {
    id: 3,
    name: "Jane Doe",
    role: "Domain Head",
    domain: "Technical",
    about: "Leads the technical domain, turning ideas into reality.",
    pic: "https://placehold.co/400x400/green/white?text=JD",
    links: {
      linkedin: "#",
      github: "#",
    },
    joined: "2023-01-15",
  },
  {
    id: 4,
    name: "John Smith",
    role: "Member",
    domain: "Technical",
    about: "A passionate developer in the technical team.",
    pic: "https://placehold.co/400x400/red/white?text=JS",
    links: {
      linkedin: "#",
      github: "#",
    },
    joined: "2023-08-20",
  },
  {
    id: 5,
    name: "Emily Jones",
    role: "Member",
    domain: "Design",
    about: "Creative mind behind the club's visuals.",
    pic: "https://placehold.co/400x400/purple/white?text=EJ",
    links: {
      linkedin: "#",
      github: "#",
    },
    joined: "2023-08-20",
  },
  {
    id: 6,
    name: "Chris Lee",
    role: "Member",
    domain: "Content",
    about: "Wordsmith of the club, crafting compelling stories.",
    pic: "https://placehold.co/400x400/yellow/black?text=CL",
    links: {
      linkedin: "#",
      github: "#",
    },
    joined: "2023-08-20",
  },
];

const previousYears = [
  {
    year: "2021-2022",
    members: [
      {
        id: 101,
        name: "Previous Head",
        role: "Club Head",
        domain: "Management",
        about: "Led the club in 2021-2022.",
        pic: "https://placehold.co/400x400/gray/white?text=PH",
        links: { linkedin: "#", github: "#" },
        joined: "2021-08-01",
      },
      {
        id: 102,
        name: "Previous Vice Head",
        role: "Club Vice Head",
        domain: "Management",
        about: "Second in command for 2021-2022.",
        pic: "https://placehold.co/400x400/gray/white?text=PVH",
        links: { linkedin: "#", github: "#" },
        joined: "2021-08-01",
      },
    ],
  },
  {
    year: "2020-2021",
    members: [
      {
        id: 201,
        name: "Old Head",
        role: "Club Head",
        domain: "Management",
        about: "Led the club in 2020-2021.",
        pic: "https://placehold.co/400x400/black/white?text=OH",
        links: { linkedin: "#", github: "#" },
        joined: "2020-08-01",
      },
    ],
  },
];

type Member = (typeof members)[0];

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const clubHead = members.find((m) => m.role === "Club Head");
  const viceHead = members.find((m) => m.role === "Club Vice Head");
  const teamMembers = members.filter(
    (m) => m.role !== "Club Head" && m.role !== "Club Vice Head"
  );

  const renderMemberCard = (member: Member, className: string = "") => (
    <DialogTrigger asChild key={member.id}>
      <Card
        className={`cursor-pointer hover:shadow-lg transition-shadow ${className}`}
        onClick={() => setSelectedMember(member)}
      >
        <CardHeader>
          <Avatar className="w-24 h-24 mx-auto">
            <AvatarImage src={member.pic} alt={member.name} />
            <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="text-center">
          <CardTitle>{member.name}</CardTitle>
          <p className="text-muted-foreground">{member.role}</p>
          <p className="text-sm text-gray-500">{member.domain}</p>
        </CardContent>
      </Card>
    </DialogTrigger>
  );

  return (
    <Dialog>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>

        <Tabs defaultValue="current">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="current">Current Year</TabsTrigger>
            <TabsTrigger value="previous">Previous Years</TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            {/* Top Row: Head, Vice Head */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              {clubHead && renderMemberCard(clubHead, "md:col-span-1")}
              <div className="space-y-8">
                {viceHead && renderMemberCard(viceHead)}
              </div>
            </div>

            {/* Domain Heads and Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => renderMemberCard(member))}
            </div>
          </TabsContent>
          <TabsContent value="previous">
            <Accordion type="single" collapsible className="w-full mt-8">
              {previousYears.map((yearData) => (
                <AccordionItem value={yearData.year} key={yearData.year}>
                  <AccordionTrigger>{yearData.year}</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {yearData.members.map((member) =>
                        renderMemberCard(member)
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>

      {selectedMember && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedMember.name}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col md:flex-row gap-8">
            <Avatar className="w-48 h-48 mx-auto md:mx-0">
              <AvatarImage src={selectedMember.pic} alt={selectedMember.name} />
              <AvatarFallback>
                {selectedMember.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">About</h3>
                <p>{selectedMember.about}</p>
              </div>
              <div>
                <h3 className="font-bold">Role</h3>
                <p>{selectedMember.role}</p>
              </div>
              <div>
                <h3 className="font-bold">Domain</h3>
                <p>{selectedMember.domain}</p>
              </div>
              <div>
                <h3 className="font-bold">Date Joined</h3>
                <p>{new Date(selectedMember.joined).toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="font-bold">Links</h3>
                <div className="flex gap-4">
                  <a
                    href={selectedMember.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={selectedMember.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default TeamPage;
