import React from 'react';

interface CommentCardProps {
  comment: { id: number; name: string; body: string };
  onDelete: (commentId: number) => void;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment, onDelete }) => {
  return (
    <div className="comment-card">
      <p><strong>{comment.name}</strong>: {comment.body}</p>
      <button onClick={() => onDelete(comment.id)}>Delete</button>
    </div>
  );
};

export default CommentCard;
