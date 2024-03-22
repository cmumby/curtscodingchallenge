import { faker } from '@faker-js/faker';

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function formatNumber(num) {
  if (num >= 1000 && num < 1000000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  if (num >= 1000000 && num < 1000000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(1)}B`;
  }
  return num.toString();
}

function createRandomEvent() {
  const topicWords = `${capitalizeWord(faker.word.noun())} . Trending `;
  return {
    topic: topicWords,
    trendingEvent: capitalizeWord(faker.word.noun()),
    postCount: `${formatNumber(faker.number.int({ min: 0, max: 5000000 }))}  `,
  };
}

function createRandomMainEvent() {
  return {
    topic: `${capitalizeWord(faker.word.adjective())}  ${capitalizeWord(
      faker.word.noun()
    )} at ${faker.location.city()}`,
    description: `${capitalizeWord(faker.word.noun())} . Starts ${faker.date.weekday()}`,
    image: faker.image.urlLoremFlickr({ category: 'location', width: 237, height: 237 }), // faker.image.url(79, 79, true),
  };
}

export function createRandomUser() {
  const gender = Math.round(Math.random()) % 2 === 0 ? 'men' : 'women';
  const sex = gender === 'women' ? 'female' : 'male';
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    firstName: faker.person.firstName(sex),
    lastName: faker.person.lastName(sex),
    email: faker.internet.email(),
    avatar: `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 100)}.jpg`, // faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const MAIN_EVENT = faker.helpers.multiple(createRandomMainEvent, {
  count: 1,
});

export const EVENTS = faker.helpers.multiple(createRandomEvent, {
  count: 3,
});

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 3,
});
