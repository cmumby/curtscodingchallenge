import About from '../models/About';
import Skill from '../models/Skill';
const about = async (res: any, query, dbname) => {
  try {
    const allAboutRecords = await About.findAll();
    const allSkillRecords = await Skill.findAll();
    const response = { about: allAboutRecords, skills: allSkillRecords };
    res.json(response);
  } catch (error) {
    console.error('Error retrieving records:', error);
    return null;
  }
};

module.exports = about;
