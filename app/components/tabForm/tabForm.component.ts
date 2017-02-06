import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { TabService } from '../../services/tabService/tabService';

@Component({
  moduleId: module.id,
  selector: 'tabform',
  templateUrl: "tabForm.component.html"
})

export class TabFormComponent { 
  addOrEdit: Boolean = true;

  id: Number = 0;
  name: String = "";
  color: String = "#33B5E5";
  icon: String = "fa fa-pencil";
  order: Number = 1;
  orderOrigin: Number = 1;

  faIcons;

  tabList;


  constructor(private route: ActivatedRoute, private tabService: TabService, private router: Router){
    this.route.queryParams.subscribe((params)=> {
      if(params['id']){
        this.addOrEdit = false;
        this.tabService.getTab(JSON.parse(localStorage.getItem("user")).id, params['id']).subscribe(
          res => {
            this.id = res["id"];
            this.name = res["name"];
            this.color = res["color"];
            this.icon = res["icon"];
            this.order = res["orderNumber"];
            this.orderOrigin = res["orderNumber"];
          }
        );
      }
    });

    this.faIcons = this.tabService.getFAIcons();

    this.tabService.getAllTabs(JSON.parse(localStorage.getItem("user")).id).subscribe(
      res => {
        this.tabList = res;
      }
    );
  }

  changeIcon(icon){
    this.icon = icon;
  }

  tabAttempt(){
    if(this.id == 0){
      this.tabService.createTab(this.order, this.name, this.color, this.icon, JSON.parse(localStorage.getItem("user")).id).subscribe(
        res => {
          this.router.navigateByUrl("/edittabs");
        }
      );
    }else{
      this.tabService.editTab(this.id, this.order, this.name, this.color, this.icon, JSON.parse(localStorage.getItem("user")).id).subscribe(
        res => {
          this.router.navigateByUrl("/edittabs");
        }
      );
    }
  }

  deleteAttempt() {
    if(this.id == 0) return;
    this.tabService.deleteTab(JSON.parse(localStorage.getItem("user")).id, this.id).subscribe(
      res => {
        this.router.navigateByUrl("/edittabs");
      }
    );
  }
}

