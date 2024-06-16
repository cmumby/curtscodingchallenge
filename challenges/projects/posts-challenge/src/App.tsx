/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useContext } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Post } from './types';
import DataContext from './DataContext';

import './App.css';
import Root from './pages/Root/Root';
import Posts from './pages/Posts/Posts';

// takes the posts payload and converts it into labels and options for the dropdown

const fetchData = async () => {
  const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

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

function App() {
  const context = useContext(DataContext);
  //console.log({ context });
  const { state, setState } = context;
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    const saveData = async () => {
      // featches data and saves it locally in state
      const results: Post[] = await fetchData();
      //setData(results);
      setState(results);
      console.log({ state });
    };
    saveData();
  }, []);

  // useEffect(() => {
  //   setState(data);
  //   console.log('DATA', { data, state });
  //   console.log({ state });
  // }, [data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/posts/:postId" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
