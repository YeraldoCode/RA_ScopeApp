import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { Blog } from './Blog';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
 
 
 
@Component({
  selector: 'app-newblog',
  imports: [FormsModule],
  templateUrl: './newblog.component.html',
  styleUrl: './newblog.component.css'
})
export class NewblogComponent implements OnInit{
 
  constructor(private _service : BlogService){
 
  }
 
  ngOnInit(): void {
    //throw new Error ('Method not implemented.');
  }
  guardar(datos: any){
    let blog = new Blog(datos.titulo,datos.descripcion);
    this._service.newBlog(blog).subscribe(
      (respuesta:any)=>{
        console.log(respuesta);
      }
    );
  }
 
}