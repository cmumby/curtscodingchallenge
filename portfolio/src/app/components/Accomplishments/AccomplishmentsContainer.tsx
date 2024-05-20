'use client';

import dynamic from 'next/dynamic';

const Accomplishments = dynamic(() => import('./Accomplishments'), {
  ssr: false,
});

const AccomplishmentsContainer = () => {
  return <Accomplishments />;
};

export default AccomplishmentsContainer;
