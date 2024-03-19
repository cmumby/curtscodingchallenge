import { faker } from '@faker-js/faker';

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function createRandomEvent() {
  const topicWords = `${capitalizeWord(faker.word.noun())} . ${capitalizeWord(faker.word.verb())}s `;
  return {
    topic: topicWords,
    trendingEvent: capitalizeWord(faker.word.noun()),
    postCount: `${faker.datatype.float({ min: 10, max: 100, precision: 0.1 })}K`,
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

export const EVENTS = faker.helpers.multiple(createRandomEvent, {
  count: 3,
});

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 3,
});
