"use client";

import { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
import FilterDropdown from "./components/FilterDropdown";
import { Post, User } from "@/types";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      const [postsRes, usersRes] = await Promise.all([
        fetch("/api/posts").then((res) => res.json()),
        fetch("/api/users").then((res) => res.json()),
      ]);
      setPosts(postsRes);
      setUsers(usersRes);
    };
    fetchPostsAndUsers();
  }, []);

  const filteredPosts = selectedUser
    ? posts.filter((post) => post.userId === selectedUser)
    : posts;

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // const handleUserChange = (userId: number | null) => {
  //   setSelectedUser(userId);
  //   setCurrentPage(1);
  // };

  // console.log(posts)
  return (
    <div className=" mx-auto p-6 h-screen bg-gray-400 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Blog Dashboard
      </h1>

      {posts.length > 0 ? (
        <div>
          <div className="flex justify-end mb-6">
            <FilterDropdown users={users} onSelectUser={setSelectedUser} />
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {paginatedPosts.map((post) => {
              const user = users.find((user) => user.id === post.userId);
              return <PostCard key={post.id} post={post} user={user} />;
            })}
          </div>

          <div className="flex justify-center py-5">
            <div className="inline-flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    currentPage === index + 1
                      ? "bg-green-600 text-white"
                      : "bg-white text-green-600 border border-green-600"
                  } hover:bg-blue-500 hover:text-white transition duration-200`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mt-[18rem] justify-center items-center">
          <div className="w-10 h-10 border-4 border-green-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          <span className="ml-4 text-green-500 font-semibold">Loading...</span>
        </div>
      )}
    </div>
  );
}
