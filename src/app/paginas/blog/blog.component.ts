import { Component, OnInit } from '@angular/core';
import { BlogService} from '../../service/blog.service';  
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  //agregamos variables para trael el resultado de  la consulta
 
  json: any = {};
  blogs:any = []; //aqui guardaremos la tablaproductos
 
  constructor(private _srvBlogs:BlogService){
 
  }
 
  ngOnInit(): void { //dentro de este metodo colocamos la llamada que se hara para servicio
  this._srvBlogs.getAllBlogs().subscribe(
  (blogs) => {
 
    this.json = blogs;
    //console.log(this.json["status"]);   //console.log(blogs); el consol es para ver que si esta la informacion,si esta en el servicioy ya estando registrando se pueden pasar a comentarios
    //console.log(this.json["total"]);
    //console.log(this.json["result"]);
    this.blogs =this.json["result"];
    console.log(this.blogs);
 
  }
 
    );
  }
}
