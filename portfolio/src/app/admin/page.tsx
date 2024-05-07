import React from 'react';
import dynamic from 'next/dynamic';
//import AboutForm from '../components/AboutForm/AboutForm';

const AboutFormContainer = dynamic(
  () => import('../components/AboutForm/AboutFormContainer'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

function AdminPage() {
  return <AboutFormContainer />;
}

export default AdminPage;
