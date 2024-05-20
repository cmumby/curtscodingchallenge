export type TinyMCEEditor = {
  getContent: () => string;
};

export type SkillContent = {
  name: string;
  years: number;
};

export type ExperienceContent = {
  name: string;
  title: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  startingYear: number;
  endingYear: number;
  currentEmployer: boolean;
  location: string;
  skillsList: string;
  description: string;
};

export type Visibility = Boolean;

export type Direction = 'up' | 'down';
