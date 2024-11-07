"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import { Post, Comment } from '@/types';

export default function PostDetailPage() {
  const { id } = useParams();
  const postId = typeof id === 'string' ? id : '';

  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (!postId) return;

    const fetchPostData = async () => {
      try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await postResponse.json();
        setPost(postData);

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error("Failed to fetch post data", error);
      }
    };

    fetchPostData();
  }, [postId]);

  if (!post) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        <span className="ml-4 text-blue-500 font-semibold">Loading...</span>
      </div>
    );
  }

  const handleAddComment = (newComment: Comment) => {
    setComments([newComment, ...comments]);
  };

  const handleDeleteComment = (commentId: number) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-2xl p-6">
        <h1 className="text-xl py-1">Post Details</h1>
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h1 className="font-bold text-2xl text-gray-900">Title - </h1>
          <h1 className="text-3xl underline font-semibold text-gray-800 mb-4">{post.title}</h1>
          <p className="text-gray-700 leading-relaxed">{post.body}</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a Comment</h2>
          <CommentForm postId={postId} onAddComment={handleAddComment} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
          {comments.length > 0 ? (
            <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
          ) : (
            <p className="text-gray-600">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
}
