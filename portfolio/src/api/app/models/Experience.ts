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
interface ExperienceAttributes {
  id: number;
  employer: string;
  title: string;
  type: string;
  starting_year: number;
  ending_year: number;
  location: string;
  technologies: string;
  description: string;
}

// Optional attributes for `id` and `createdAt` & `updatedAt`
interface ExperienceCreationAttributes
  extends Optional<ExperienceAttributes, 'id'> {}

// Define the model
class Experience
  extends Model<ExperienceAttributes, ExperienceCreationAttributes>
  implements ExperienceAttributes
{
  public id!: number;
  public employer!: string;
  public title!: string;
  public type!: string;
  public starting_year!: number;
  public ending_year!: number;
  public location!: string;
  public technologies!: string;
  public description!: string;
}

// Initialize the model
Experience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    starting_year: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    ending_year: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    technologies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'experience',
    timestamps: false,
  },
);

// Sync the model with the database
(async () => {
  await sequelize.sync(); // Use force: true only for development, as it will drop and re-create the table
  console.log('Table synced');
})();

// Export the model
export default Experience;
