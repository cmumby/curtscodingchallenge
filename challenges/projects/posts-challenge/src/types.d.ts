import { ReactNode } from 'react';

type Option = {
  label: string;
  value: string | number;
};

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type Comment = {
  body: string | null;
  email: string | null;
  id: number | null;
  name: string | null;
  userId: number | null;
  postId: number | null;
};

export type CommentPost = {
  name: string | null;
  email: string | null;
  body: string | null;
};

export type PostContex = {
  posts: Post[];
  comments: Comment[];
  children: ReactNode;
};
