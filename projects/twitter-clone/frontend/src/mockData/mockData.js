import { faker } from '@faker-js/faker';

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function createRandomEvent() {
  const topicWords = `${capitalizeWord(faker.word.noun())} . ${capitalizeWord(faker.word.verb())}s `;
  return {
    topic: topicWords,
    trendingEvent: capitalizeWord(faker.word.noun()),
    postCount: `${faker.datatype.float({ min: 10, max: 100, precision: 0.1 })}K`,
  };
}

export const EVENTS = faker.helpers.multiple(createRandomEvent, {
  count: 3,
});
