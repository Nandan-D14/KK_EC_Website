
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Heart, MessageSquare, MoreHorizontal } from 'lucide-react';

const mockComments = [
  {
    id: 1,
    author: 'Nandhakumar',
    avatar: 'https://github.com/nandhakumar-7.png',
    text: 'This is an amazing post! Thanks for sharing.',
    likes: 15,
    replies: [
      {
        id: 2,
        author: 'Jane Smith',
        avatar: 'https://github.com/shadcn.png',
        text: 'I agree! I learned a lot.',
        likes: 3,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    author: 'Sam Wilson',
    avatar: 'https://github.com/shadcn.png',
    text: 'Great insights. Looking forward to more content.',
    likes: 8,
    replies: [],
  },
  {
    id: 4,
    author: 'Emily Brown',
    avatar: 'https://github.com/shadcn.png',
    text: 'Can you elaborate on the third point?',
    likes: 2,
    replies: [
      {
        id: 5,
        author: 'Nandhakumar',
        avatar: 'https://github.com/nandhakumar-7.png',
        text: 'Sure! I will write a follow-up post on that topic.',
        likes: 5,
        replies: [],
      },
    ],
  },
];

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="flex space-x-4 my-4">
      <Avatar>
        <AvatarImage src={comment.avatar} />
        <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-muted p-3 rounded-lg">
          <div className="flex justify-between">
            <span className="font-semibold">{comment.author}</span>
            <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="text-sm">{comment.text}</p>
        </div>
        <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
          <button className="flex items-center space-x-1 hover:text-primary">
            <Heart className="h-4 w-4" />
            <span>{comment.likes}</span>
          </button>
          <button className="hover:text-primary" onClick={() => setShowReplies(!showReplies)}>
            <MessageSquare className="h-4 w-4" />
          </button>
        </div>
        {showReplies && comment.replies && comment.replies.length > 0 && (
          <div className="ml-8 mt-4 border-l-2 border-muted pl-4">
            {comment.replies.map((reply) => (
              <Comment key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CommentThread = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Comments</h3>
      {mockComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentThread;
