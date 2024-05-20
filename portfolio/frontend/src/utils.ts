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

function isBeforeSeptember(date: number | Date): boolean {
  const SEPTEMBER: number = 8;
  const septemberFirst: Date = new Date(new Date().getFullYear(), SEPTEMBER, 1);
  return date < septemberFirst;
}

function getYearsExpirence(): number {
  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();
  const yearModifier: number = isBeforeSeptember(currentDate) ? -1 : 0;
  const STARTING_YEAR: number = 2006;
  return currentYear - STARTING_YEAR + yearModifier;
}

export const select = (el: string, all: boolean = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

export const on = (type: string, el: string, listener: (e: Event) => void, all: boolean = false) => {
  const selectEl = select(el, all);
  if (selectEl) {
    if (all && Array.isArray(selectEl)) {
      selectEl.forEach(e => (e as Element).addEventListener(type, listener));
    } else {
      (selectEl as Element).addEventListener(type, listener);
    }
  }
};

export const YEARS_EXPRIENCE = getYearsExpirence();
