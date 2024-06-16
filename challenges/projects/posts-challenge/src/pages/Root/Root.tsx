/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import './Root.css';
import { Post, Option } from '../../types';
import DropDownSelector from '../../components/DropDownSelector/DropDownSelector';

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
// takes the posts payload and converts it into labels and options for the dropdown
const getDropdownOptions = (posts: Post[]): Option[] => {
  const options: Option[] = [];
  posts.forEach(post => {
    options.push({ label: post.title, value: post.id });
  });
  return options as unknown as Option[];
};

function Root() {
  const [dropdownOptions, setDropdownOptions] = useState<Option[]>([]);
  useEffect(() => {
    const saveData = async () => {
      // featches data and saves it locally in state
      const results: Post[] = await fetchData();
      setDropdownOptions(getDropdownOptions(results));
    };
    saveData();
  }, []);

  return (
    <>
      <h1>Recent Posts</h1>
      <DropDownSelector options={dropdownOptions} />
    </>
  );
}

export default Root;
