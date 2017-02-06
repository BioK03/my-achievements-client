"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var fileService_1 = require('../../services/fileService/fileService');
var profileDetailsService_1 = require('../../services/profileDetailsService/profileDetailsService');
var ProfileFormComponent = (function () {
    function ProfileFormComponent(profileDetailsService, router, fileService) {
        this.profileDetailsService = profileDetailsService;
        this.router = router;
        this.fileService = fileService;
        this.error = "";
        this.id = 0;
        this.firstname = "";
        this.lastname = "";
        this.picture = "";
        this.files = null;
    }
    ProfileFormComponent.prototype.parseRes = function (res) {
        if (res.length == 1) {
            // ERROR
            switch (res) {
                case "A":
                    this.error = "User not connected";
                    break;
                case "B":
                    this.error = "Internal error, server unavailable";
                    break;
                case "C":
                    this.error = "This user doesn't exist or you don't have the right to access it";
                    break;
            }
            console.error(this.error);
        }
        else {
            this.id = res["id"];
            this.firstname = res["firstname"];
            this.lastname = res["lastname"];
            if (res["profilePicture"]) {
                this.picture = res["profilePicture"];
            }
        }
    };
    ProfileFormComponent.prototype.updateFiles = function (event) {
        this.files = event.srcElement.files;
    };
    ProfileFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = JSON.parse(localStorage.getItem("user")).id;
        this.profileDetailsService.getProfile(id)
            .subscribe(function (profileDetails) {
            _this.parseRes(profileDetails);
        });
    };
    ProfileFormComponent.prototype.editAttempt = function () {
        var _this = this;
        if (this.files) {
            this.fileService.makeFileRequest('http://localhost:8100/upload', [], this.files).subscribe(function (res) {
                _this.picture = _this.fileService.getFilePath(res.paths[0]);
                _this.profileDetailsService.setEdit(_this.id, _this.firstname, _this.lastname, _this.picture).subscribe(function (res) {
                    //console.log(res);
                    _this.router.navigateByUrl("/profile");
                });
            });
        }
        else {
            this.profileDetailsService.setEdit(this.id, this.firstname, this.lastname, this.picture).subscribe(function (res) {
                //console.log(res);
                _this.router.navigateByUrl("/profile");
            });
        }
    };
    ProfileFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profileform',
            templateUrl: "profileForm.component.html"
        }), 
        __metadata('design:paramtypes', [profileDetailsService_1.ProfileDetailsService, router_1.Router, fileService_1.FileService])
    ], ProfileFormComponent);
    return ProfileFormComponent;
}());
exports.ProfileFormComponent = ProfileFormComponent;
//# sourceMappingURL=profileForm.component.js.map
