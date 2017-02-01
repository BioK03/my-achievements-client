import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { TabService } from '../../services/tabService/tabService';
import { AchievementService } from '../../services/achievementService/achievementService';

@Component({
  moduleId: module.id,
  selector: 'achievementform',
  templateUrl: "achievementForm.component.html"
})

export class AchievementFormComponent { 
  addOrEdit: Boolean = true;
  tabList;

  tabid: Number = 0;
  id: Number = 0;
  name: String = "";
  icon: String = "fa fa-pencil";
  favorite: Boolean = false;
  shortDesc: String = "";
  longDesc: String = "";

  faIcons;


  constructor(private route: ActivatedRoute, private tabService: TabService, private achievementService: AchievementService, private router: Router){
    this.tabService.getAllTabs(JSON.parse(localStorage.getItem("user")).id).subscribe(
      res => {
        this.tabList = res;
      }
    );
    this.route.queryParams.subscribe((params)=> {
      if(params['id'] && params['tabid']){
        this.addOrEdit = false;
        this.tabid = params['tabid'];
        this.achievementService.getAchievement(
          JSON.parse(localStorage.getItem("user")).id,
          params['tabid'],
          params['id']
        ).subscribe(
          res => {
            console.log(res);
            this.id = res["id"];
            this.name = res["name"];
            this.icon = res["icon"];
            this.favorite = res["favorite"];
            this.shortDesc = res["shortdesc"];
            this.longDesc = res["longdesc"];
          }
        );
      }
    });

    this.faIcons = this.tabService.getFAIcons();
  }

  changeIcon(icon){
    this.icon = icon;
  }

  changeFavorite(favorite){
    this.favorite = favorite;
  }

  achievementAttempt(){
    console.log(this.tabid);
    if(this.id == 0){
      this.achievementService.createAchievement(
        JSON.parse(localStorage.getItem("user")).id,
        this.tabid,
        this.name,
        this.shortDesc,
        this.longDesc,
        this.icon,
        this.favorite
      ).subscribe(
        res => {
          this.router.navigateByUrl("/editachievements");
        }
      )
    }else{
      this.achievementService.editAchievement(
        JSON.parse(localStorage.getItem("user")).id,
        this.tabid,
        this.id,
        this.name,
        this.shortDesc,
        this.longDesc,
        this.icon,
        this.favorite
      ).subscribe(
        res => {
          this.router.navigateByUrl("/editachievements");
        }
      )
    }
  }

  deleteAttempt(){
    this.achievementService.deleteAchievement(
      JSON.parse(localStorage.getItem("user")).id,
      this.tabid,
      this.id
    ).subscribe(
      res => {
        this.router.navigateByUrl("/editachievements");
      }
    )
  }
}
