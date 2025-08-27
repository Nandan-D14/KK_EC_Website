
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const topAuthors = [
  { name: 'Nandhakumar', avatar: 'https://github.com/nandhakumar-7.png', posts: 25 },
  { name: 'Jane Smith', avatar: 'https://github.com/shadcn.png', posts: 18 },
  { name: 'Sam Wilson', avatar: 'https://github.com/shadcn.png', posts: 12 },
];

const TopAuthorsCarousel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Authors</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel>
          <CarouselContent>
            {topAuthors.map((author, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center text-center p-4">
                  <Avatar className="h-16 w-16 mb-2">
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold">{author.name}</h4>
                  <p className="text-sm text-muted-foreground">{author.posts} posts</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default TopAuthorsCarousel;
