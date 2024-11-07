export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
    likes?: number;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

// src/types.ts
export interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
    postId: number;
  }
  
