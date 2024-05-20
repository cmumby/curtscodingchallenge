/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

interface StageProps {
  children: ReactNode;
}

function Stage({ children }: StageProps) {
  return <main id="main">{children}</main>;
}

export default Stage;
