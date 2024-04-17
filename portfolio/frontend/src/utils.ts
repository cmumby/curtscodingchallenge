import PureCounter from '@srexi/purecounterjs';
import GLightbox from 'glightbox';

export const constants = {
  QUARTER_SECOND: 25,
  HALF_SECOND: 50,
  ONE_SECOND: 100,
  THREE_SECONDS: 300,
  TEN_SECONDS: 1000,
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
