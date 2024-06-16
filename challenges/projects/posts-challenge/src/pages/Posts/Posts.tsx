/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useContext } from 'react';
import './Posts.css';
import { Post, Comment as CommentType } from '../../types';
import { useParams } from 'react-router-dom';
import DataContext from '../../DataContext';
import Comment from '../../components/Comment/Comment';

const fetchData = async (id: number) => {
  const API_ENDPOINT = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

  const headers: any = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:5173',
  };
  let payload: any = [];
  try {
    const response = await fetch(API_ENDPOINT, headers);
    if (response.ok) {
      payload = await response.json();
      return payload;
    }
  } catch (e) {
    console.log({ e });
  }
  return payload || [];
};

function Posts() {
  const [comments, setComments] = useState<CommentType[]>();
  const context = useContext(DataContext);
  const { state } = context || {};
  const { postId } = useParams<{ postId: string }>();
  const postIdNumber = postId ? parseInt(postId, 10) : undefined;
  const post = state?.find((post: Post) => post.id === postIdNumber);

  useEffect(() => {
    const saveData = async () => {
      // featches data and saves it locally in state
      const results: CommentType[] = await fetchData(postIdNumber as number);
      setComments(results);
    };
    saveData();
  }, [state]);

  if (!post || !comments) {
    // wait for the population of post and show a loader in the meantime
    return <div>Loading Post...</div>;
  }

  const relatedComments = (comments as CommentType[]).map((comment: CommentType) => {
    return <Comment details={comment} />;
  });
  const { title, body } = post;
  return (
    <div className="post">
      <h1>{title}</h1>
      <main className="details">
        <article>{body}</article>
      </main>
      <h2>Comments ({relatedComments.length})</h2>
      <div className="seperator" />
      <section className="comments">{relatedComments}</section>
    </div>
  );
}

export default Posts;
