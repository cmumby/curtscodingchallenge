/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import './Root.css';
import { Post, Option } from '../../types';
import DropDownSelector from '../../components/DropDownSelector/DropDownSelector';
import { fetchData } from '../../utils';

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
      const results: Post[] = await fetchData('https://jsonplaceholder.typicode.com/posts');
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
