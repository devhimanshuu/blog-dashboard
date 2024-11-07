import { Comment } from '@/types';

interface CommentListProps {
  comments: Comment[];
  onDeleteComment: (commentId: number) => void;
}

export default function CommentList({ comments, onDeleteComment }: CommentListProps) {
  return (
    <div className="flex flex-col p-4 gap-4 bg-white shadow-md rounded-md">
      {comments?.map(comment => (
        <div className="p-4 border border-gray-200 rounded-md shadow-sm bg-gray-50" key={comment.id}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-gray-800">{comment.name}</p>
              <p className="text-sm text-gray-600">{comment.email}</p>
            </div>
            <button
              className="ml-4 px-3 py-1 bg-red-500 text-white font-semibold text-sm rounded-md hover:bg-red-600 transition"
              onClick={() => onDeleteComment(comment.id)}
            >
              Delete
            </button>
          </div>
          <p className="mt-2 text-gray-700">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
