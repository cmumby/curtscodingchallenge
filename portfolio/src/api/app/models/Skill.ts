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
interface SkillAttributes {
  id: number;
  name: string;
  total_years: number;
}

// Optional attributes for `id` and `createdAt` & `updatedAt`
interface SkillCreationAttributes extends Optional<SkillAttributes, 'id'> {}

// Define the model
class Skill
  extends Model<SkillAttributes, SkillCreationAttributes>
  implements SkillAttributes
{
  public id!: number;
  public name!: string;
  public total_years!: number;
}

// Initialize the model
Skill.init(
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
    total_years: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'skill',
    timestamps: false,
  },
);

// Sync the model with the database
(async () => {
  await sequelize.sync(); // Use force: true only for development, as it will drop and re-create the table
  console.log('Table synced');
})();

// Export the model
export default Skill;
