export interface ISkillList {
  title: string;
  skills: ISkill[];
}

export interface ISkillSection {
  skillList: ISkillList[];
}

export interface ISkill {
  skillName: string;
  fullStars: number;
  halfStars?: number;
  emptyStars?: number;
  description?: string;
}
