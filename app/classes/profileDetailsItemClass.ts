import { ProfileDetailsListItem } from './profiledetailslistitem';

export class ProfileDetailsItem {
  constructor(
      public name: string,
      public color: string,
      public icon: string,
      public list: ProfileDetailsListItem[]
    ){}

  
}