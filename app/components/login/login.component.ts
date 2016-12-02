import { Component } from '@angular/core';
@Component({
  selector: 'login',
  template: `
    <h2>Se connecter à <span id="logoName">MY<span>ACHIEVEMENTS</span></span></h2>
    <form>
        <label for="login">E-mail</label><br/>
        <input id="login" type="email" name="login" placeholder="john.doe@email.com" required/><br/><br/>
        <label for="password">Mot de passe</label><br/>
        <input id="password" type="password" name="password" placeholder="••••••••••••" required/><br/><br/>
        <input type="submit" value="Se connecter"/>
    </form><br/>
    <h4>Se connecter avec votre réseau social préféré :</h4><br/>
    <span>
        <a id="linkedin" href="#">
            <img src="dist/images/linkedin.png"/>
        </a>
    </span>
    <span>
        <a id="facebook" href="#">
            <img src="dist/images/facebook.png"/>
        </a>
    </span>
    <span>
        <a id="google" href="#">
            <img src="dist/images/google.png"/>
        </a>
    </span>
    <span>
        <a id="twitter" href="#">
            <img src="dist/images/twitter.png"/>
        </a>
    </span>

    `
})
export class LoginComponent { }
