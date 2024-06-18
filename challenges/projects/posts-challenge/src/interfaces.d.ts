import { Option, Comment, Post } from './types';

export interface DropDownSelectorProps {
  options: Option[];
  //onSelect: (value: string | number) => void;
}

export interface CommentProps {
  details: Comment;
}

export interface CommentStateIndex {
  comments: { [postId: number]: CommentType[] };
}

export type PostContex = {
  posts: Post[];
  comments: Record<number, CommentType[]>;
};

export interface DataContextType {
  state: PostContex; // Example state
  setState: React.Dispatch<React.SetStateAction<PostContex>>; // Example setState function
}

export interface DataContextProps {
  state: object;
  setState: React.Dispatch<React.SetStateAction<PostContex>>;
  children: ReactNode;
}
