import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Post } from './types';

interface DataContextType {
  state: Post[];
  setState: Dispatch<SetStateAction<Post[]>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

// Create the provider component
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [state, setState] = useState<Post[]>([]);

  return <DataContext.Provider value={{ state, setState }}>{children}</DataContext.Provider>;
};

export default DataContext;
