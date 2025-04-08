import { Component } from '@angular/core';
import { AuthGoogleService } from '../../service/auth-google.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authGoogle: AuthGoogleService) { 

  }

  login(){
    this.authGoogle.login();
  }
}
