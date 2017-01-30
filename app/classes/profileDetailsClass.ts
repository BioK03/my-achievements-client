import { AchievementList } from './achievementListClass';

export class ProfileDetails {
  constructor(
      public id: number,
      public firstname: String,
      public lastname: String,
      public picture: String,
      public email: String,
      public nbAchievements: number,
      public list: AchievementList[]
    ){}
}