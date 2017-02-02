import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { TabService } from '../../services/tabService/tabService';
import { FileService } from '../../services/fileService/fileService';
import { AchievementService } from '../../services/achievementService/achievementService';

@Component({
  moduleId: module.id,
  selector: 'achievementform',
  templateUrl: "achievementForm.component.html"
})

export class AchievementFormComponent { 
  addOrEdit: Boolean = true;

  tabid: Number = 0;
  id: Number = 0;
  name: String = "";
  icon: String = "fa fa-pencil";
  favorite: Boolean = false;
  shortDesc: String = "";
  longDesc: String = "";
  order: Number = 1;
  orderOrigin: Number = 1;

  pictures: Array<String> = [];
  files = null;

  faIcons;

  achievementList;
  tabList;
  tabColor;


  constructor(private route: ActivatedRoute, private tabService: TabService, private achievementService: AchievementService, private router: Router, private fileService: FileService){
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
            
            this.id = res["id"];
            this.name = res["name"];
            this.icon = res["icon"];
            this.favorite = res["favorite"];
            this.shortDesc = res["shortdesc"];
            this.longDesc = res["longdesc"];
            this.order = res["orderNumber"];
            this.orderOrigin = res["orderNumber"];
            this.pictures = res["images"];²

            for(let tab of this.tabList){
              if(tab.id == this.tabid){
                this.tabColor = tab.color;
                
              }
            }
          }
        );
        this.achievementService.getAchievementsOfTab(JSON.parse(localStorage.getItem("user")).id, params['tabid']).subscribe(
          res => {
            this.achievementList = res;

          }
        );
      }
    });

    this.faIcons = this.tabService.getFAIcons();

    
  }

  changeTab() {
    for(let tab of this.tabList){
      if(tab.id == this.tabid){
        this.tabColor = tab.color;
        
      }
    }
    this.order = 1;
    this.achievementService.getAchievementsOfTab(JSON.parse(localStorage.getItem("user")).id, this.tabid).subscribe(
      res => {
        this.achievementList = res;
      }
    );
  }

  updateFiles(event) {
    this.files = event.srcElement.files;
  }

  changeIcon(icon){
    this.icon = icon;
  }

  changeFavorite(favorite){
    this.favorite = favorite;
  }

  achievementAttempt(){
    if(this.id == 0){
      this.achievementService.createAchievement(
        JSON.parse(localStorage.getItem("user")).id,
        this.tabid,
        this.name,
        this.order,
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
      if(this.files){
        this.fileService.makeFileRequest('http://localhost:8100/upload', [], this.files).subscribe(
          res => {
            console.log(res);
            this.pictures = [];
            for(var path of res.paths){
              this.pictures.push(this.fileService.getFilePath(path));
            }
            console.log(this.pictures);
            this.achievementService.editAchievement(
              JSON.parse(localStorage.getItem("user")).id,
              this.tabid,
              this.id,
              this.name,
              this.order,
              this.shortDesc,
              this.longDesc,
              this.icon,
              this.favorite,
              this.pictures
            ).subscribe(
              res => {
                this.router.navigateByUrl("/editachievements");
              }
            );
            
          }
        );
      }else{
        this.achievementService.editAchievement(
          JSON.parse(localStorage.getItem("user")).id,
          this.tabid,
          this.id,
          this.name,
          this.order,
          this.shortDesc,
          this.longDesc,
          this.icon,
          this.favorite,
          this.pictures
        ).subscribe(
          res => {
            this.router.navigateByUrl("/editachievements");
          }
        );
      }
      
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
