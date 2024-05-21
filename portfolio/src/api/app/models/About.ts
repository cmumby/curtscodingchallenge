import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const {
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
} = process.env;
// Database connection
const sequelize = new Sequelize(
  POSTGRES_DATABASE as string,
  POSTGRES_USER as string,
  POSTGRES_PASSWORD,
  {
    dialect: 'postgres',
    host: POSTGRES_HOST,
    port: parseInt(POSTGRES_PORT as string),
  },
);

// Interfaces for attributes
interface AboutAttributes {
  id: number;
  name: string;
  profile: string;
  email: string;
  picture: string;
  starting_year: number;
  description: string;
}

// Optional attributes for `id` and `createdAt` & `updatedAt`
interface AboutCreationAttributes extends Optional<AboutAttributes, 'id'> {}

// Define the model
class About
  extends Model<AboutAttributes, AboutCreationAttributes>
  implements AboutAttributes
{
  public id!: number;
  public name!: string;
  public profile!: string;
  public email!: string;
  public picture!: string;
  public starting_year!: number;
  public description!: string;

  // Timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the model
About.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_year: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'about',
    timestamps: true,
  },
);

// Sync the model with the database
(async () => {
  await sequelize.sync(); // Use force: true only for development, as it will drop and re-create the table
  console.log('Table synced');
})();

// Export the model
export default About;
