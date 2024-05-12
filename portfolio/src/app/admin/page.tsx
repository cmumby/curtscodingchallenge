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

const PlacholderFormContainer = dynamic(
  () => import('../components/PlacholderForm/PlacholderFormContainer'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

const ExperienceFormContainer = dynamic(
  () => import('../components/ExperienceForm/ExperienceFormContainer'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

const PortfolioFormContainer = dynamic(
  () => import('../components/PortfolioForm/PortfolioFormContainer'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

function AdminPage() {
  return (
    <>
      <AboutFormContainer />
      <ExperienceFormContainer />
      <PortfolioFormContainer />
      <PlacholderFormContainer />
    </>
  );
}

export default AdminPage;
