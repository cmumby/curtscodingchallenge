/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useContext } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Post as PostType } from './types';
import DataContext from './DataContext';

import './App.css';
import Root from './pages/Root/Root';
import Post from './pages/Posts/Post';
import NotFound from './pages/NotFound/NotFound';
import { fetchData } from './utils';

// takes the posts payload and converts it into labels and options for the dropdown

function App() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('Component "App" needs a Dataprovider');
  }

  const { state, setState } = context;
  useEffect(() => {
    const saveData = async () => {
      // featches data and saves it locally in state
      const results: PostType[] = await fetchData('https://jsonplaceholder.typicode.com/posts');
      const newState = { ...state, posts: results, comments: [] };
      if (Object.prototype.hasOwnProperty.call(state, 'posts') && state.posts.length < 1) setState(newState);
    };
    saveData();
  }, [state]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Root />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
