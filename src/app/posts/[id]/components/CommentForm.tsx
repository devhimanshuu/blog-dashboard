import { useState } from 'react';
import { Comment } from '@/types';

interface CommentFormProps {
  postId: string;
  onAddComment: (newComment: Comment) => void;
}
export default function CommentForm({ postId,onAddComment}: CommentFormProps) {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      postId: parseInt(postId, 10), 
      id: Date.now(),
      name,
      email: `${name}@example.com`,
      body,
    };
    
    onAddComment(newComment);
    setName('');
    setBody('')
  };

  return (
    <form className='flex gap-10 mx-5' onSubmit={handleSubmit}>
      <input className=' text-center' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      <textarea className=' text-center' value={body} onChange={(e) => setBody(e.target.value)} placeholder="Your comment" />
      <button className=' border border-black bg-green-500 font-bold px-2' type="submit">Add Comment</button>
    </form>
  );
}
