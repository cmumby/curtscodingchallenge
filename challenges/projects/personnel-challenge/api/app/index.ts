// api/app/index.ts
import express from 'express';
import { sequelize, Client } from './db';
import clientRouter from './routes/clients';
import { faker } from '@faker-js/faker';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/clients', clientRouter);

async function seedClients() {
    const simpsonsNames = [
      "Homer Simpson", "Marge Simpson", "Bart Simpson", "Lisa Simpson", "Maggie Simpson",
      "Ned Flanders", "Maude Flanders", "Rod Flanders", "Todd Flanders",
      "Mr. Burns", "Waylon Smithers", "Barney Gumble", "Moe Szyslak", "Apu Nahasapeemapetilon",
      "Chief Wiggum", "Ralph Wiggum", "Milhouse Van Houten", "Nelson Muntz",
      "Principal Skinner", "Edna Krabappel", "Groundskeeper Willie", "Seymour Skinner",
      "Comic Book Guy", "Troy McClure", "Lenny Leonard", "Carl Carlson", "Patty Bouvier",
      "Selma Bouvier", "Dr. Hibbert", "Dr. Nick", "Reverend Lovejoy", "Helen Lovejoy",
      "Mayor Quimby", "Krusty the Clown", "Sideshow Bob", "Sideshow Mel", "Kent Brockman",
      "Martin Prince", "Abe Simpson"
    ];
  
    const simpsonsClients = simpsonsNames.map((fullName) => {
      const [firstName, ...rest] = fullName.split(" ");
      const lastName = rest.join(" ") || "Simpson";
  
      return {
        firstName,
        lastName,
        email: faker.internet.email(firstName, lastName),
        phone: faker.phone.number(),
        birthDate: faker.date.past({ years: 50, refDate: new Date(2000, 0, 1) }).toISOString().split('T')[0],
        policyNumber: faker.string.uuid(),
        coverageAmount: faker.number.int({ min: 10000, max: 100000 }),
        premium: faker.number.float({ min: 100, max: 1000 }),
        address: faker.location.streetAddress(),
      };
    });
  
    const fillerClients = Array.from({ length: 60 }).map(() => ({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      birthDate: faker.date.past({ years: 50, refDate: new Date(2000, 0, 1) }).toISOString().split('T')[0],
      policyNumber: faker.string.uuid(),
      coverageAmount: faker.number.int({ min: 10000, max: 100000 }),
      premium: faker.number.float({ min: 100, max: 1000 }),
      address: faker.location.streetAddress(),
    }));
  
    await Client.bulkCreate([...simpsonsClients, ...fillerClients]);
  }
  

(async () => {
  try {
    await sequelize.sync({ force: true }); // Reset DB on start (for dev only)
    await seedClients();
    console.log('Database synced and seeded');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
})();
