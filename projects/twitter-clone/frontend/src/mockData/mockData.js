import { faker } from '@faker-js/faker';
import { format } from 'date-fns';
import { formatNumber } from '../util/util';

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
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

function generateRandomVerb() {
  let verb = faker.random.word();
  // Ensure the verb ends with "ing"
  while (!verb.endsWith('ing')) {
    verb = faker.random.word();
  }
  return verb.charAt(0).toUpperCase() + verb.slice(1); // Capitalize the verb
}

function generateEmailGreetings() {
  const greetings = [
    'Hey,',
    'Hi,',
    'Hello!',
    'Greetings,',
    'How is it going?',
    'I hope this message finds you well,',
    'Just wanted to drop you a quick note,',
    "I hope you're having a great day!,",
    'I wanted to reach out and say,',
    "Hope you're doing well,",
  ];

  const randomGreetings = faker.helpers.shuffle(greetings);
  return randomGreetings[1]; // Get the first 10 greetings
}

function generateRandomDate() {
  const startDate = new Date('2020-01-01'); // Start date for the range
  const endDate = new Date(); // End date for the range
  const randomDate = faker.date.between(startDate, endDate);
  return format(randomDate, 'MMM d, yyyy');
}

function createRandomMessage() {
  const gender = Math.round(Math.random()) % 2 === 0 ? 'men' : 'women';
  const sex = gender === 'women' ? 'female' : 'male';
  return {
    username: faker.internet.userName(),
    firstName: faker.person.firstName(sex),
    lastName: faker.person.lastName(sex),
    avatar: `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 100)}.jpg`, // faker.image.avatar(),
    message: `${generateEmailGreetings()} ${generateRandomVerb()} ${faker.company.buzzPhrase()}. Just wanted to shar this with you! Cheers`,
    date: `${generateRandomDate()}`,
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

export const MESSAGES = faker.helpers.multiple(createRandomMessage, {
  count: 50,
});
