import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { OAuthModule } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  constructor(private oAuthServ: OAuthService) { 
    this.inicializarLoginGmail();
  }

  inicializarLoginGmail(){

    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false, //al conectar localmente no se ocupa la seguridad
      clientId: '1099033069630-bmjjjvg49clebkbhl3m5jtk7pj4esstg.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/principal', //de aqui ser redirecciona
      scope: 'openid profile email', //nos permite extraer la informacion de la cuenta de google
    }

    this.oAuthServ.configure(config);
    this.oAuthServ.setupAutomaticSilentRefresh();
    this.oAuthServ.loadDiscoveryDocumentAndTryLogin();//Realiza la autenticacion con google
  }

    login(){
      this.oAuthServ.initLoginFlow ();//Continua el flujo de autenticacion
  }
    logout(){
      this.oAuthServ.logOut();//Finaliza la sesion
  }   
    getPerfil(){
      return this.oAuthServ.getIdentityClaims();
  }
}
