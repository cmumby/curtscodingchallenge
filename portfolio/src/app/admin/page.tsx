import React from 'react';
import dynamic from 'next/dynamic';
import FormLoader from '../components/FormLoader/FormLoader';

import { constants } from '../utils';

const { TOTAL_LOADED } = constants;

const AboutFormContainer = dynamic(
  () => import('../components/AboutForm/AboutFormContainer'),
  {
    loading: () => (
      <FormLoader title="About" progress={Math.random() * TOTAL_LOADED} />
    ),
    ssr: false,
  },
);

const PlacholderFormContainer = dynamic(
  () => import('../components/PlaceholderForm/PlaceholderFormContainer'),
  {
    loading: () => (
      <FormLoader title="Placeholder" progress={Math.random() * TOTAL_LOADED} />
    ),
    ssr: false,
  },
);

const ExperienceFormContainer = dynamic(
  () => import('../components/ExperienceForm/ExperienceFormContainer'),
  {
    loading: () => (
      <FormLoader title="Experience" progress={Math.random() * TOTAL_LOADED} />
    ),
    ssr: false,
  },
);

const PortfolioFormContainer = dynamic(
  () => import('../components/PortfolioForm/PortfolioFormContainer'),
  {
    loading: () => (
      <FormLoader title="Portfolio" progress={Math.random() * TOTAL_LOADED} />
    ),
    ssr: false,
  },
);

const ChallengesFormContainer = dynamic(
  () => import('../components/ChallengesForm/ChallengesFormContainer'),
  {
    loading: () => (
      <FormLoader
        title="Challenges Form"
        progress={Math.random() * TOTAL_LOADED}
      />
    ),
    ssr: false,
  },
);

function AdminPage() {
  return (
    <>
      <AboutFormContainer />
      <ExperienceFormContainer />
      <PortfolioFormContainer />
      <ChallengesFormContainer />
      {/* <PlacholderFormContainer /> */}
    </>
  );
}

export default AdminPage;
