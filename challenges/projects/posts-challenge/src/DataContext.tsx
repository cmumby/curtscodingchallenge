import React, { createContext, useState } from 'react';
import { PostContex, DataContextType } from './interfaces';

const DataContext = createContext<DataContextType | undefined>(undefined);

// Create the provider component
export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<PostContex>({ posts: [], comments: {} });
  const stateFunctions: DataContextType = {
    state,
    setState,
  };
  return <DataContext.Provider value={stateFunctions}>{children}</DataContext.Provider>;
};

export default DataContext;
