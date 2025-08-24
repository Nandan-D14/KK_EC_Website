import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Crown, Users, Star } from 'lucide-react';

const TeamSection = () => {
  const [openYears, setOpenYears] = useState<{ [key: string]: boolean }>({ '2025': true });

  const currentTeam = {
    clubHead: {
      name: 'Ganesh',
      role: 'Club Head',
      domain: 'Overall Leadership',
      image: 'Club Head Photo',
      bio: 'Leading PESU Kannada Kutta with passion for Karnataka culture'
    },
    domainHeads: [
      {
        name: 'Anomys',
        role: 'Cultural Events Head',
        domain: 'Events & Programs',
        image: 'Domain Head 1',
        bio: 'Organizing unforgettable cultural celebrations'
      },
      {
        name: 'Sharath Gowda',
        role: 'Technical Head',
        domain: 'Digital & Media',
        image: 'Domain Head 2',
        bio: 'Managing our digital presence and tech initiatives'
      },
      {
        name: 'Anomys',
        role: 'Design & Creative Head',
        domain: 'Visual Arts',
        image: 'Domain Head 3',
        bio: 'Creating beautiful designs for our cultural events'
      },
      {
        name: 'Anomys',
        role: 'Finance & Operations Head',
        domain: 'Administration',
        image: 'Domain Head 4',
        bio: 'Ensuring smooth operations and financial management'
      }
    ]
  };

  const pastYearsLeadership = {
    '2024': {
      clubHead: { name: 'Deepika Hegde', role: 'Club Head' },
      domainHeads: [
        { name: 'Anomys', role: 'Cultural Events Head' },
        { name: 'Anomys', role: 'Technical Head' },
        { name: 'Anomysi', role: 'Design Head' }
      ]
    },
    '2023': {
      clubHead: { name: 'Kiran Bhat', role: 'Club Head' },
      domainHeads: [
        { name: 'Anomys', role: 'Cultural Events Head' },
        { name: 'Anomys', role: 'Technical Head' },
        { name: 'Anomys', role: 'Creative Head' }
      ]
    },
    '2022': {
      clubHead: { name: 'Lakshmi Iyer', role: 'Club Head' },
      domainHeads: [
        { name: 'Anomys', role: 'Events Head' },
        { name: 'Anomys', role: 'Media Head' }
      ]
    }
  };

  const toggleYear = (year: string) => {
    setOpenYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-kannada">
            ನಮ್ಮ ತಂಡ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate leaders who make our cultural celebrations possible
          </p>
        </div>

        {/* Current Year Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Leadership Team 2025</h3>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-gradient-festival text-primary-foreground">
              Current Year
            </Badge>
          </div>

          {/* Club Head */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="card-festival text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Crown className="w-6 h-6 text-secondary" />
              </div>
              <CardHeader className="pb-6">
                <div className="relative mx-auto mb-6">
                  <div className="w-32 h-32 bg-gradient-festival rounded-full flex items-center justify-center mx-auto shadow-festival">
                    <span className="text-primary-foreground font-medium">{currentTeam.clubHead.image}</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground border-2 border-background">
                      <Star className="w-3 h-3 mr-1" />
                      {currentTeam.clubHead.role}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-2xl text-primary">{currentTeam.clubHead.name}</CardTitle>
                <p className="text-muted-foreground font-medium">{currentTeam.clubHead.domain}</p>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{currentTeam.clubHead.bio}</p>
              </CardContent>
            </Card>
          </div>

          {/* Domain Heads */}
          <div>
            <h4 className="text-2xl font-bold text-primary mb-8 text-center">Domain Heads</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentTeam.domainHeads.map((member, index) => (
                <Card key={index} className="card-festival text-center group hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="relative mx-auto mb-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-golden">
                        <span className="text-accent-foreground font-medium text-sm">{member.image}</span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <Badge variant="outline" className="text-xs border-primary">
                          {member.role}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors">
                      {member.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">{member.domain}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Past Years Leadership Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Leadership History</h3>
          <div className="space-y-6">
            {Object.entries(pastYearsLeadership).map(([year, leadership]) => (
              <Card key={year} className="card-festival">
                <Collapsible open={openYears[year]} onOpenChange={() => toggleYear(year)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <CardTitle className="text-2xl text-primary">{year}</CardTitle>
                          <Badge variant="outline">Past Leadership</Badge>
                        </div>
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
                      
                      {/* Past Club Head */}
                      <div className="mb-6 pb-6 border-b border-accent/20">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                            <Crown className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-primary text-lg">{leadership.clubHead.name}</h4>
                            <p className="text-muted-foreground">{leadership.clubHead.role}</p>
                          </div>
                        </div>
                      </div>

                      {/* Past Domain Heads */}
                      <div>
                        <h5 className="font-semibold text-primary mb-4 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Domain Heads
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {leadership.domainHeads.map((member, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                              <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 text-accent-foreground" />
                              </div>
                              <div>
                                <h6 className="font-medium text-foreground">{member.name}</h6>
                                <p className="text-sm text-muted-foreground">{member.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
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

export default TeamSection;