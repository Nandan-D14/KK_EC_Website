
"use client";
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

  // Helper to ensure image URLs are valid and provide fallback
  const safeImage = (url?: string) => {
    if (!url) return "https://placehold.co/200x200/cccccc/333333?text=No+Image";
    try {
      // Basic check - invalid urls will throw
      new URL(url);
      return url;
    } catch (e) {
      return "https://placehold.co/200x200/cccccc/333333?text=No+Image";
    }
  };

  const [query, setQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const clubHead = members.find((m) => m.role === "Club Head");
  const viceHead = members.find((m) => m.role === "Club Vice Head");
  const teamMembers = members
    .filter((m) => m.role !== "Club Head" && m.role !== "Club Vice Head")
    .filter((m) =>
      `${m.name} ${m.role} ${m.domain}`.toLowerCase().includes(query.toLowerCase())
    );

  const renderMemberCard = (member: Member, className: string = "") => (
    <DialogTrigger asChild key={member.id}>
      <Card
        className={`cursor-pointer transition-shadow hover:shadow-md p-3 text-center ${className}`}
        onClick={() => setSelectedMember(member)}
        aria-label={`Open details for ${member.name}`}
      >
        <CardHeader className="p-0">
          <Avatar className="w-16 h-16 mx-auto">
            <AvatarImage src={safeImage(member.pic)} alt={member.name} />
            <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="p-2">
          <CardTitle className="text-sm truncate">{member.name}</CardTitle>
          <p className="text-xs text-muted-foreground truncate">{member.role}</p>
          <p className="text-[11px] text-gray-500 truncate">{member.domain}</p>
        </CardContent>
      </Card>
    </DialogTrigger>
  );

  return (
    <Dialog>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <h1 className="text-4xl font-bold">Our Team</h1>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              aria-label="Search team members"
              placeholder="Search members by name, role..."
              className="input input-sm w-full md:w-72 px-3 py-2 rounded-md border"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="current">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="current">Current Year</TabsTrigger>
            <TabsTrigger value="previous">Previous Years</TabsTrigger>
          </TabsList>
          <TabsContent value="current">
              {/* Top Row: Head, Vice Head (highlighted) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 items-start">
                {clubHead && (
                  <div className="md:col-span-1">
                    {renderMemberCard(clubHead, "bg-yellow-50")}
                  </div>
                )}
                <div className="md:col-span-2 grid grid-cols-2 gap-4">
                  {viceHead && renderMemberCard(viceHead)}
                  {/* Small summary card or placeholder for spacing */}
                  <div />
                </div>
              </div>

              {/* Domain Heads and Members - dense grid to fit many members */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {teamMembers.map((member) => renderMemberCard(member))}
              </div>
          </TabsContent>
          <TabsContent value="previous">
            <div className="flex items-center justify-between gap-4 mb-4">
              <label className="text-sm">Jump to year:</label>
              <select
                value={selectedYear ?? ""}
                onChange={(e) => setSelectedYear(e.target.value || null)}
                className="border rounded-md p-2 text-sm"
              >
                <option value="">All</option>
                {previousYears.map((y) => (
                  <option key={y.year} value={y.year}>
                    {y.year}
                  </option>
                ))}
              </select>
            </div>
            <Accordion type="single" collapsible className="w-full mt-8">
              {previousYears
                .filter((y) => (selectedYear ? y.year === selectedYear : true))
                .map((yearData) => (
                  <AccordionItem value={yearData.year} key={yearData.year}>
                    <AccordionTrigger>{yearData.year}</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                        {yearData.members.map((member) => renderMemberCard(member))}
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
              <AvatarImage src={safeImage(selectedMember.pic)} alt={selectedMember.name} />
              <AvatarFallback>{selectedMember.name.substring(0, 2)}</AvatarFallback>
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
