/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import './Root.css';
import { Post, Option } from '../../types';
import DropDownSelector from '../../components/DropDownSelector/DropDownSelector';
import { fetchData } from '../../utils';

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
