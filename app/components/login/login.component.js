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
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n    <h2>Se connecter \u00E0 My Achievements</h2>\n    <form>\n        <label for=\"login\">E-mail</label><br/>\n        <input id=\"login\" type=\"text\" name=\"login\" placeholder=\"john.doe@email.com\"/><br/><br/>\n        <label for=\"password\">Mot de passe</label><br/>\n        <input id=\"password\" type=\"password\" name=\"password\" placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\"/><br/><br/>\n        <input type=\"submit\" value=\"Se connecter\"/>\n    </form><br/>\n    <h4>Se connecter avec votre r\u00E9seau social pr\u00E9f\u00E9r\u00E9 :</h4><br/>\n    <span>\n        <a id=\"linkedin\" href=\"#\">\n            <img src=\"dist/images/linkedin.png\"/>\n        </a>\n    </span>\n    <span>\n        <a id=\"facebook\" href=\"#\">\n            <img src=\"dist/images/facebook.png\"/>\n        </a>\n    </span>\n    <span>\n        <a id=\"google\" href=\"#\">\n            <img src=\"dist/images/google.png\"/>\n        </a>\n    </span>\n    <span>\n        <a id=\"twitter\" href=\"#\">\n            <img src=\"dist/images/twitter.png\"/>\n        </a>\n    </span>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map