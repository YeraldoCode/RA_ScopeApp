import { Component } from '@angular/core';
import { AuthGoogleService } from '../../service/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  perfil: any = {};
  constructor(private authGoogle: AuthGoogleService,
              private ruta: Router // Importa Router desde @angular/
  ){}

  ngOnInit(): void {
    this.perfil = this.authGoogle.getPerfil();
    console.log(this.perfil);
  }

  cerrarSesion(){
    this.authGoogle.logout();
    this.ruta.navigate(['login']);
  }
}
