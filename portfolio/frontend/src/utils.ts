import PureCounter from '@srexi/purecounterjs';
import GLightbox from 'glightbox';

export const constants = {
  QUARTER_THENTH_SECOND: 25,
  HALF_THENTH_SECOND: 50,
  ONE_TENTH_SECOND: 100,
  THREE_TENTH_SECOND: 300,
  THREE_SECONDS: 3000,
  THIRTY_SECONDS: 30000,
};

export function animateHome() {
  GLightbox({
    selector: '.portfolio-lightbox',
  });

  new PureCounter();
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the viewport
    threshold: 0.5, // Trigger when 50% of the target is visible
  };

  return options;
}

function isBeforeSeptember(date: number | Date) {
  const SEPTEMBER = 8;
  const septemberFirst = new Date(new Date().getFullYear(), SEPTEMBER, 1);
  return date < septemberFirst;
}

function getYearsExpirence() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const yearModifier = isBeforeSeptember(currentDate) ? -1 : 0;
  const STARTING_YEAR = 2006;
  return currentYear - STARTING_YEAR + yearModifier;
}

export const YEARS_EXPRIENCE = getYearsExpirence();
