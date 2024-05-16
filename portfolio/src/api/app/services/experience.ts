import Experience from '../models/Experience';

const experience = async (res: any, query, dbname) => {
  try {
    const experiences = await Experience.findAll();
    const response = { experience: experiences };
    res.json(response);
  } catch (error) {
    console.error('Error retrieving records:', error);
    return null;
  }
};

export default experience;
