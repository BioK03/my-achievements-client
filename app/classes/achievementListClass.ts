import { Achievement } from './achievementClass';

export class AchievementList {
  constructor(
      public name: string,
      public color: string,
      public icon: string,
      public achievements: Achievement[]
    ){}
}