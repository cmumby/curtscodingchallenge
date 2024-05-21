'use client';
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('./Contact'), {
  ssr: false,
});

const ContactContainer = () => {
  return <Contact />;
};

export default ContactContainer;
